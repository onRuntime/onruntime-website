/**
 * Shared utilities, constants, and types for the sitemap package
 */

import { existsSync } from "node:fs";
import { dirname, join, delimiter } from "node:path";
import * as childProcess from "node:child_process";
import { fileURLToPath } from "node:url";
import {
  type SitemapConfig,
  type SitemapEntry,
  buildUrl,
  shouldExclude,
  getPriority,
  getChangeFreq,
} from ".";

// ============================================================================
// Worker Constants and Types
// ============================================================================

/**
 * File extensions that Node.js/jiti can actually process.
 * Any other extension will be mocked as an empty module.
 */
export const JS_EXTENSIONS = new Set([
  ".js",
  ".cjs",
  ".mjs",
  ".jsx",
  ".ts",
  ".cts",
  ".mts",
  ".tsx",
  ".json",
  ".node",
]);

/**
 * Special error code when a page doesn't export generateStaticParams or getStaticPaths
 */
export const NO_STATIC_PARAMS = "NO_STATIC_PARAMS";

/**
 * Worker result types
 */
export interface WorkerSuccess {
  success: true;
  params: Record<string, string>[];
}

export interface WorkerFailure {
  success: false;
  error: string;
}

export type WorkerOutput = WorkerSuccess | WorkerFailure;

// ============================================================================
// Shared Utilities
// ============================================================================

// Indirect reference to avoid Turbopack static analysis of spawn arguments
const spawnProcess = childProcess.spawn;

// Module directory for locating worker script
const __dirname = dirname(fileURLToPath(import.meta.url));

// Cache for static params results to avoid duplicate calls
export const paramsCache = new Map<string, Record<string, string>[] | null>();

// Check if we're in development mode
export const isDev = process.env.NODE_ENV === "development";

export interface RouteInfo {
  pathname: string;
  dynamicSegments: string[];
  fileKey: string;
}

/**
 * Resolve the file path for a route
 * Handles both source files (./path/file.tsx) and manifest paths (/path/file)
 */
function resolveFilePath(directory: string, fileKey: string): string | null {
  // If it's already a relative file path (from file scanning)
  if (fileKey.startsWith("./")) {
    return join(directory, fileKey.replace("./", ""));
  }

  // It's a manifest path (e.g., /calendar/[year]/[month])
  // Try to find the compiled JS file
  const basePath = fileKey === "/" ? "/index" : fileKey;

  // Try .js extension first (compiled)
  const jsPath = join(directory, basePath + ".js");
  if (existsSync(jsPath)) {
    return jsPath;
  }

  // Try source extensions
  for (const ext of JS_EXTENSIONS) {
    const sourcePath = join(directory, basePath + ext);
    if (existsSync(sourcePath)) {
      return sourcePath;
    }
  }

  // Try index files for directory-based routes
  for (const ext of JS_EXTENSIONS) {
    const indexPath = join(directory, basePath, "index" + ext);
    if (existsSync(indexPath)) {
      return indexPath;
    }
  }

  return null;
}

/**
 * Execute worker via child process to get static params
 */
export async function executeWorker(
  directory: string,
  fileKey: string,
  debug: boolean
): Promise<Record<string, string>[] | null> {
  const absolutePath = resolveFilePath(directory, fileKey);
  const projectRoot = process.cwd();

  if (!absolutePath) {
    if (debug) {
      console.warn(`[next-sitemap] Could not resolve file path for ${fileKey} in ${directory}`);
    }
    return null;
  }
  // Go up one level because this code is bundled into dist/app/ or dist/pages/
  const distRoot = join(__dirname, "..");
  const workerPath = join(distRoot, "worker.cjs");
  const loaderPath = join(distRoot, "loader.js");

  if (debug) {
    console.log(`[next-sitemap] Worker path: ${workerPath}`);
    console.log(`[next-sitemap] Worker exists: ${existsSync(workerPath)}`);
    console.log(`[next-sitemap] Loader path: ${loaderPath}`);
    console.log(`[next-sitemap] Loader exists: ${existsSync(loaderPath)}`);
  }

  return new Promise((resolve) => {
    const nodePath = [
      join(projectRoot, "node_modules"),
      join(__dirname, "..", "node_modules"),
    ].join(delimiter);

    // Build args array dynamically to avoid Turbopack static analysis
    const importFlag = ["--import", loaderPath];
    const args = [...importFlag, workerPath, absolutePath, projectRoot];

    const child = spawnProcess("node", args, {
      cwd: projectRoot,
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, NODE_PATH: nodePath },
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (data: Buffer) => { stdout += data.toString(); });
    child.stderr.on("data", (data: Buffer) => { stderr += data.toString(); });

    child.on("close", (code: number | null) => {
      if (debug && stderr) {
        console.warn(`[next-sitemap] Worker stderr: ${stderr}`);
      }

      if (code !== 0 && code !== null) {
        if (debug) console.warn(`[next-sitemap] Worker exited with code ${code}`);
        resolve(null);
        return;
      }

      try {
        const lines = stdout.trim().split("\n");
        const result = JSON.parse(lines[lines.length - 1]) as WorkerOutput;

        if (result.success) {
          resolve(result.params);
        } else {
          if (result.error !== NO_STATIC_PARAMS && debug) {
            console.warn(`[next-sitemap] Worker error: ${result.error}`);
          }
          resolve(null);
        }
      } catch {
        if (debug) console.warn(`[next-sitemap] Failed to parse worker output: ${stdout}`);
        resolve(null);
      }
    });

    child.on("error", (err: Error) => {
      if (debug) console.warn(`[next-sitemap] Failed to spawn worker: ${err.message}`);
      resolve(null);
    });
  });
}

/**
 * Get params for a dynamic route (with caching)
 */
export async function getRouteParams(
  route: RouteInfo,
  directory: string,
  debug: boolean
): Promise<Record<string, string>[] | null> {
  const cacheKey = route.fileKey;

  if (paramsCache.has(cacheKey)) {
    return paramsCache.get(cacheKey)!;
  }

  if (debug) {
    console.log(`[next-sitemap] ${route.pathname}: executing static params via worker`);
  }

  const params = await executeWorker(directory, route.fileKey, debug);
  paramsCache.set(cacheKey, params);

  if (debug && params) {
    console.log(`[next-sitemap] ${route.pathname}: got ${params.length} params`);
  }

  return params;
}

/**
 * Generate all URL paths from routes (parallel execution for dynamic routes)
 */
export async function generateAllPaths(
  routes: RouteInfo[],
  directory: string,
  debug: boolean
): Promise<string[]> {
  const staticPaths: string[] = ["/"];
  const dynamicRoutes: RouteInfo[] = [];

  // Separate static and dynamic routes
  for (const route of routes) {
    if (route.dynamicSegments.length === 0) {
      if (route.pathname !== "/") {
        staticPaths.push(route.pathname);
      }
    } else {
      dynamicRoutes.push(route);
    }
  }

  // Show progress message in dev mode
  const startTime = isDev ? Date.now() : 0;
  if (isDev && dynamicRoutes.length > 0) {
    console.log(`[next-sitemap] Generating sitemap for ${dynamicRoutes.length} dynamic routes (dev only, instant in production)...`);
  }

  // Execute all dynamic routes in parallel
  const dynamicResults = await Promise.all(
    dynamicRoutes.map(async (route) => {
      const params = await getRouteParams(route, directory, debug);
      if (!params || params.length === 0) {
        if (debug) {
          console.warn(`[next-sitemap] Skipping dynamic route ${route.pathname}: no static params or empty result.`);
        }
        return [];
      }

      const paths: string[] = [];
      for (const param of params) {
        let path = route.pathname;
        let valid = true;

        for (const segment of route.dynamicSegments) {
          const value = param[segment];
          if (value === undefined) {
            if (debug) {
              console.warn(`[next-sitemap] ${route.pathname}: missing param "${segment}" in`, param);
            }
            valid = false;
            break;
          }
          path = path.replace(`[${segment}]`, value);
        }

        if (valid) paths.push(path);
      }
      return paths;
    })
  );

  // Deduplicate all paths
  const allPaths = new Set(staticPaths);
  for (const paths of dynamicResults) {
    for (const path of paths) {
      allPaths.add(path);
    }
  }

  if (isDev && dynamicRoutes.length > 0) {
    const elapsed = Date.now() - startTime;
    console.log(`[next-sitemap] Done! Found ${allPaths.size} total URLs in ${elapsed}ms.`);
  }

  return Array.from(allPaths);
}

/**
 * Convert paths to sitemap entries
 */
export function pathsToEntries(paths: string[], config: SitemapConfig): SitemapEntry[] {
  const { baseUrl, locales = [], defaultLocale, exclude, priority, changeFreq } = config;

  return paths
    .filter((pathname) => !shouldExclude(pathname, exclude))
    .map((pathname) => {
      const entry: SitemapEntry = {
        url: buildUrl(baseUrl, pathname, defaultLocale, defaultLocale),
        lastModified: new Date(),
        changeFrequency: getChangeFreq(pathname, changeFreq),
        priority: getPriority(pathname, priority),
      };

      if (locales.length > 0) {
        entry.alternates = {
          languages: Object.fromEntries(
            locales.map((locale) => [locale, buildUrl(baseUrl, pathname, locale, defaultLocale)])
          ),
        };
      }

      return entry;
    });
}
