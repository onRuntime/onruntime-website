import { existsSync, readdirSync } from "node:fs";
import { isAbsolute, join, relative } from "node:path";
import {
  type SitemapConfig,
  type SitemapEntry,
  type ChangeFrequency,
  generateSitemapXml,
  generateSitemapIndexXml,
  shouldExclude,
} from "..";
import {
  type RouteInfo,
  generateAllPaths,
  pathsToEntries,
} from "../shared";

export type { SitemapConfig, SitemapEntry, ChangeFrequency };

export interface CreateSitemapHandlerOptions extends SitemapConfig {
  /**
   * Path to the app directory to scan for page.tsx files.
   * Can be absolute or relative to process.cwd().
   * If not provided, auto-detects src/app or app.
   */
  appDirectory?: string;
}

// ============================================================================
// Route Discovery (App Router specific)
// ============================================================================

/**
 * Recursively find all page.tsx files in a directory
 */
function findPageFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];

  try {
    const entries = readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        files.push(...findPageFiles(fullPath, baseDir));
      } else if (/^page\.(tsx?|jsx?)$/.test(entry.name)) {
        const relativePath = "./" + relative(baseDir, fullPath).replace(/\\/g, "/");
        files.push(relativePath);
      }
    }
  } catch {
    // Directory doesn't exist or can't be read
  }

  return files;
}

/**
 * Resolve the app directory path
 */
function resolveAppDirectory(appDirectory?: string): string {
  if (appDirectory) {
    return isAbsolute(appDirectory) ? appDirectory : join(process.cwd(), appDirectory);
  }
  // Auto-detect: prefer src/app over app
  const srcApp = join(process.cwd(), "src/app");
  return existsSync(srcApp) ? srcApp : join(process.cwd(), "app");
}

/**
 * Extract route info from page file paths
 */
function extractRoutes(pageKeys: string[], localeSegment: string): RouteInfo[] {
  const routes: RouteInfo[] = [];

  for (const key of pageKeys) {
    // Skip catch-all routes
    if (key.includes("[...")) continue;

    let pathname = key
      .replace("./", "/")
      .replace(/\/page\.(tsx?|jsx?)$/, "");

    // Strip locale segment if configured
    if (localeSegment) {
      const escapedSegment = localeSegment.replace(/[[\]]/g, "\\$&");
      pathname = pathname.replace(new RegExp(`^/${escapedSegment}`), "");
    }

    // Remove route groups like (frontend), (legal)
    pathname = pathname.replace(/\/\([^)]+\)/g, "");

    // Skip invalid paths containing src/ or app/ segments
    if (/(?:^|\/)(src|app)(?:\/|$)/.test(pathname)) continue;

    // Normalize pathname
    pathname = pathname || "/";
    if (pathname !== "/" && !pathname.startsWith("/")) {
      pathname = "/" + pathname;
    }

    const dynamicSegments = pathname.match(/\[([^\]]+)\]/g)?.map((s) => s.slice(1, -1)) ?? [];

    routes.push({ pathname, dynamicSegments, fileKey: key });
  }

  return routes;
}

// ============================================================================
// Public API
// ============================================================================

/**
 * Create handlers for sitemap index route
 * Use in: app/sitemap.xml/route.ts
 */
export function createSitemapIndexHandler(options: CreateSitemapHandlerOptions) {
  const { urlsPerSitemap = 5000, locales = [], defaultLocale, additionalSitemaps, exclude, debug = false } = options;
  const localeSegment = options.localeSegment ?? (locales.length > 0 || defaultLocale ? "[locale]" : "");
  const appDir = resolveAppDirectory(options.appDirectory);
  const pageKeys = findPageFiles(appDir);
  const routes = extractRoutes(pageKeys, localeSegment);

  return {
    GET: async () => {
      if (debug) {
        console.log(`[next-sitemap] Found ${routes.length} routes`);
      }

      const allPaths = await generateAllPaths(routes, appDir, debug);
      const filteredPaths = allPaths.filter((p) => !shouldExclude(p, exclude));
      const sitemapCount = Math.max(1, Math.ceil(filteredPaths.length / urlsPerSitemap));

      return new Response(
        generateSitemapIndexXml(options.baseUrl, sitemapCount, { additionalSitemaps }),
        { headers: { "Content-Type": "application/xml" } }
      );
    },
  };
}

/**
 * Create handlers for individual sitemap routes
 * Use in: app/sitemap.xml/[id]/route.ts
 */
export function createSitemapHandler(options: CreateSitemapHandlerOptions) {
  const { urlsPerSitemap = 5000, locales = [], defaultLocale, exclude, debug = false } = options;
  const localeSegment = options.localeSegment ?? (locales.length > 0 || defaultLocale ? "[locale]" : "");
  const appDir = resolveAppDirectory(options.appDirectory);
  const pageKeys = findPageFiles(appDir);
  const routes = extractRoutes(pageKeys, localeSegment);

  const getFilteredPaths = async () => {
    const allPaths = await generateAllPaths(routes, appDir, debug);
    return allPaths.filter((p) => !shouldExclude(p, exclude));
  };

  return {
    generateStaticParams: async () => {
      const filteredPaths = await getFilteredPaths();
      const count = Math.max(1, Math.ceil(filteredPaths.length / urlsPerSitemap));
      return Array.from({ length: count }, (_, i) => ({ id: String(i) }));
    },

    GET: async (_request: Request, { params }: { params: Promise<{ id: string }> }) => {
      const { id } = await params;
      const sitemapId = parseInt(id, 10);

      const filteredPaths = await getFilteredPaths();
      const paths = filteredPaths.slice(sitemapId * urlsPerSitemap, (sitemapId + 1) * urlsPerSitemap);
      const entries = pathsToEntries(paths, { ...options, exclude: undefined });

      return new Response(generateSitemapXml(entries), {
        headers: { "Content-Type": "application/xml" },
      });
    },
  };
}
