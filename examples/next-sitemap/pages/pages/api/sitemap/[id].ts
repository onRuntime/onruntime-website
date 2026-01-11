import { createSitemapApiHandler } from "@onruntime/next-sitemap/pages";

export default createSitemapApiHandler({
  baseUrl: "http://localhost:3003",
  debug: true,
});
