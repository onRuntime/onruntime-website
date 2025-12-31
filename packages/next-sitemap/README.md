# @onruntime/next-sitemap

Dynamic sitemap generation for Next.js with automatic route discovery.

## Example

- [Next.js App Router](https://github.com/onRuntime/onruntime/tree/master/examples/next-sitemap/app)

## Features

- Automatic route discovery using `require.context`
- Calls `generateStaticParams` for dynamic routes
- Multi-sitemap support with sitemap index (for sites with >50,000 URLs)
- hreflang alternates for i18n
- Fully static generation (SSG)

## Installation

```bash
pnpm add @onruntime/next-sitemap
```

## Usage

### Next.js App Router

#### 1. Create the sitemap index route

```typescript
// app/sitemap.xml/route.ts
import { createSitemapIndexHandler } from "@onruntime/next-sitemap/app";

export const dynamic = "force-static";

// @ts-expect-error - require.context is a webpack/turbopack feature
const pagesContext = require.context("../", true, /\/page\.tsx$/);

const { GET } = createSitemapIndexHandler({
  baseUrl: "https://example.com",
  pagesContext,
});

export { GET };
```

#### 2. Create the individual sitemap route

```typescript
// app/sitemap.xml/[id]/route.ts
import { createSitemapHandler } from "@onruntime/next-sitemap/app";

export const dynamic = "force-static";

// @ts-expect-error - require.context is a webpack/turbopack feature
const pagesContext = require.context("../../", true, /\/page\.tsx$/);

const { generateStaticParams, GET } = createSitemapHandler({
  baseUrl: "https://example.com",
  pagesContext,
});

export { generateStaticParams, GET };
```

#### With i18n (optional)

If your app uses a `[locale]` segment for internationalization, just add `locales` and `defaultLocale`. The `localeSegment` is automatically set to `"[locale]"`:

```typescript
// app/sitemap.xml/route.ts
const pagesContext = require.context("../[locale]", true, /\/page\.tsx$/);

const { GET } = createSitemapIndexHandler({
  baseUrl: "https://example.com",
  locales: ["en", "fr"],
  defaultLocale: "en",
  pagesContext,
});
```

If you use a different segment name (e.g., `[lang]`), specify it explicitly:

```typescript
localeSegment: "[lang]", // Custom segment name
```

#### 3. Add URL rewrite in next.config.ts

```typescript
// next.config.ts
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
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `baseUrl` | `string` | required | Base URL of the site |
| `locales` | `string[]` | `[]` | List of supported locales |
| `defaultLocale` | `string` | `undefined` | Default locale (URLs without prefix) |
| `urlsPerSitemap` | `number` | `5000` | Max URLs per sitemap file |
| `localeSegment` | `string` | auto | Auto-detected as `"[locale]"` when i18n is configured. Override for custom names like `"[lang]"`. |
| `pagesContext` | `object` | required | Result of `require.context()` |
| `exclude` | `string[]` or `function` | `undefined` | Patterns or function to exclude routes |
| `priority` | `number`, `"auto"`, or `function` | `"auto"` | Priority calculation (auto = depth-based) |
| `changeFreq` | `ChangeFrequency` or `function` | `"weekly"` | Change frequency for entries |
| `additionalSitemaps` | `string[]` | `[]` | Additional sitemaps to include in index |

#### Exclude Routes

Exclude specific routes from the sitemap using glob patterns or a function:

```typescript
// Using glob patterns
const { GET } = createSitemapIndexHandler({
  baseUrl: "https://example.com",
  pagesContext,
  exclude: ["/admin/*", "/api/*", "/private/**"],
});

// Using a function
const { GET } = createSitemapIndexHandler({
  baseUrl: "https://example.com",
  pagesContext,
  exclude: (path) => path.startsWith("/internal"),
});
```

#### Priority

By default, priority is calculated automatically based on URL depth:
- `/` → 1.0
- `/about` → 0.8
- `/blog/post` → 0.6
- Minimum: 0.1

You can override with a fixed value or a function:

```typescript
// Fixed priority for all URLs
priority: 0.8,

// Custom function
priority: (path) => {
  if (path === "/") return 1.0;
  if (path.startsWith("/products")) return 0.9;
  return 0.5;
},
```

#### Change Frequency

Set a default change frequency or customize per route:

```typescript
// Fixed value
changeFreq: "daily",

// Custom function
changeFreq: (path) => {
  if (path === "/") return "daily";
  if (path.startsWith("/blog")) return "weekly";
  return "monthly";
},
```

#### Additional Sitemaps

Include custom sitemaps in the sitemap index (e.g., for API-fetched data):

```typescript
const { GET } = createSitemapIndexHandler({
  baseUrl: "https://example.com",
  pagesContext,
  additionalSitemaps: ["/products-sitemap.xml", "/blog-sitemap.xml"],
});
```

### How It Works

1. `require.context` scans your app directory at build time
2. For each page found, it extracts the route path
3. For dynamic routes (e.g., `/projects/[id]`), it calls `generateStaticParams`
4. URLs are paginated into multiple sitemaps (default: 5000 URLs each)
5. A sitemap index lists all individual sitemaps

### Generated URLs

For a route structure like:
```
app/
├── page.tsx                    → /
├── about/page.tsx              → /about
├── posts/page.tsx              → /posts
└── posts/[slug]/page.tsx       → /posts/hello-world, /posts/getting-started, ...
```

The sitemap will include:
- All static routes
- All dynamic routes resolved via `generateStaticParams`
- hreflang alternates for each locale (if i18n is configured)

**Note:** Dynamic routes without `generateStaticParams` are skipped. If you need to include routes that fetch data at runtime (e.g., from an API), you can create a separate sitemap using [Next.js native sitemap generation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap):

```typescript
// app/custom-sitemap.xml/route.ts
import { generateSitemapXml } from "@onruntime/next-sitemap";

export async function GET() {
  // Fetch your dynamic data
  const products = await fetch("https://api.example.com/products").then(r => r.json());

  const entries = products.map((p: { slug: string }) => ({
    url: `https://example.com/products/${p.slug}`,
    lastModified: new Date(),
  }));

  return new Response(generateSitemapXml(entries), {
    headers: { "Content-Type": "application/xml" },
  });
}
```

### Example Output

**Sitemap Index** (`/sitemap.xml`):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-0.xml</loc>
    <lastmod>2024-01-01T00:00:00.000Z</lastmod>
  </sitemap>
</sitemapindex>
```

**Individual Sitemap** (`/sitemap-0.xml`):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2024-01-01T00:00:00.000Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
  <url>
    <loc>https://example.com/posts/hello-world</loc>
    <lastmod>2024-01-01T00:00:00.000Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

## License

MIT
