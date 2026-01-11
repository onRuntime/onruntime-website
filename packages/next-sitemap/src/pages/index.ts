import * as fs from "fs";
import * as path from "path";
import { createJiti } from "jiti";
import type { NextApiRequest, NextApiResponse, MetadataRoute } from "next";
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
import { generateRobotsTxt } from "./robots";

export * from "./robots";
export type { SitemapConfig, SitemapEntry, ChangeFrequency, MetadataRoute };

export interface CreateSitemapApiHandlerOptions extends SitemapConfig {
  /**
   * Path to the pages directory to scan for page files.
   * Can be absolute or relative to process.cwd().
   * If not provided, auto-detects src/pages or pages.
   *
   * Example:
   * ```ts
   * pagesDirectory: 'src/pages'
   * ```
   */
  pagesDirectory?: string;

  /**
   * Enable debug logging to diagnose issues with route discovery
   * Logs info about getStaticPaths calls and skipped routes
   * @default false
   */
  debug?: boolean;
}

/**
 * Recursively find all page files in a directory
 * Pages Router uses .tsx files directly (not page.tsx in folders)
 */
function findPageFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Skip api directory
        if (entry.name === "api") continue;
        // Recursively search subdirectories
        files.push(...findPageFiles(fullPath, baseDir));
      } else if (
        (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) &&
        !entry.name.startsWith("_") // Skip _app, _document, etc.
      ) {
        // Convert absolute path to relative path like './about.tsx'
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
 * Auto-detect the pages directory (src/pages or pages)
 */
function detectPagesDirectory(): string {
  const srcPages = path.join(process.cwd(), "src/pages");
  if (fs.existsSync(srcPages)) {
    return srcPages;
  }
  return path.join(process.cwd(), "pages");
}

/**
 * Resolve the pages directory path
 */
function resolvePagesDirectory(options: Pick<CreateSitemapApiHandlerOptions, "pagesDirectory">): string {
  if (options.pagesDirectory) {
    return path.isAbsolute(options.pagesDirectory)
      ? options.pagesDirectory
      : path.join(process.cwd(), options.pagesDirectory);
  }
  return detectPagesDirectory();
}

/**
 * Get page keys from pagesDirectory
 */
function getPageKeys(options: Pick<CreateSitemapApiHandlerOptions, "pagesDirectory">): string[] {
  return findPageFiles(resolvePagesDirectory(options));
}

/**
 * Create a jiti instance for importing TypeScript files at runtime
 * jsx: true enables JSX/TSX parsing via @babel/plugin-transform-react-jsx
 */
const jiti = createJiti(import.meta.url, { jsx: true });

/**
 * Import a page module using jiti (supports TypeScript/TSX)
 */
async function importPage(pagesDirectory: string, key: string): Promise<PageModule> {
  // Convert key like './blog/[slug].tsx' to absolute path
  const relativePath = key.replace("./", "");
  const absolutePath = path.join(pagesDirectory, relativePath);
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
    // Skip catch-all routes like [...slug]
    if (key.includes("[...")) continue;

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
  pagesDirectory: string,
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
        const module = await importPage(pagesDirectory, route.key);

        // Pages Router uses getStaticPaths
        const getStaticPaths = (module as unknown as { getStaticPaths?: () => Promise<{ paths: Array<{ params: Record<string, string> }> }> }).getStaticPaths;
        if (getStaticPaths) {
          getParams = async () => {
            const result = await getStaticPaths();
            return result.paths.map((p) => p.params);
          };
        } else if ((module as unknown as PageModule).generateStaticParams) {
          // Also support generateStaticParams for consistency
          getParams = (module as unknown as PageModule).generateStaticParams!;
        }
      } catch (error) {
        if (debug) {
          console.warn(`[next-sitemap] ${route.pathname}: import failed:`, error);
        }
      }

      if (getParams) {
        // Dynamic route with getStaticPaths/generateStaticParams
        try {
          const params = await getParams();

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
      } else {
        // Dynamic route without getStaticPaths - warn user
        if (debug) {
          console.warn(
            `[next-sitemap] Skipping dynamic route ${route.pathname}: no getStaticPaths exported. ` +
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
 * Create API handler for sitemap index route
 * Use in: pages/api/sitemap.xml.ts or pages/sitemap.xml.ts (with rewrites)
 */
export function createSitemapIndexApiHandler(options: CreateSitemapApiHandlerOptions) {
  const { urlsPerSitemap = 5000, additionalSitemaps, exclude, debug = false } = options;
  // Pages Router doesn't use [locale] segment - i18n is handled via next.config.js
  const localeSegment = options.localeSegment ?? "";
  const pagesDir = resolvePagesDirectory(options);
  const pageKeys = getPageKeys(options);
  const routes = extractRoutes(pageKeys, localeSegment);

  if (debug) {
    console.log(`[next-sitemap] Found ${routes.length} routes:`);
    routes.forEach((r) => {
      const isDynamic = r.dynamicSegments.length > 0;
      const segments = isDynamic ? ` [${r.dynamicSegments.join(", ")}]` : "";
      console.log(`  ${r.pathname}${segments}${isDynamic ? " (dynamic)" : ""}`);
    });
  }

  return async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const allPaths = await getAllPaths(routes, pagesDir, debug);
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
  const pagesDir = resolvePagesDirectory(options);
  const pageKeys = getPageKeys(options);
  const routes = extractRoutes(pageKeys, localeSegment);

  // Helper to get filtered paths (excludes are applied here for pagination)
  const getFilteredPaths = async () => {
    const allPaths = await getAllPaths(routes, pagesDir, debug);
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
  const pagesDir = resolvePagesDirectory(options);
  const pageKeys = getPageKeys(options);
  const routes = extractRoutes(pageKeys, localeSegment);

  const allPaths = await getAllPaths(routes, pagesDir, debug);
  const filteredPaths = allPaths.filter((pathname) => !shouldExclude(pathname, exclude));
  const sitemapCount = Math.max(1, Math.ceil(filteredPaths.length / urlsPerSitemap));

  return {
    paths: Array.from({ length: sitemapCount }, (_, i) => ({
      params: { id: String(i) },
    })),
    fallback: false,
  };
}

/**
 * Create API handler for robots.txt
 * Use in: pages/api/robots.txt.ts or pages/robots.txt.ts (with rewrites)
 *
 * @example
 * // pages/api/robots.txt.ts
 * import { createRobotsApiHandler } from "@onruntime/next-sitemap/pages";
 *
 * export default createRobotsApiHandler({
 *   rules: {
 *     userAgent: "*",
 *     allow: "/",
 *     disallow: ["/admin", "/private"],
 *   },
 *   sitemap: "https://example.com/sitemap.xml",
 * });
 */
export function createRobotsApiHandler(config: MetadataRoute.Robots) {
  return function handler(_req: NextApiRequest, res: NextApiResponse) {
    const robotsTxt = generateRobotsTxt(config);

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(robotsTxt);
  };
}
