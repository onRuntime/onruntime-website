"use client";

import { type ReactNode, useMemo, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

import type { TranslationLoader } from "../../core/types";
import { TranslationContext } from "../../react/contexts/translation-context";

export type AppTranslationProviderProps = {
  children: ReactNode;
  locale: string;
  locales: readonly string[];
  defaultLocale?: string;
  load: TranslationLoader;
  keySplit?: boolean;
};

/**
 * Translation provider for Next.js App Router
 * Locale is passed from route params [lang]
 */
export const AppTranslationProvider = ({
  children,
  locale,
  locales,
  defaultLocale,
  load,
  keySplit = true,
}: AppTranslationProviderProps) => {
  if (locales.length === 0) {
    throw new Error("AppTranslationProvider: locales array must not be empty");
  }

  const router = useRouter();
  const pathname = usePathname();

  const resolvedDefaultLocale = defaultLocale ?? locales[0];

  const setLocale = useCallback(
    (newLocale: string) => {
      // Set cookie to remember user's choice
      document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;

      const segments = pathname.split("/");
      const hasLocalePrefix = locales.includes(segments[1]);

      if (hasLocalePrefix) {
        // URL has locale prefix (e.g., /fr/about) - replace it
        if (newLocale === resolvedDefaultLocale) {
          // Going to default locale - remove prefix
          segments.splice(1, 1);
        } else {
          // Going to non-default locale - replace prefix
          segments[1] = newLocale;
        }
      } else {
        // URL has no locale prefix (e.g., /about) - we're on default locale
        if (newLocale !== resolvedDefaultLocale) {
          // Going to non-default locale - add prefix
          segments.splice(1, 0, newLocale);
        }
        // If staying on default locale, no change needed
      }

      const newPath = segments.join("/") || "/";

      router.push(newPath, { scroll: false });
    },
    [pathname, locales, resolvedDefaultLocale, router],
  );

  const value = useMemo(
    () => ({
      locale,
      locales,
      defaultLocale: resolvedDefaultLocale,
      setLocale,
      load,
      keySplit,
    }),
    [locale, locales, resolvedDefaultLocale, setLocale, load, keySplit],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
