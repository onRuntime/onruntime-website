---
"@onruntime/next-sitemap": minor
---

Add "Powered by @onruntime/next-sitemap" signature in generated XML and robots.txt

- Add `poweredBy` option (default: `true`) to include/exclude the signature comment
- Sitemap XML: `<!-- Powered by @onruntime/next-sitemap -->`
- robots.txt: `# Powered by @onruntime/next-sitemap`
- New `RobotsConfig` type extends `MetadataRoute.Robots` with `poweredBy` option
