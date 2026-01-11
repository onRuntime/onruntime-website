import { createSitemapHandler } from "@onruntime/next-sitemap/app";

export const dynamic = "force-static";

const { generateStaticParams, GET } = createSitemapHandler({
  baseUrl: "https://example.com",
});

export { generateStaticParams, GET };
