---
"@onruntime/next-sitemap": patch
---

Fix URL generation issues in sitemap:

- Fix missing leading slash between domain and path (e.g., `http://localhost:3000articles` → `http://localhost:3000/articles`)
- Fix invalid `src/app/` paths being included in sitemap
- Ensure pathnames are properly normalized after route group removal
