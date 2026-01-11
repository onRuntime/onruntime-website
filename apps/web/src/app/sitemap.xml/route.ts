import { createSitemapIndexHandler } from "@onruntime/next-sitemap/app";
import { siteConfig } from "@/constants/site-config";
import { localeCodes, defaultLocale } from "@/lib/translations";

export const dynamic = "force-static";

const { GET } = createSitemapIndexHandler({
  baseUrl: siteConfig.url,
  locales: localeCodes,
  defaultLocale,
});

export { GET };
