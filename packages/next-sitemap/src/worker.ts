/**
 * Worker script for executing generateStaticParams/getStaticPaths in an isolated process.
 * This avoids issues with dynamic imports and React components that jiti can't handle.
 *
 * Supports both:
 * - App Router: generateStaticParams
 * - Pages Router: getStaticPaths
 *
 * Usage: node worker.cjs <absolutePath> <projectRoot>
 * Output: JSON WorkerOutput
 */

import { existsSync, readFileSync } from "node:fs";
import { Module } from "node:module";
import { extname, join } from "node:path";
import { createJiti } from "jiti";
import stripJsonComments from "strip-json-comments";
import {
  JS_EXTENSIONS,
  NO_STATIC_PARAMS,
  type WorkerOutput,
} from "./shared";

// Indirect reference to avoid Turbopack static analysis
const joinPath = (...segments: string[]) => join(...segments);

installMockLoader();
main();

/**
 * Wrap Module._load to mock non-JS files.
 * This is more reliable than Module._extensions because it intercepts
 * all require() calls before extension handling.
 */
function installMockLoader(): void {
  const ModuleInternal = Module as typeof Module & {
    _load: (request: string, parent: unknown, isMain: boolean) => unknown;
    _resolveFilename: (request: string, parent: unknown, isMain: boolean) => string;
  };

  const originalLoad = ModuleInternal._load;

  ModuleInternal._load = function (request: string, parent: unknown, isMain: boolean) {
    // Try to resolve the file path
    let resolvedPath: string;
    try {
      resolvedPath = ModuleInternal._resolveFilename(request, parent, isMain);
    } catch {
      // If resolution fails, let original handler deal with it
      return originalLoad(request, parent, isMain);
    }

    // Check extension
    const ext = extname(resolvedPath).toLowerCase();

    // If it has an extension and it's NOT a JS extension, return empty module
    if (ext && !JS_EXTENSIONS.has(ext)) {
      return {};
    }

    // Otherwise, use original loader
    return originalLoad(request, parent, isMain);
  };
}

/**
 * Parse tsconfig.json and extract path aliases for jiti
 */
function parseTsconfigAliases(projectRoot: string): Record<string, string> {
  const aliases: Record<string, string> = {};

  try {
    const tsconfigPath = join(projectRoot, "tsconfig.json");
    if (!existsSync(tsconfigPath)) return aliases;

    const content = readFileSync(tsconfigPath, "utf-8");
    const withoutComments = stripJsonComments(content);
    const cleaned = withoutComments.replace(/,(\s*[}\]])/g, "$1");

    const tsconfig = JSON.parse(cleaned) as {
      compilerOptions?: {
        baseUrl?: string;
        paths?: Record<string, string[]>;
      };
    };

    const baseUrl = tsconfig.compilerOptions?.baseUrl ?? ".";
    const paths = tsconfig.compilerOptions?.paths ?? {};

    // Handle baseUrl for "src/" imports
    if (baseUrl === ".") {
      const srcPath = joinPath(projectRoot, "src");
      if (existsSync(srcPath)) {
        aliases["src/"] = `${srcPath}/`;
      }
    }

    // Process path mappings
    for (const [pattern, targets] of Object.entries(paths)) {
      const target = targets[0];
      if (!target) continue;

      // Skip TypeScript-only aliases (@types)
      if (target.includes("@types") || target.includes("node_modules/@types")) {
        continue;
      }

      // Skip exact module aliases without wildcards (except @ prefixed)
      if (!pattern.includes("*") && !pattern.startsWith("@") && !pattern.includes("/")) {
        continue;
      }

      const aliasKey = pattern.replace(/\*$/, "");
      const aliasValue = joinPath(projectRoot, baseUrl, target.replace(/\*$/, ""));
      aliases[aliasKey] = aliasValue;
    }
  } catch {
    // Ignore parsing errors
  }

  return aliases;
}

/**
 * Output result and exit
 */
function output(result: WorkerOutput, exitCode = 0): never {
  console.log(JSON.stringify(result));
  process.exit(exitCode);
}

/**
 * Main worker entry point
 */
async function main(): Promise<void> {
  const [absolutePath, projectRoot] = process.argv.slice(2);

  if (!absolutePath || !projectRoot) {
    output({ success: false, error: "Usage: worker.cjs <absolutePath> <projectRoot>" }, 1);
  }

  try {
    process.chdir(projectRoot);

    const jiti = createJiti(import.meta.url, {
      moduleCache: false,
      interopDefault: true,
      jsx: true,
      alias: parseTsconfigAliases(projectRoot),
      tryNative: false,
    });

    const module = jiti(absolutePath) as Record<string, unknown>;

    // App Router: generateStaticParams
    const generateStaticParams = module.generateStaticParams as
      | (() => Promise<Record<string, string>[]>)
      | undefined;

    if (generateStaticParams) {
      const params = await generateStaticParams();
      output({ success: true, params: params ?? [] });
    }

    // Pages Router: getStaticPaths
    const getStaticPaths = module.getStaticPaths as
      | (() => Promise<{ paths: Array<{ params: Record<string, string> }> }>)
      | undefined;

    if (getStaticPaths) {
      const result = await getStaticPaths();
      const params = result.paths.map((p) => p.params);
      output({ success: true, params });
    }

    // No static params function found
    output({ success: false, error: NO_STATIC_PARAMS });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    output({ success: false, error: message }, 1);
  }
}
