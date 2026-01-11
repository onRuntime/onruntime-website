import assert from "node:assert";
import test, { describe } from "node:test";
import * as path from "node:path";
import { createJiti } from "jiti";

const fixturesDir = path.join(import.meta.dirname, "fixtures");

// Create jiti instance for importing TypeScript/JavaScript files
const jiti = createJiti(import.meta.url, {
  moduleCache: false,
  interopDefault: true,
  jsx: true,
});

async function importModule(modulePath: string) {
  const module = await jiti.import(modulePath) as Record<string, unknown>;
  return module;
}

export function jitiTests() {
  describe("jiti import pages", () => {
    test("imports App Router page.tsx", async () => {
      const modulePath = path.join(fixturesDir, "app/page.tsx");
      const module = await importModule(modulePath);
      assert.ok(module, "module should be imported");
      assert.ok(
        typeof (module as { default: unknown }).default === "function",
        "should have default export"
      );
    });

    test("imports App Router page with generateStaticParams", async () => {
      const modulePath = path.join(fixturesDir, "app/posts/[slug]/page.tsx");
      const module = await importModule(modulePath) as {
        generateStaticParams?: () => Promise<Array<{ slug: string }>>;
      };

      assert.ok(module.generateStaticParams, "should export generateStaticParams");
      assert.ok(
        typeof module.generateStaticParams === "function",
        "generateStaticParams should be a function"
      );

      const params = await module.generateStaticParams();
      assert.ok(Array.isArray(params), "should return array");
      assert.strictEqual(params.length, 3, "should return 3 params");
      assert.deepStrictEqual(params[0], { slug: "hello-world" });
      assert.deepStrictEqual(params[1], { slug: "getting-started" });
      assert.deepStrictEqual(params[2], { slug: "advanced-usage" });
    });

    test("imports Pages Router page with getStaticPaths", async () => {
      const modulePath = path.join(fixturesDir, "pages/posts/[slug].tsx");
      const module = await importModule(modulePath) as {
        getStaticPaths?: () => Promise<{
          paths: Array<{ params: { slug: string } }>;
          fallback: boolean;
        }>;
      };

      assert.ok(module.getStaticPaths, "should export getStaticPaths");
      assert.ok(
        typeof module.getStaticPaths === "function",
        "getStaticPaths should be a function"
      );

      const result = await module.getStaticPaths();
      assert.ok(Array.isArray(result.paths), "should return paths array");
      assert.strictEqual(result.paths.length, 3, "should return 3 paths");
      assert.deepStrictEqual(result.paths[0].params, { slug: "hello-world" });
      assert.deepStrictEqual(result.paths[1].params, { slug: "getting-started" });
      assert.deepStrictEqual(result.paths[2].params, { slug: "advanced-usage" });
    });

    test("imports static page without dynamic exports", async () => {
      const modulePath = path.join(fixturesDir, "app/about/page.tsx");
      const module = await importModule(modulePath) as {
        generateStaticParams?: unknown;
        default: unknown;
      };

      assert.ok(module.default, "should have default export");
      assert.strictEqual(
        module.generateStaticParams,
        undefined,
        "static page should not have generateStaticParams"
      );
    });
  });
}
