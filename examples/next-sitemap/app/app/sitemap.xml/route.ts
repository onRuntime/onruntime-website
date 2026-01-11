import { createSitemapIndexHandler } from "@onruntime/next-sitemap/app";

export const dynamic = "force-static";

const { GET } = createSitemapIndexHandler({
  baseUrl: "https://example.com",
});

export { GET };
