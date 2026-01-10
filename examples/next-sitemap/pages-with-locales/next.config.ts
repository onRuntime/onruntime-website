import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
      {
        source: "/sitemap-:id.xml",
        destination: "/api/sitemap/:id",
      },
    ];
  },
};

export default nextConfig;
