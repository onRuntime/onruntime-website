"use client";

import { usePathname as useNextPathname } from "next/navigation";

import { useTranslationContext } from "../../react/hooks/use-translation-context";

/**
 * Hook that returns the pathname without the locale prefix.
 * Wraps Next.js usePathname and strips locale from path.
 */
export const usePathname = () => {
  const pathname = useNextPathname();
  const { locales } = useTranslationContext();

  const segments = pathname.split("/").filter(Boolean);
  const hasLocalePrefix = locales.includes(segments[0]);

  return hasLocalePrefix ? `/${segments.slice(1).join("/")}` : pathname;
};
