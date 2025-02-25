import { Metadata } from "next";

// Configuration du site
export const siteConfig = {
  name: "onRuntime Studio",
  description: "Agence digitale spécialisée en développement web, mobile et design UI/UX. Notre équipe d'experts transforme vos idées en solutions digitales performantes.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://onruntime.com",
  ogImage: "/og.jpg", // Image OG par défaut (fallback)
  links: {
    discord: "https://discord.gg/ucX9c5yXmX",
    instagram: "https://www.instagram.com/onruntime/",
    linkedin: "https://www.linkedin.com/company/onruntime",
    github: "https://github.com/onruntime",
    twitter: "https://twitter.com/onruntime",
  },
};

// Types possibles d'images OG
export type OGImageType = 'default' | 'project' | 'service' | 'blog' | 'team' | 'legal';

/**
 * Génère l'URL pour l'image OG avec les paramètres fournis
 */
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

/**
 * Construit l'ensemble des métadonnées pour une page
 */
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
  
  // Génère l'URL de l'image OG si elle n'est pas fournie explicitement
  const finalOgImage = ogImage || getOGImageUrl({
    title,
    description,
    type: ogImageType,
  });
  
  return {
    title: formattedTitle,
    description,
    
    // Base URL pour les liens relatifs dans les balises meta
    metadataBase: new URL(siteConfig.url),
    
    // URL canonique
    ...(canonical && { 
      alternates: { 
        canonical 
      }
    }),
    
    authors: [{ name: "onRuntime Studio", url: siteConfig.url }],
    creator: "onRuntime Studio",
    publisher: "onRuntime Studio",
    
    // Open Graph
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
    
    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      images: [finalOgImage],
      creator: "@onruntime",
      site: "@onruntime",
    },
    
    // Icônes
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      shortcut: "/favicon-16x16.png",
      apple: [
        { url: "/apple-touch-icon.png" },
      ],
    },
    
    // Manifeste
    manifest: "/site.webmanifest",
    
    // Robots
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}