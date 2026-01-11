---
"@onruntime/next-sitemap": minor
---

Simplify API with automatic route discovery and jiti-powered module imports for both App Router and Pages Router.

**Breaking changes:**
- App Router: `pagesDirectory` option renamed to `appDirectory`

**New features:**
- Auto-detect `src/app` or `app` directory (App Router) / `src/pages` or `pages` (Pages Router)
- Use filesystem scanning + jiti for runtime TSX/JSX imports (no more `pagesContext` or `importPage` options)
- Works reliably in both development and production modes
- Added jiti as dependency for TypeScript/JSX runtime support
