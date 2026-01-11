import { createSitemapIndexHandler } from "@onruntime/next-sitemap/app";

export const dynamic = "force-static";

const { GET } = createSitemapIndexHandler({
  baseUrl: "https://example.com",
  locales: ["en", "fr"],
  defaultLocale: "en",
});

export { GET };
