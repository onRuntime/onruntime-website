import { createSitemapApiHandler } from "@onruntime/next-sitemap/pages";

export default createSitemapApiHandler({
  baseUrl: "http://localhost:3005",
  locales: ["en", "fr"],
  defaultLocale: "en",
  debug: true,
});
