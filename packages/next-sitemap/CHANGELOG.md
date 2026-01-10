# @onruntime/next-sitemap

## 0.4.0

### Minor Changes

- 7f75ff9: Add Pages Router support
  - Add `@onruntime/next-sitemap/pages` export with `createSitemapIndexApiHandler`, `createSitemapApiHandler`, and `getSitemapStaticPaths`
  - Support `getStaticPaths` for dynamic route resolution (in addition to `generateStaticParams` for App Router)
  - Add i18n support for Pages Router via `locales` and `defaultLocale` options
  - Add examples for Pages Router and Pages Router with i18n

## 0.3.0

### Minor Changes

- 7485075: Add debug option and improve error handling for dynamic routes:
  - Add `debug` option to log route discovery and `generateStaticParams` calls
  - Add error handling to prevent crashes when `generateStaticParams` fails
  - Log warnings for dynamic routes without `generateStaticParams`
  - Add troubleshooting section to README with recommended patterns for API/database routes

## 0.2.1

### Patch Changes

- e0c8b00: Fix URL generation issues in sitemap:
  - Fix missing leading slash between domain and path (e.g., `http://localhost:3000articles` → `http://localhost:3000/articles`)
  - Fix invalid `src/app/` paths being included in sitemap
  - Ensure pathnames are properly normalized after route group removal

## 0.2.0

### Minor Changes

- 94b0075: Add new configuration options for sitemap generation:
  - `exclude`: Filter out routes using glob patterns or a function
  - `priority`: Automatic depth-based priority calculation (or custom function)
  - `changeFreq`: Set change frequency per route
  - `additionalSitemaps`: Include custom sitemaps in the sitemap index
