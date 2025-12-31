import { createSitemapHandler } from "@onruntime/next-sitemap/app";
import { siteConfig } from "@/constants/site-config";
import { localeCodes, defaultLocale } from "@/lib/translations";

export const dynamic = "force-static";

// @ts-expect-error - require.context is a webpack/turbopack feature
const pagesContext = require.context("../../[locale]", true, /\/page\.tsx$/);

const { generateStaticParams, GET } = createSitemapHandler({
  baseUrl: siteConfig.url,
  locales: localeCodes,
  defaultLocale,
  pagesContext,
});

export { generateStaticParams, GET };
