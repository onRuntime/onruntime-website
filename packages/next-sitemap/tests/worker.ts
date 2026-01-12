import assert from "node:assert";
import test, { describe } from "node:test";
import * as path from "node:path";
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

const fixturesDir = path.join(import.meta.dirname, "fixtures");
const distDir = path.join(import.meta.dirname, "..", "dist");
const workerPath = path.join(distDir, "worker.cjs");
const loaderPath = path.join(distDir, "loader.js");

export function workerTests() {
  describe("worker files", () => {
    test("worker.cjs exists after build", () => {
      assert.ok(existsSync(workerPath), "worker.cjs should exist in dist/");
    });

    test("loader.js exists after build", () => {
      assert.ok(existsSync(loaderPath), "loader.js should exist in dist/");
    });
  });

  describe("worker execution", () => {
    test("executes App Router generateStaticParams", () => {
      const pagePath = path.join(fixturesDir, "app", "posts", "[slug]", "page.tsx");
      const projectRoot = path.join(import.meta.dirname, "..");

      const result = execSync(
        `node --import "${loaderPath}" "${workerPath}" "${pagePath}" "${projectRoot}"`,
        { encoding: "utf-8", cwd: projectRoot }
      );

      const lines = result.trim().split("\n");
      const output = JSON.parse(lines[lines.length - 1]);

      assert.strictEqual(output.success, true, "should succeed");
      assert.ok(Array.isArray(output.params), "should return params array");
      assert.strictEqual(output.params.length, 3, "should return 3 params");
      assert.deepStrictEqual(output.params[0], { slug: "hello-world" });
    });

    test("executes Pages Router getStaticPaths", () => {
      const pagePath = path.join(fixturesDir, "pages", "posts", "[slug].tsx");
      const projectRoot = path.join(import.meta.dirname, "..");

      const result = execSync(
        `node --import "${loaderPath}" "${workerPath}" "${pagePath}" "${projectRoot}"`,
        { encoding: "utf-8", cwd: projectRoot }
      );

      const lines = result.trim().split("\n");
      const output = JSON.parse(lines[lines.length - 1]);

      assert.strictEqual(output.success, true, "should succeed");
      assert.ok(Array.isArray(output.params), "should return params array");
      assert.strictEqual(output.params.length, 3, "should return 3 params");
      assert.deepStrictEqual(output.params[0], { slug: "hello-world" });
    });

    test("returns NO_STATIC_PARAMS for static pages", () => {
      const pagePath = path.join(fixturesDir, "app", "about", "page.tsx");
      const projectRoot = path.join(import.meta.dirname, "..");

      const result = execSync(
        `node --import "${loaderPath}" "${workerPath}" "${pagePath}" "${projectRoot}"`,
        { encoding: "utf-8", cwd: projectRoot }
      );

      const lines = result.trim().split("\n");
      const output = JSON.parse(lines[lines.length - 1]);

      assert.strictEqual(output.success, false, "should not succeed");
      assert.strictEqual(output.error, "NO_STATIC_PARAMS", "should return NO_STATIC_PARAMS");
    });
  });
}
