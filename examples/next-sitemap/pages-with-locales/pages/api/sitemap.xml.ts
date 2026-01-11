import { createSitemapIndexApiHandler } from "@onruntime/next-sitemap/pages";

export default createSitemapIndexApiHandler({
  baseUrl: "http://localhost:3005",
  locales: ["en", "fr"],
  defaultLocale: "en",
  debug: true,
});
