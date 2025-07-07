/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || "https://onruntime.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies:
      process.env.VERCEL_ENV === "production"
        ? [{ userAgent: "*", allow: "/" }]
        : [{ userAgent: "*", disallow: "/" }],
  },
  transform: async (config, path) => {
    const locales = ["fr"];
    const defaultLocale = "fr";

    const pathParts = path.split("/").filter(Boolean);
    const hasLocale = locales.includes(pathParts[0]);
    const pathDepth = hasLocale ? pathParts.length - 1 : pathParts.length;

    const calculatedPriority = Number(
      Math.max(0.1, Math.min(1.0, 1.0 - pathDepth * 0.2)).toFixed(1),
    );

    const alternateRefs = locales.map((locale) => {
      const pathParts = path.split("/");
      const hasLocale = locales.includes(pathParts[1]);
      const pathWithoutLocale = hasLocale
        ? "/" + pathParts.slice(2).join("/")
        : path;

      if (locale === defaultLocale) {
        return {
          hreflang: locale,
          href: `${process.env.NEXT_PUBLIC_APP_URL}${pathWithoutLocale}`,
          hrefIsAbsolute: true,
        };
      } else {
        return {
          hreflang: locale,
          href: `${process.env.NEXT_PUBLIC_APP_URL}/${locale}${pathWithoutLocale}`,
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

module.exports = config;
