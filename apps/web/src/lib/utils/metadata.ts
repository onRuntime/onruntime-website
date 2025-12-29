import { Metadata } from "next";
import { headers } from "next/headers";

import { env } from "@/../env";

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
    },

    authors: [{ name: "onRuntime Studio", url: siteConfig.url }],
    creator: "onRuntime Studio",
    publisher: "onRuntime Studio",

    openGraph: {
      type: ogType,
      locale: "fr_FR",
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
 * Generate a canonical URL automatically from the current request
 * @returns The full canonical URL for the current page (with locale prefix)
 */
export async function generateCanonical(): Promise<string> {
  const headersList = await headers();
  const serverUrl = siteConfig.url;

  // Try to get the pathname from various headers
  const pathname =
    headersList.get("x-pathname") ||
    headersList.get("x-invoke-path") ||
    headersList.get("referer")?.replace(serverUrl, "") ||
    "/";

  // Clean up the pathname
  const cleanPath = pathname.split("?")[0] || "/"; // Remove query params
  const normalizedPath = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;

  // Combine and clean up double slashes
  const canonical = `${serverUrl}${normalizedPath}`
    .replace(/([^:]\/)\/+/g, "$1") // Remove double slashes except after protocol
    .replace(/\/$/, ""); // Remove trailing slash

  return canonical || serverUrl;
}