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

import { existsSync, readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { Module } from "node:module";
import { extname, join } from "node:path";
import { tmpdir } from "node:os";
import { createJiti } from "jiti";
import stripJsonComments from "strip-json-comments";
import {
  JS_EXTENSIONS,
  NO_STATIC_PARAMS,
  type WorkerOutput,
} from "./shared";

// Indirect reference to avoid Turbopack static analysis
const joinPath = (...segments: string[]) => join(...segments);

// Track mocked modules for debugging
const mockedModules = new Set<string>();

// Temp directory for mock files
let mockTempDir: string | null = null;

function getMockTempDir(): string {
  if (!mockTempDir) {
    mockTempDir = mkdtempSync(joinPath(tmpdir(), "next-sitemap-"));
  }
  return mockTempDir;
}

/**
 * Create a mock file that exports a generic proxy
 */
function createMockFile(name: string): string {
  const mockPath = joinPath(getMockTempDir(), `${name.replace(/[^a-zA-Z0-9]/g, "_")}-mock.js`);
  const mockContent = `
// Auto-generated mock for ${name}
const handler = {
  get(_, prop) {
    if (prop === Symbol.toPrimitive) return () => "";
    if (prop === "then") return undefined;
    return new Proxy(() => {}, handler);
  },
  apply() { return new Proxy(() => {}, handler); }
};
const mock = new Proxy(() => {}, handler);
module.exports = mock;
module.exports.default = mock;
// Common named exports
module.exports.env = mock;
module.exports.createEnv = () => mock;
`;
  writeFileSync(mockPath, mockContent);
  return mockPath;
}

installMockLoader();
main();

/**
 * Create a generic mock that returns empty objects/functions for any property access
 */
function createGenericMock(): unknown {
  const handler: ProxyHandler<object> = {
    get(_, prop) {
      if (prop === Symbol.toPrimitive) return () => "";
      if (prop === "then") return undefined; // Not a promise
      // Return a function that returns a mock for chaining
      return new Proxy(() => createGenericMock(), handler);
    },
    apply() {
      return createGenericMock();
    },
  };
  return new Proxy(() => {}, handler);
}

/**
 * Wrap Module._load to mock non-JS files and modules that fail to load.
 * This allows the worker to continue even when dependencies can't be loaded.
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
      // Resolution failed - return generic mock
      mockedModules.add(request);
      return createGenericMock();
    }

    // Check extension - mock non-JS files
    const ext = extname(resolvedPath).toLowerCase();
    if (ext && !JS_EXTENSIONS.has(ext)) {
      return {};
    }

    // Try to load the module, mock on failure
    try {
      return originalLoad(request, parent, isMain);
    } catch {
      // Module failed to load - return generic mock
      mockedModules.add(request);
      return createGenericMock();
    }
  };
}

/**
 * Parse tsconfig.json and extract path aliases for jiti
 * Also mocks bare imports that would resolve to project root files (baseUrl: ".")
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

      // Mock bare imports that resolve to project root files
      // Common pattern: import { env } from "env" resolves to ./env.ts
      for (const ext of JS_EXTENSIONS) {
        const envFile = joinPath(projectRoot, `env${ext}`);
        if (existsSync(envFile)) {
          aliases["env"] = createMockFile("env");
          break;
        }
      }
    }

    // Always mock server-only and client-only (jiti resolves these before Module._load)
    aliases["server-only"] = createMockFile("server-only");
    aliases["client-only"] = createMockFile("client-only");

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
