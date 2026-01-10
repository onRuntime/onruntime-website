import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
