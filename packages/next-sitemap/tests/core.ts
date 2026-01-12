import assert from "node:assert";
import test, { describe } from "node:test";
import {
  normalizePath,
  buildUrl,
  shouldExclude,
  calculateDepthPriority,
  getPriority,
  getChangeFreq,
} from "../src/index";

export function coreTests() {
  describe("normalizePath", () => {
    test("keeps root path unchanged", () => {
      assert.strictEqual(normalizePath("/"), "/");
    });

    test("removes trailing slash from paths", () => {
      assert.strictEqual(normalizePath("/about/"), "/about");
      assert.strictEqual(normalizePath("/blog/post/"), "/blog/post");
    });

    test("keeps paths without trailing slash unchanged", () => {
      assert.strictEqual(normalizePath("/about"), "/about");
      assert.strictEqual(normalizePath("/blog/post"), "/blog/post");
    });
  });

  describe("buildUrl", () => {
    test("builds URL without locale for default locale", () => {
      const url = buildUrl("https://example.com", "/about", "en", "en");
      assert.strictEqual(url, "https://example.com/about");
    });

    test("builds URL with locale for non-default locale", () => {
      const url = buildUrl("https://example.com", "/about", "fr", "en");
      assert.strictEqual(url, "https://example.com/fr/about");
    });

    test("builds URL without locale when locale is undefined", () => {
      const url = buildUrl("https://example.com", "/about");
      assert.strictEqual(url, "https://example.com/about");
    });

    test("normalizes trailing slashes", () => {
      const url = buildUrl("https://example.com", "/about/", "en", "en");
      assert.strictEqual(url, "https://example.com/about");
    });

    test("handles root path correctly", () => {
      const url = buildUrl("https://example.com", "/", "en", "en");
      assert.strictEqual(url, "https://example.com/");
    });

    test("handles root path with non-default locale", () => {
      const url = buildUrl("https://example.com", "/", "fr", "en");
      assert.strictEqual(url, "https://example.com/fr");
    });
  });

  describe("shouldExclude", () => {
    test("returns false when no exclude patterns", () => {
      assert.strictEqual(shouldExclude("/about", undefined), false);
    });

    test("matches exact pattern", () => {
      assert.strictEqual(shouldExclude("/admin", ["/admin"]), true);
      assert.strictEqual(shouldExclude("/about", ["/admin"]), false);
    });

    test("matches wildcard pattern", () => {
      assert.strictEqual(shouldExclude("/admin/users", ["/admin/*"]), true);
      assert.strictEqual(shouldExclude("/admin", ["/admin/*"]), false);
    });

    test("matches double wildcard pattern", () => {
      assert.strictEqual(shouldExclude("/api/v1/users", ["/api/**"]), true);
      assert.strictEqual(shouldExclude("/api/users", ["/api/**"]), true);
      // ** requires at least one character after /api/
      assert.strictEqual(shouldExclude("/api", ["/api/**"]), false);
    });

    test("works with function exclude", () => {
      const exclude = (path: string) => path.startsWith("/private");
      assert.strictEqual(shouldExclude("/private/data", exclude), true);
      assert.strictEqual(shouldExclude("/public/data", exclude), false);
    });
  });

  describe("calculateDepthPriority", () => {
    test("returns 1.0 for root", () => {
      assert.strictEqual(calculateDepthPriority("/"), 1.0);
    });

    test("returns 0.8 for depth 1", () => {
      assert.strictEqual(calculateDepthPriority("/about"), 0.8);
    });

    test("returns 0.6 for depth 2", () => {
      assert.strictEqual(calculateDepthPriority("/blog/post"), 0.6);
    });

    test("returns minimum 0.1 for deep paths", () => {
      assert.strictEqual(
        calculateDepthPriority("/a/b/c/d/e/f"),
        0.1
      );
    });
  });

  describe("getPriority", () => {
    test("uses auto priority by default", () => {
      assert.strictEqual(getPriority("/about", undefined), 0.8);
      assert.strictEqual(getPriority("/about", "auto"), 0.8);
    });

    test("uses fixed priority when number provided", () => {
      assert.strictEqual(getPriority("/about", 0.5), 0.5);
    });

    test("uses function priority when function provided", () => {
      const fn = (path: string) => (path === "/" ? 1.0 : 0.7);
      assert.strictEqual(getPriority("/", fn), 1.0);
      assert.strictEqual(getPriority("/about", fn), 0.7);
    });
  });

  describe("getChangeFreq", () => {
    test("returns weekly by default", () => {
      assert.strictEqual(getChangeFreq("/about", undefined), "weekly");
    });

    test("returns fixed value when string provided", () => {
      assert.strictEqual(getChangeFreq("/about", "daily"), "daily");
    });

    test("uses function when function provided", () => {
      const fn = (path: string) => (path === "/" ? "daily" : "monthly");
      assert.strictEqual(getChangeFreq("/", fn), "daily");
      assert.strictEqual(getChangeFreq("/about", fn), "monthly");
    });
  });
}
