import { createSitemapApiHandler } from "@onruntime/next-sitemap/pages";

// @ts-expect-error - require.context is a webpack/turbopack feature
const pagesContext = require.context("../../", true, /^\.\/(?!\[|_|api\/).*\.tsx$/);

export default createSitemapApiHandler({
  baseUrl: "http://localhost:3003",
  pagesContext,
  debug: true,
});
