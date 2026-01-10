import type { NextApiRequest, NextApiResponse } from "next";
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

export interface CreateSitemapApiHandlerOptions extends SitemapConfig {
  /**
   * The require.context result for page discovery
   * Example: require.context('./', true, /^\.\/(?!\[|_|api\/).*\.tsx$/)
   */
  pagesContext: {
    keys: () => string[];
    (key: string): PageModule;
  };

  /**
   * Enable debug logging to diagnose issues with route discovery
   * Logs info about getStaticPaths calls and skipped routes
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
  pagesContext: CreateSitemapApiHandlerOptions["pagesContext"],
  localeSegment: string
): RouteData[] {
  const routes: RouteData[] = [];

  for (const key of pagesContext.keys()) {
    // Skip catch-all routes like [...slug], API routes, and special files
    if (key.includes("[...")) continue;
    if (key.includes("/api/")) continue;
    if (key.includes("/_")) continue;

    const pageModule = pagesContext(key);

    // Convert file path to URL path
    // ./about.tsx -> /about
    // ./blog/[slug].tsx -> /blog/[slug]
    // ./index.tsx -> /
    let pathname = key
      .replace(/^\.\//, "/")
      .replace(/\.tsx?$/, "")
      .replace(/\/index$/, "/");

    // Normalize trailing slash for root
    if (pathname === "") pathname = "/";

    // Only strip locale segment if one is configured
    if (localeSegment) {
      pathname = pathname.replace(
        new RegExp(`^/${localeSegment.replace(/[[\]]/g, "\\$&")}`),
        ""
      );
    }

    // Skip invalid paths that contain src/ or pages/ segments
    if (/(?:^|\/)(src|pages)(?:\/|$)/.test(pathname)) continue;

    // Ensure pathname starts with / and handle empty paths
    if (!pathname || pathname === "") {
      pathname = "/";
    } else if (!pathname.startsWith("/")) {
      pathname = "/" + pathname;
    }

    // Extract dynamic segments
    const dynamicSegments =
      pathname.match(/\[([^\]]+)\]/g)?.map((s) => s.slice(1, -1)) || [];

    // Pages Router uses getStaticPaths instead of generateStaticParams
    const getStaticPaths = (pageModule as { getStaticPaths?: () => Promise<{ paths: Array<{ params: Record<string, string> }> }> }).getStaticPaths;

    let getParams: (() => Promise<Record<string, string>[]>) | null = null;
    if (getStaticPaths) {
      getParams = async () => {
        const result = await getStaticPaths();
        return result.paths.map((p) => p.params);
      };
    } else if (pageModule.generateStaticParams) {
      // Also support generateStaticParams for consistency
      getParams = pageModule.generateStaticParams;
    }

    routes.push({
      pathname,
      dynamicSegments,
      getParams,
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
      // Dynamic route with getStaticPaths/generateStaticParams
      try {
        const params = await route.getParams();

        if (debug) {
          console.log(`[next-sitemap] ${route.pathname}: getStaticPaths returned ${params.length} params`);
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
        console.error(`[next-sitemap] Error calling getStaticPaths for ${route.pathname}:`, error);
        // Continue with other routes instead of failing completely
      }
    } else if (route.dynamicSegments.length > 0) {
      // Dynamic route without getStaticPaths - warn user
      if (debug) {
        console.warn(
          `[next-sitemap] Skipping dynamic route ${route.pathname}: no getStaticPaths exported. ` +
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
 * Create API handler for sitemap index route
 * Use in: pages/api/sitemap.xml.ts or pages/sitemap.xml.ts (with rewrites)
 */
export function createSitemapIndexApiHandler(options: CreateSitemapApiHandlerOptions) {
  const { urlsPerSitemap = 5000, additionalSitemaps, exclude, debug = false } = options;
  // Pages Router doesn't use [locale] segment - i18n is handled via next.config.js
  const localeSegment = options.localeSegment ?? "";
  const routes = extractRoutes(options.pagesContext, localeSegment);

  if (debug) {
    console.log(`[next-sitemap] Found ${routes.length} routes:`);
    routes.forEach((r) => {
      const hasParams = r.getParams ? "✓ getStaticPaths" : "✗ no getStaticPaths";
      const segments = r.dynamicSegments.length > 0 ? ` [${r.dynamicSegments.join(", ")}]` : "";
      console.log(`  ${r.pathname}${segments} - ${hasParams}`);
    });
  }

  return async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const allPaths = await getAllPaths(routes, debug);
    // Filter excluded paths for accurate count
    const filteredPaths = allPaths.filter((pathname) => !shouldExclude(pathname, exclude));
    const sitemapCount = Math.max(1, Math.ceil(filteredPaths.length / urlsPerSitemap));
    const xml = generateSitemapIndexXml(options.baseUrl, sitemapCount, {
      additionalSitemaps,
    });

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(xml);
  };
}

/**
 * Create API handler for individual sitemap routes
 * Use in: pages/api/sitemap/[id].ts or pages/sitemap-[id].xml.ts (with rewrites)
 */
export function createSitemapApiHandler(options: CreateSitemapApiHandlerOptions) {
  const { urlsPerSitemap = 5000, exclude, debug = false } = options;
  // Pages Router doesn't use [locale] segment - i18n is handled via next.config.js
  const localeSegment = options.localeSegment ?? "";
  const routes = extractRoutes(options.pagesContext, localeSegment);

  // Helper to get filtered paths (excludes are applied here for pagination)
  const getFilteredPaths = async () => {
    const allPaths = await getAllPaths(routes, debug);
    return allPaths.filter((pathname) => !shouldExclude(pathname, exclude));
  };

  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const sitemapId = parseInt(Array.isArray(id) ? id[0] : id || "0", 10);

    const filteredPaths = await getFilteredPaths();
    const start = sitemapId * urlsPerSitemap;
    const end = start + urlsPerSitemap;
    const paths = filteredPaths.slice(start, end);

    // Note: pathsToEntries also filters, but paths are already filtered here
    // We pass the config for priority/changeFreq calculation
    const entries = pathsToEntries(paths, { ...options, exclude: undefined });
    const xml = generateSitemapXml(entries);

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(xml);
  };
}

/**
 * Get the list of sitemap IDs for getStaticPaths
 * Use this to pre-render sitemap pages at build time
 */
export async function getSitemapStaticPaths(options: CreateSitemapApiHandlerOptions) {
  const { urlsPerSitemap = 5000, exclude, debug = false } = options;
  // Pages Router doesn't use [locale] segment - i18n is handled via next.config.js
  const localeSegment = options.localeSegment ?? "";
  const routes = extractRoutes(options.pagesContext, localeSegment);

  const allPaths = await getAllPaths(routes, debug);
  const filteredPaths = allPaths.filter((pathname) => !shouldExclude(pathname, exclude));
  const sitemapCount = Math.max(1, Math.ceil(filteredPaths.length / urlsPerSitemap));

  return {
    paths: Array.from({ length: sitemapCount }, (_, i) => ({
      params: { id: String(i) },
    })),
    fallback: false,
  };
}
