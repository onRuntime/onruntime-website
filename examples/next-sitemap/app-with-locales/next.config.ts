import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap-:id.xml",
        destination: "/sitemap.xml/:id",
      },
    ];
  },
};

export default nextConfig;
