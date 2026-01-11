import { createSitemapHandler } from "@onruntime/next-sitemap/app";
import { siteConfig } from "@/constants/site-config";
import { localeCodes, defaultLocale } from "@/lib/translations";

export const dynamic = "force-static";

const { generateStaticParams, GET } = createSitemapHandler({
  baseUrl: siteConfig.url,
  locales: localeCodes,
  defaultLocale,
});

export { generateStaticParams, GET };
