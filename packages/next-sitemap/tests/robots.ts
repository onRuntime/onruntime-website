import assert from "node:assert";
import test, { describe } from "node:test";
import type { MetadataRoute } from "next";
import { generateRobotsTxt } from "../src/pages/robots";

export function robotsTests() {
  describe("generateRobotsTxt", () => {
    test("generates basic robots.txt with single rule", () => {
      const config: MetadataRoute.Robots = {
        rules: {
          userAgent: "*",
          allow: "/",
        },
      };
      const result = generateRobotsTxt(config);

      assert.ok(result.includes("User-agent: *"));
      assert.ok(result.includes("Allow: /"));
    });

    test("generates robots.txt with disallow rules", () => {
      const config: MetadataRoute.Robots = {
        rules: {
          userAgent: "*",
          disallow: ["/admin", "/private"],
        },
      };
      const result = generateRobotsTxt(config);

      assert.ok(result.includes("User-agent: *"));
      assert.ok(result.includes("Disallow: /admin"));
      assert.ok(result.includes("Disallow: /private"));
    });

    test("generates robots.txt with multiple user agents", () => {
      const config: MetadataRoute.Robots = {
        rules: {
          userAgent: ["Googlebot", "Bingbot"],
          allow: "/",
        },
      };
      const result = generateRobotsTxt(config);

      assert.ok(result.includes("User-agent: Googlebot"));
      assert.ok(result.includes("User-agent: Bingbot"));
    });

    test("generates robots.txt with multiple rules", () => {
      const config: MetadataRoute.Robots = {
        rules: [
          {
            userAgent: "Googlebot",
            allow: "/",
          },
          {
            userAgent: "*",
            disallow: "/admin",
          },
        ],
      };
      const result = generateRobotsTxt(config);

      assert.ok(result.includes("User-agent: Googlebot"));
      assert.ok(result.includes("User-agent: *"));
      assert.ok(result.includes("Disallow: /admin"));
    });

    test("includes sitemap", () => {
      const config: MetadataRoute.Robots = {
        rules: { userAgent: "*", allow: "/" },
        sitemap: "https://example.com/sitemap.xml",
      };
      const result = generateRobotsTxt(config);

      assert.ok(result.includes("Sitemap: https://example.com/sitemap.xml"));
    });

    test("includes multiple sitemaps", () => {
      const config: MetadataRoute.Robots = {
        rules: { userAgent: "*", allow: "/" },
        sitemap: ["https://example.com/sitemap.xml", "https://example.com/sitemap-2.xml"],
      };
      const result = generateRobotsTxt(config);

      assert.ok(result.includes("Sitemap: https://example.com/sitemap.xml"));
      assert.ok(result.includes("Sitemap: https://example.com/sitemap-2.xml"));
    });

    test("includes host", () => {
      const config: MetadataRoute.Robots = {
        rules: { userAgent: "*", allow: "/" },
        host: "https://example.com",
      };
      const result = generateRobotsTxt(config);

      assert.ok(result.includes("Host: https://example.com"));
    });

    test("includes crawl delay", () => {
      const config: MetadataRoute.Robots = {
        rules: {
          userAgent: "*",
          allow: "/",
          crawlDelay: 10,
        },
      };
      const result = generateRobotsTxt(config);

      assert.ok(result.includes("Crawl-delay: 10"));
    });

    test("ends with newline", () => {
      const config: MetadataRoute.Robots = {
        rules: { userAgent: "*", allow: "/" },
      };
      const result = generateRobotsTxt(config);

      assert.ok(result.endsWith("\n"));
    });
  });
}
