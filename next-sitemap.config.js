/* eslint-disable @typescript-eslint/no-require-imports */ 
const { env } = require("process");

const nextConfig = require("./next.config.mjs").default;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: env.NEXT_PUBLIC_APP_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies:
      env.VERCEL_ENV === "production"
        ? [{ userAgent: "*", allow: "/" }]
        : [{ userAgent: "*", disallow: "/" }],
  },
  transform: async (config, path) => {
    const pathParts = path.split("/").filter(Boolean);
    const hasLocale = nextConfig.i18n.locales.includes(pathParts[0]);
    const pathDepth = hasLocale ? pathParts.length - 1 : pathParts.length;

    const calculatedPriority = Number(
      Math.max(0.1, Math.min(1.0, 1.0 - pathDepth * 0.2)).toFixed(1),
    );

    const alternateRefs = nextConfig.i18n.locales.map((locale) => {
      const pathParts = path.split("/");
      const hasLocale = nextConfig.i18n.locales.includes(pathParts[1]);
      const pathWithoutLocale = hasLocale
        ? "/" + pathParts.slice(2).join("/")
        : path;

      if (locale === nextConfig.i18n.defaultLocale) {
        return {
          hreflang: locale,
          href: `${env.NEXT_PUBLIC_APP_URL}${pathWithoutLocale}`,
          hrefIsAbsolute: true,
        };
      } else {
        return {
          hreflang: locale,
          href: `${env.NEXT_PUBLIC_APP_URL}/${locale}${pathWithoutLocale}`,
          hrefIsAbsolute: true,
        };
      }
    });

    return {
      loc: path,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      priority: path === "/" ? 1.0 : calculatedPriority,
      alternateRefs,
    };
  },
};
