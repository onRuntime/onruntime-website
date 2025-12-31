import { createSitemapIndexHandler } from "@onruntime/next-sitemap/app";

export const dynamic = "force-static";

// @ts-expect-error - require.context is a webpack/turbopack feature
const pagesContext = require.context("../", true, /\/page\.tsx$/);

const { GET } = createSitemapIndexHandler({
  baseUrl: "https://example.com",
  pagesContext,
});

export { GET };
