import { Metadata } from "next";

export const siteConfig = {
  name: "onRuntime Studio",
  description: "Agence digitale spécialisée en développement web, mobile et design UI/UX. Notre équipe d'experts transforme vos idées en solutions digitales performantes.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://onruntime.com",
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

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  ogType = "website",
  ogImage,
  ogImageType = "default",
  noIndex = false,
  canonical,
}: {
  title?: string;
  description?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  ogImageType?: OGImageType;
  noIndex?: boolean;
  canonical?: string;
} = {}): Metadata {
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
    
    ...(canonical && { 
      alternates: { 
        canonical 
      }
    }),
    
    authors: [{ name: "onRuntime Studio", url: siteConfig.url }],
    creator: "onRuntime Studio",
    publisher: "onRuntime Studio",
    
    openGraph: {
      type: ogType,
      locale: "fr_FR",
      url: canonical || siteConfig.url,
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