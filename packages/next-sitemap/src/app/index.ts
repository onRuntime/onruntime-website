import * as fs from "fs";
import * as path from "path";
import { createJiti } from "jiti";
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
   * Path to the app directory to scan for page.tsx files.
   * Can be absolute or relative to process.cwd().
   * If not provided, auto-detects src/app or app.
   *
   * Example:
   * ```ts
   * appDirectory: 'src/app/(frontend)'
   * ```
   */
  appDirectory?: string;

  /**
   * Enable debug logging to diagnose issues with route discovery
   * Logs info about generateStaticParams calls and skipped routes
   * @default false
   */
  debug?: boolean;
}

/**
 * Recursively find all page.tsx files in a directory
 */
function findPageFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Recursively search subdirectories
        files.push(...findPageFiles(fullPath, baseDir));
      } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
        // Convert absolute path to relative path like './articles/[slug]/page.tsx'
        const relativePath = "./" + path.relative(baseDir, fullPath).replace(/\\/g, "/");
        files.push(relativePath);
      }
    }
  } catch {
    // Directory doesn't exist or can't be read
  }

  return files;
}

/**
 * Auto-detect the app directory (src/app or app)
 */
function detectAppDirectory(): string {
  const srcApp = path.join(process.cwd(), "src/app");
  if (fs.existsSync(srcApp)) {
    return srcApp;
  }
  return path.join(process.cwd(), "app");
}

/**
 * Resolve the app directory path
 */
function resolveAppDirectory(options: Pick<CreateSitemapHandlerOptions, "appDirectory">): string {
  if (options.appDirectory) {
    return path.isAbsolute(options.appDirectory)
      ? options.appDirectory
      : path.join(process.cwd(), options.appDirectory);
  }
  return detectAppDirectory();
}

/**
 * Get page keys from appDirectory
 */
function getPageKeys(options: Pick<CreateSitemapHandlerOptions, "appDirectory">): string[] {
  return findPageFiles(resolveAppDirectory(options));
}

// Create a jiti instance for importing TypeScript files at runtime
// jsx: true enables JSX/TSX parsing via @babel/plugin-transform-react-jsx
const jiti = createJiti(import.meta.url, { jsx: true });

/**
 * Import a page module using jiti (supports TypeScript/TSX at runtime)
 */
async function importPage(appDirectory: string, key: string): Promise<PageModule> {
  // Convert key like './articles/[slug]/page.tsx' to absolute path
  const relativePath = key.replace("./", "");
  const absolutePath = path.join(appDirectory, relativePath);
  return jiti.import(absolutePath) as Promise<PageModule>;
}

interface RouteData {
  pathname: string;
  dynamicSegments: string[];
  key: string;
}

function extractRoutes(
  pageKeys: string[],
  localeSegment: string
): RouteData[] {
  const routes: RouteData[] = [];

  for (const key of pageKeys) {
    // Skip catch-all routes like [...not_found]
    if (key.includes("[...")) continue;

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
      key,
    });
  }

  return routes;
}

async function getAllPaths(
  routes: RouteData[],
  appDirectory: string,
  debug = false
): Promise<string[]> {
  const allPaths: string[] = ["/"];
  const seenPaths = new Set<string>(["/"]); // Avoid duplicates

  for (const route of routes) {
    if (route.dynamicSegments.length === 0) {
      // Static route
      if (route.pathname !== "/" && !seenPaths.has(route.pathname)) {
        allPaths.push(route.pathname);
        seenPaths.add(route.pathname);
      }
    } else {
      // Dynamic route - load module via importPage
      let getParams: (() => Promise<Record<string, string>[]>) | null = null;

      try {
        if (debug) {
          console.log(`[next-sitemap] ${route.pathname}: importing ${route.key}`);
        }
        const module = await importPage(appDirectory, route.key);
        getParams = module.generateStaticParams || null;
      } catch (error) {
        if (debug) {
          console.warn(`[next-sitemap] ${route.pathname}: import failed:`, error);
        }
      }

      if (getParams) {
        // Dynamic route with generateStaticParams
        try {
          const params = await getParams();

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
      } else {
        // Dynamic route without generateStaticParams - warn user
        if (debug) {
          console.warn(
            `[next-sitemap] Skipping dynamic route ${route.pathname}: no generateStaticParams exported. ` +
            `Use additionalSitemaps for routes that fetch data at runtime.`
          );
        }
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
  const appDir = resolveAppDirectory(options);
  const pageKeys = getPageKeys(options);
  const routes = extractRoutes(pageKeys, localeSegment);

  return {
    GET: async () => {
      if (debug) {
        console.log(`[next-sitemap] Found ${routes.length} routes:`);
        routes.forEach((r) => {
          const isDynamic = r.dynamicSegments.length > 0;
          const segments = isDynamic ? ` [${r.dynamicSegments.join(", ")}]` : "";
          console.log(`  ${r.pathname}${segments}${isDynamic ? " (dynamic)" : ""}`);
        });
      }

      const allPaths = await getAllPaths(routes, appDir, debug);
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
  const appDir = resolveAppDirectory(options);
  const pageKeys = getPageKeys(options);
  const routes = extractRoutes(pageKeys, localeSegment);

  // Helper to get filtered paths (excludes are applied here for pagination)
  const getFilteredPaths = async () => {
    const allPaths = await getAllPaths(routes, appDir, debug);
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

