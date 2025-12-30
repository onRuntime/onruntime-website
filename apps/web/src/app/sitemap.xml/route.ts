import { createSitemapIndexHandler } from "@onruntime/next-sitemap/app";
import { siteConfig } from "@/constants/site-config";
import { locales, defaultLocale } from "@/lib/translations";

export const dynamic = "force-static";

// @ts-expect-error - require.context is a webpack/turbopack feature
const pagesContext = require.context("../[locale]", true, /\/page\.tsx$/);

const { GET } = createSitemapIndexHandler({
  baseUrl: siteConfig.url,
  locales,
  defaultLocale,
  pagesContext,
});

export { GET };
