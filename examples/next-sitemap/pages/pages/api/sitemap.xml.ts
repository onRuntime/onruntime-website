import { createSitemapIndexApiHandler } from "@onruntime/next-sitemap/pages";

export default createSitemapIndexApiHandler({
  baseUrl: "http://localhost:3003",
  debug: true,
});
