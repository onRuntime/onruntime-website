import { Metadata } from "next";
import { headers } from "next/headers";

import { env } from "@/../env";
import { locales, defaultLocale } from "@/lib/translations";

/**
 * Convert locale code to OpenGraph locale format
 * e.g., "fr" → "fr_FR", "en" → "en_US"
 */
function toOgLocale(locale: string): string {
  const countryOverrides: Record<string, string> = {
    en: "US", // English defaults to US
  };
  const country = countryOverrides[locale] || locale.toUpperCase();
  return `${locale}_${country}`;
}

export const siteConfig = {
  name: "onRuntime Studio",
  description: "Agence digitale spécialisée en développement web, mobile et design UI/UX. Notre équipe d'experts transforme vos idées en solutions digitales performantes.",
  url: env.NEXT_PUBLIC_APP_URL || "https://onruntime.com",
  ogImage: "/og.jpg", 
  links: {
    discord: "https://discord.gg/ucX9c5yXmX",
    instagram: "https://www.instagram.com/onruntime/",
    linkedin: "https://www.linkedin.com/company/onruntime",
    github: "https://github.com/onruntime",
    twitter: "https://twitter.com/onruntime",
  },
};

export type OGImageType = 'default' | 'project' | 'service' | 'blog' | 'team' | 'legal';

export function getOGImageUrl({
  title,
  description,
  type = 'default',
}: {
  title: string;
  description: string;
  type?: OGImageType;
}): string {
  const params = new URLSearchParams();
  
  params.append('title', title);
  params.append('description', description);
  params.append('type', type);

  return `${siteConfig.url}/api/og?${params.toString()}`;
}

export async function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  ogType = "website",
  ogImage,
  ogImageType = "default",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  ogImageType?: OGImageType;
  noIndex?: boolean;
} = {}): Promise<Metadata> {
  const canonical = await generateCanonical();
  const languages = await generateAlternates();
  const currentLocale = await getCurrentLocale();

  // Titre avec format cohérent
  const formattedTitle = title === siteConfig.name
    ? title
    : `${title} | ${siteConfig.name}`;

  const finalOgImage = ogImage || getOGImageUrl({
    title,
    description,
    type: ogImageType,
  });

  return {
    title: formattedTitle,
    description,

    metadataBase: new URL(siteConfig.url),

    alternates: {
      canonical,
      languages,
    },

    authors: [{ name: "onRuntime Studio", url: siteConfig.url }],
    creator: "onRuntime Studio",
    publisher: "onRuntime Studio",

    openGraph: {
      type: ogType,
      locale: toOgLocale(currentLocale),
      url: canonical,
      title: formattedTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: finalOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      images: [finalOgImage],
      creator: "@onruntime",
      site: "@onruntime",
    },

    icons: {
      icon: [
        { url: "/favicon.ico" },
      ],
      shortcut: "/favicon-16x16.png",
      apple: [
        { url: "/apple-touch-icon.png" },
      ],
    },

    manifest: "/site.webmanifest",

    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

/**
 * Get the current locale from headers
 */
async function getCurrentLocale(): Promise<string> {
  const headersList = await headers();
  return headersList.get("x-locale") || defaultLocale;
}

/**
 * Get the current pathname from headers
 */
async function getPathname(): Promise<string> {
  const headersList = await headers();
  const serverUrl = siteConfig.url;

  const pathname =
    headersList.get("x-pathname") ||
    headersList.get("x-invoke-path") ||
    headersList.get("referer")?.replace(serverUrl, "") ||
    "/";

  const cleanPath = pathname.split("?")[0] || "/";
  return cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
}

/**
 * Get the path without locale prefix
 */
function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const hasLocalePrefix = locales.includes(segments[0]);
  return hasLocalePrefix ? `/${segments.slice(1).join("/")}` : pathname;
}

/**
 * Generate a canonical URL automatically from the current request
 * @returns The full canonical URL for the current page (with locale prefix)
 */
export async function generateCanonical(): Promise<string> {
  const pathname = await getPathname();
  const serverUrl = siteConfig.url;

  const canonical = `${serverUrl}${pathname}`
    .replace(/([^:]\/)\/+/g, "$1")
    .replace(/\/$/, "");

  return canonical || serverUrl;
}

/**
 * Generate hreflang alternate URLs for all locales
 * @returns Object with locale codes as keys and URLs as values
 */
export async function generateAlternates(): Promise<Record<string, string>> {
  const pathname = await getPathname();
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  const serverUrl = siteConfig.url;

  const alternates: Record<string, string> = {};

  for (const locale of locales) {
    if (locale === defaultLocale) {
      // Default locale has no prefix
      alternates[locale] = `${serverUrl}${pathWithoutLocale}`.replace(/\/$/, "") || serverUrl;
    } else {
      // Other locales have prefix
      const localePath = pathWithoutLocale === "/" ? `/${locale}` : `/${locale}${pathWithoutLocale}`;
      alternates[locale] = `${serverUrl}${localePath}`;
    }
  }

  // x-default points to the default locale version
  alternates["x-default"] = alternates[defaultLocale];

  return alternates;
}