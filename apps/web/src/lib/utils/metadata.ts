import { locales } from "@/lib/translations";
import { siteConfig } from "@/constants/site-config";

/**
 * Convert locale code to OpenGraph locale format
 * e.g., "fr" → "fr_FR", "en" → "en_US"
 */
export function toOgLocale(locale: string): string {
  const countryOverrides: Record<string, string> = {
    en: "US", // English defaults to US
  };
  const country = countryOverrides[locale] || locale.toUpperCase();
  return `${locale}_${country}`;
}

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

/**
 * Get the path without locale prefix
 */
export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const hasLocalePrefix = locales.includes(segments[0]);
  return hasLocalePrefix ? `/${segments.slice(1).join("/")}` : pathname;
}
