import "server-only";

import { Metadata } from "next";
import { headers } from "next/headers";

import { locales, defaultLocale } from "@/lib/translations";
import { getTranslation } from "@/lib/translations.server";
import { siteConfig } from "@/constants/site-config";

import {
  toOgLocale,
  getOGImageUrl,
  getPathWithoutLocale,
  type OGImageType,
} from "./metadata";

// Re-export pure utilities for convenience
export { toOgLocale, getOGImageUrl, getPathWithoutLocale, type OGImageType } from "./metadata";

export async function constructMetadata({
  title = siteConfig.name,
  description,
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

  // Get translated default description if not provided
  const { t } = await getTranslation("constants/site-config");
  const finalDescription = description ?? t("description");

  // Format title consistently
  const formattedTitle = title === siteConfig.name
    ? title
    : `${title} | ${siteConfig.name}`;

  const finalOgImage = ogImage || getOGImageUrl({
    title,
    description: finalDescription,
    type: ogImageType,
  });

  return {
    title: formattedTitle,
    description: finalDescription,

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
      description: finalDescription,
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
      description: finalDescription,
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

  // Try x-pathname or x-invoke-path first
  let pathname = headersList.get("x-pathname") || headersList.get("x-invoke-path");

  // Fall back to referer, but only if it matches our origin
  if (!pathname) {
    const referer = headersList.get("referer");
    if (referer) {
      try {
        const refererUrl = new URL(referer);
        const serverOrigin = new URL(serverUrl).origin;
        if (refererUrl.origin === serverOrigin) {
          pathname = refererUrl.pathname;
        }
      } catch {
        // Invalid URL, ignore referer
      }
    }
  }

  // Default to root
  if (!pathname) {
    pathname = "/";
  }

  // Remove query string and ensure leading slash
  const cleanPath = pathname.split("?")[0] || "/";
  return cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
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
