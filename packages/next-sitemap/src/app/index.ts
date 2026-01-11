import {
  type SitemapConfig,
  type SitemapEntry,
  type PageModule,
  type ChangeFrequency,
  buildUrl,
  generateSitemapXml,
  generateSitemapIndexXml,
  shouldExclude,
  getPriority,
  getChangeFreq,
} from "../index";

export type { SitemapConfig, SitemapEntry, ChangeFrequency };

export interface CreateSitemapHandlerOptions extends SitemapConfig {
  /**
   * The require.context result for page discovery
   * Example: require.context('./[locale]', true, /\/page\.tsx$/)
   */
  pagesContext: {
    keys: () => string[];
    (key: string): PageModule;
  };

  /**
   * Enable debug logging to diagnose issues with route discovery
   * Logs info about generateStaticParams calls and skipped routes
   * @default false
   */
  debug?: boolean;
}

interface RouteData {
  pathname: string;
  dynamicSegments: string[];
  getParams: (() => Promise<Record<string, string>[]>) | null;
}

function extractRoutes(
  pagesContext: CreateSitemapHandlerOptions["pagesContext"],
  localeSegment: string
): RouteData[] {
  const routes: RouteData[] = [];

  for (const key of pagesContext.keys()) {
    // Skip catch-all routes like [...not_found]
    if (key.includes("[...")) continue;

    const pageModule = pagesContext(key);

    // Convert file path to URL path
    // ./projects/[id]/page.tsx -> /projects/[id]
    // Also remove route groups like (legal) and locale segment
    let pathname = key
      .replace("./", "/")
      .replace("/page.tsx", "");

    // Only strip locale segment if one is configured
    if (localeSegment) {
      pathname = pathname.replace(
        new RegExp(`^/${localeSegment.replace(/[[\]]/g, "\\$&")}`),
        ""
      );
    }

    // Remove route groups like (frontend), (legal), etc.
    pathname = pathname.replace(/\/\([^)]+\)/g, "");

    // Skip invalid paths that contain src/ or app/ segments
    if (/(?:^|\/)(src|app)(?:\/|$)/.test(pathname)) continue;

    // Ensure pathname starts with / and handle empty paths
    if (!pathname || pathname === "") {
      pathname = "/";
    } else if (!pathname.startsWith("/")) {
      pathname = "/" + pathname;
    }

    // Extract dynamic segments
    const dynamicSegments =
      pathname.match(/\[([^\]]+)\]/g)?.map((s) => s.slice(1, -1)) || [];

    routes.push({
      pathname,
      dynamicSegments,
      getParams: pageModule.generateStaticParams || null,
    });
  }

  return routes;
}

async function getAllPaths(routes: RouteData[], debug = false): Promise<string[]> {
  const allPaths: string[] = ["/"];
  const seenPaths = new Set<string>(["/"]); // Avoid duplicates

  for (const route of routes) {
    if (route.dynamicSegments.length === 0) {
      // Static route
      if (route.pathname !== "/" && !seenPaths.has(route.pathname)) {
        allPaths.push(route.pathname);
        seenPaths.add(route.pathname);
      }
    } else if (route.getParams) {
      // Dynamic route with generateStaticParams
      try {
        const params = await route.getParams();

        if (debug) {
          console.log(`[next-sitemap] ${route.pathname}: generateStaticParams returned ${params.length} params`);
        }

        for (const param of params) {
          let dynamicPath = route.pathname;
          for (const segment of route.dynamicSegments) {
            const value = param[segment];
            if (value === undefined) {
              if (debug) {
                console.warn(`[next-sitemap] ${route.pathname}: missing param "${segment}" in`, param);
              }
              continue;
            }
            dynamicPath = dynamicPath.replace(`[${segment}]`, value);
          }
          if (!seenPaths.has(dynamicPath)) {
            allPaths.push(dynamicPath);
            seenPaths.add(dynamicPath);
          }
        }
      } catch (error) {
        console.error(`[next-sitemap] Error calling generateStaticParams for ${route.pathname}:`, error);
        // Continue with other routes instead of failing completely
      }
    } else if (route.dynamicSegments.length > 0) {
      // Dynamic route without generateStaticParams - warn user
      if (debug) {
        console.warn(
          `[next-sitemap] Skipping dynamic route ${route.pathname}: no generateStaticParams exported. ` +
          `Use additionalSitemaps for routes that fetch data at runtime.`
        );
      }
    }
  }

  return allPaths;
}

function pathsToEntries(
  paths: string[],
  config: SitemapConfig
): SitemapEntry[] {
  const { baseUrl, locales = [], defaultLocale, exclude, priority, changeFreq } = config;

  // Filter out excluded paths
  const filteredPaths = paths.filter((pathname) => !shouldExclude(pathname, exclude));

  return filteredPaths.map((pathname) => {
    const entry: SitemapEntry = {
      url: buildUrl(baseUrl, pathname, defaultLocale, defaultLocale),
      lastModified: new Date(),
      changeFrequency: getChangeFreq(pathname, changeFreq),
      priority: getPriority(pathname, priority),
    };

    if (locales.length > 0) {
      entry.alternates = {
        languages: Object.fromEntries(
          locales.map((locale) => [
            locale,
            buildUrl(baseUrl, pathname, locale, defaultLocale),
          ])
        ),
      };
    }

    return entry;
  });
}

/**
 * Create handlers for sitemap index route
 * Use in: app/sitemap.xml/route.ts
 */
export function createSitemapIndexHandler(options: CreateSitemapHandlerOptions) {
  const { urlsPerSitemap = 5000, locales = [], defaultLocale, additionalSitemaps, exclude, debug = false } = options;
  // Auto-detect localeSegment if i18n is configured
  const localeSegment = options.localeSegment ?? (locales.length > 0 || defaultLocale ? "[locale]" : "");
  const routes = extractRoutes(options.pagesContext, localeSegment);

  return {
    GET: async () => {
      if (debug) {
        console.log(`[next-sitemap] Found ${routes.length} routes:`);
        routes.forEach((r) => {
          const hasParams = r.getParams ? "✓ generateStaticParams" : "✗ no generateStaticParams";
          const segments = r.dynamicSegments.length > 0 ? ` [${r.dynamicSegments.join(", ")}]` : "";
          console.log(`  ${r.pathname}${segments} - ${hasParams}`);
        });
      }

      const allPaths = await getAllPaths(routes, debug);
      // Filter excluded paths for accurate count
      const filteredPaths = allPaths.filter((pathname) => !shouldExclude(pathname, exclude));
      const sitemapCount = Math.max(1, Math.ceil(filteredPaths.length / urlsPerSitemap));
      const xml = generateSitemapIndexXml(options.baseUrl, sitemapCount, {
        additionalSitemaps,
      });

      return new Response(xml, {
        headers: { "Content-Type": "application/xml" },
      });
    },
  };
}

/**
 * Create handlers for individual sitemap routes
 * Use in: app/sitemap.xml/[id]/route.ts
 */
export function createSitemapHandler(options: CreateSitemapHandlerOptions) {
  const { urlsPerSitemap = 5000, locales = [], defaultLocale, exclude, debug = false } = options;
  // Auto-detect localeSegment if i18n is configured
  const localeSegment = options.localeSegment ?? (locales.length > 0 || defaultLocale ? "[locale]" : "");
  const routes = extractRoutes(options.pagesContext, localeSegment);

  // Helper to get filtered paths (excludes are applied here for pagination)
  const getFilteredPaths = async () => {
    const allPaths = await getAllPaths(routes, debug);
    return allPaths.filter((pathname) => !shouldExclude(pathname, exclude));
  };

  return {
    generateStaticParams: async () => {
      const filteredPaths = await getFilteredPaths();
      const sitemapCount = Math.max(1, Math.ceil(filteredPaths.length / urlsPerSitemap));
      return Array.from({ length: sitemapCount }, (_, i) => ({ id: String(i) }));
    },

    GET: async (
      _request: Request,
      { params }: { params: Promise<{ id: string }> }
    ) => {
      const { id } = await params;
      const sitemapId = parseInt(id, 10);

      const filteredPaths = await getFilteredPaths();
      const start = sitemapId * urlsPerSitemap;
      const end = start + urlsPerSitemap;
      const paths = filteredPaths.slice(start, end);

      // Note: pathsToEntries also filters, but paths are already filtered here
      // We pass the config for priority/changeFreq calculation
      const entries = pathsToEntries(paths, { ...options, exclude: undefined });
      const xml = generateSitemapXml(entries);

      return new Response(xml, {
        headers: { "Content-Type": "application/xml" },
      });
    },
  };
}

