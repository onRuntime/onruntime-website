import { defineConfig } from "tsup";

export default defineConfig([
  // Main entry - core types and functions
  {
    entry: {
      index: "src/index.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    splitting: false,
    treeshake: true,
  },
  // Next.js App Router integration
  {
    entry: {
      "app/index": "src/app/index.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    external: ["next", "@onruntime/next-sitemap"],
    splitting: false,
    treeshake: true,
  },
  // Next.js Pages Router integration
  {
    entry: {
      "pages/index": "src/pages/index.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    external: ["next", "@onruntime/next-sitemap"],
    splitting: false,
    treeshake: true,
  },
  // Worker script for child process execution (CJS for require() compatibility)
  {
    entry: {
      worker: "src/worker.ts",
    },
    format: ["cjs"],
    dts: false,
    splitting: false,
    treeshake: true,
    // Only bundle strip-json-comments, let jiti be resolved from consuming project
    noExternal: ["strip-json-comments"],
  },
  // ESM loader for handling non-JS imports
  {
    entry: {
      loader: "src/loader.ts",
    },
    format: ["esm"],
    dts: false,
    splitting: false,
    treeshake: false,
    // Bundle shared.ts since the loader runs in isolation
    noExternal: [/.*/],
  },
]);
