---
"@onruntime/next-sitemap": minor
---

Add "Powered by @onruntime/next-sitemap" signature in generated XML and robots.txt

- Add `poweredBy` option (default: `true`) to include/exclude the signature comment
- Sitemap XML: `<!-- Powered by @onruntime/next-sitemap -->`
- robots.txt: `# Powered by @onruntime/next-sitemap`
- New `RobotsConfig` type extends `MetadataRoute.Robots` with `poweredBy` option
- Worker now has generic module mocking for better compatibility:
  - Auto-mocks `server-only`, `client-only`, and bare `env` import via jiti aliases
  - Generic fallback: any module that fails to resolve or load is automatically mocked with a Proxy
