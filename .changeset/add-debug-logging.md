---
"@onruntime/next-sitemap": minor
---

Add debug option and improve error handling for dynamic routes:

- Add `debug` option to log route discovery and `generateStaticParams` calls
- Add error handling to prevent crashes when `generateStaticParams` fails
- Log warnings for dynamic routes without `generateStaticParams`
- Add troubleshooting section to README with recommended patterns for API/database routes
