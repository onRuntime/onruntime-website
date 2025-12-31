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
]);
