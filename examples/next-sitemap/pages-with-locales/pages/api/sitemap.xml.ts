import { createSitemapIndexApiHandler } from "@onruntime/next-sitemap/pages";

// @ts-expect-error - require.context is a webpack/turbopack feature
const pagesContext = require.context("../", true, /^\.\/(?!\[|_|api\/).*\.tsx$/);

export default createSitemapIndexApiHandler({
  baseUrl: "http://localhost:3005",
  locales: ["en", "fr"],
  defaultLocale: "en",
  pagesContext,
  debug: true,
});
