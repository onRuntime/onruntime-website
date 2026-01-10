---
"@onruntime/next-sitemap": minor
---

Add Pages Router support

- Add `@onruntime/next-sitemap/pages` export with `createSitemapIndexApiHandler`, `createSitemapApiHandler`, and `getSitemapStaticPaths`
- Support `getStaticPaths` for dynamic route resolution (in addition to `generateStaticParams` for App Router)
- Add i18n support for Pages Router via `locales` and `defaultLocale` options
- Add examples for Pages Router and Pages Router with i18n
