import assert from "node:assert";
import test, { describe } from "node:test";
import {
  generateSitemapXml,
  generateSitemapIndexXml,
  type SitemapEntry,
} from "../src/index";

export function xmlTests() {
  describe("generateSitemapXml", () => {
    test("generates valid XML structure", () => {
      const entries: SitemapEntry[] = [
        { url: "https://example.com/" },
      ];
      const xml = generateSitemapXml(entries);

      assert.ok(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
      assert.ok(xml.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'));
      assert.ok(xml.includes("<loc>https://example.com/</loc>"));
      assert.ok(xml.includes("</urlset>"));
    });

    test("includes all entry fields", () => {
      const entries: SitemapEntry[] = [
        {
          url: "https://example.com/about",
          lastModified: "2024-01-01",
          changeFrequency: "weekly",
          priority: 0.8,
        },
      ];
      const xml = generateSitemapXml(entries);

      assert.ok(xml.includes("<loc>https://example.com/about</loc>"));
      assert.ok(xml.includes("<lastmod>2024-01-01</lastmod>"));
      assert.ok(xml.includes("<changefreq>weekly</changefreq>"));
      assert.ok(xml.includes("<priority>0.8</priority>"));
    });

    test("includes xhtml namespace for alternates", () => {
      const entries: SitemapEntry[] = [
        {
          url: "https://example.com/about",
          alternates: {
            languages: {
              en: "https://example.com/about",
              fr: "https://example.com/fr/about",
            },
          },
        },
      ];
      const xml = generateSitemapXml(entries);

      assert.ok(xml.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'));
      assert.ok(xml.includes('xhtml:link rel="alternate" hreflang="en"'));
      assert.ok(xml.includes('xhtml:link rel="alternate" hreflang="fr"'));
    });

    test("handles Date objects for lastModified", () => {
      const date = new Date("2024-06-15T10:00:00.000Z");
      const entries: SitemapEntry[] = [
        {
          url: "https://example.com/",
          lastModified: date,
        },
      ];
      const xml = generateSitemapXml(entries);

      // Format should be W3C Datetime without milliseconds: YYYY-MM-DDThh:mm:ss+00:00
      assert.ok(xml.includes("<lastmod>2024-06-15T10:00:00+00:00</lastmod>"));
    });

    test("generates multiple URL entries", () => {
      const entries: SitemapEntry[] = [
        { url: "https://example.com/" },
        { url: "https://example.com/about" },
        { url: "https://example.com/contact" },
      ];
      const xml = generateSitemapXml(entries);

      assert.strictEqual((xml.match(/<url>/g) || []).length, 3);
      assert.strictEqual((xml.match(/<\/url>/g) || []).length, 3);
    });
  });

  describe("generateSitemapIndexXml", () => {
    test("generates valid sitemap index structure", () => {
      const xml = generateSitemapIndexXml("https://example.com", 2);

      assert.ok(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
      assert.ok(xml.includes('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'));
      assert.ok(xml.includes("</sitemapindex>"));
    });

    test("generates correct number of sitemap entries", () => {
      const xml = generateSitemapIndexXml("https://example.com", 3);

      assert.strictEqual((xml.match(/<sitemap>/g) || []).length, 3);
      assert.ok(xml.includes("<loc>https://example.com/sitemap-0.xml</loc>"));
      assert.ok(xml.includes("<loc>https://example.com/sitemap-1.xml</loc>"));
      assert.ok(xml.includes("<loc>https://example.com/sitemap-2.xml</loc>"));
    });

    test("uses custom sitemap pattern", () => {
      const xml = generateSitemapIndexXml("https://example.com", 2, {
        sitemapPattern: "/sitemaps/sitemap-{id}.xml",
      });

      assert.ok(xml.includes("<loc>https://example.com/sitemaps/sitemap-0.xml</loc>"));
      assert.ok(xml.includes("<loc>https://example.com/sitemaps/sitemap-1.xml</loc>"));
    });

    test("includes additional sitemaps", () => {
      const xml = generateSitemapIndexXml("https://example.com", 1, {
        additionalSitemaps: ["/products-sitemap.xml", "/blog-sitemap.xml"],
      });

      assert.ok(xml.includes("<loc>https://example.com/sitemap-0.xml</loc>"));
      assert.ok(xml.includes("<loc>https://example.com/products-sitemap.xml</loc>"));
      assert.ok(xml.includes("<loc>https://example.com/blog-sitemap.xml</loc>"));
    });

    test("handles absolute URLs in additional sitemaps", () => {
      const xml = generateSitemapIndexXml("https://example.com", 1, {
        additionalSitemaps: ["https://cdn.example.com/sitemap.xml"],
      });

      assert.ok(xml.includes("<loc>https://cdn.example.com/sitemap.xml</loc>"));
    });

    test("includes lastmod for all entries", () => {
      const xml = generateSitemapIndexXml("https://example.com", 2);

      assert.strictEqual((xml.match(/<lastmod>/g) || []).length, 2);
    });
  });
}
