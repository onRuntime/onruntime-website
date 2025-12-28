"use client";

import { type ReactNode, useMemo } from "react";
import { useRouter } from "next/router";

import type { TranslationLoader } from "../core/types";
import { TranslationContext } from "../react/contexts/translation-context";

export type NextTranslationProviderProps = {
  children: ReactNode;
  load: TranslationLoader;
  keySplit?: boolean;
};

/**
 * Translation provider for Next.js applications
 * Automatically uses locale info from Next.js router
 */
export const NextTranslationProvider = ({
  children,
  load,
  keySplit = true,
}: NextTranslationProviderProps) => {
  const router = useRouter();
  const locale = router.locale ?? "en";
  const locales = router.locales ?? ["en"];
  const defaultLocale = router.defaultLocale ?? "en";

  const value = useMemo(
    () => ({
      locale,
      locales,
      defaultLocale,
      setLocale: (newLocale: string) => {
        router.push(router.pathname, router.asPath, { locale: newLocale });
      },
      load,
      keySplit,
    }),
    [locale, locales, defaultLocale, router, load, keySplit],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
