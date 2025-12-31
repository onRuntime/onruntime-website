# @onruntime/next-sitemap

## 0.2.0

### Minor Changes

- 94b0075: Add new configuration options for sitemap generation:

  - `exclude`: Filter out routes using glob patterns or a function
  - `priority`: Automatic depth-based priority calculation (or custom function)
  - `changeFreq`: Set change frequency per route
  - `additionalSitemaps`: Include custom sitemaps in the sitemap index
