"use client";

import { type ReactNode, useMemo, useCallback } from "react";
import { useRouter } from "next/router";

import type { TranslationLoader } from "../../core/types";
import { TranslationContext } from "../../react/contexts/translation-context";

export type NextTranslationProviderProps = {
  children: ReactNode;
  load: TranslationLoader;
  keySplit?: boolean;
};

/**
 * Translation provider for Next.js Pages Router
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

  const setLocale = useCallback(
    (newLocale: string) => {
      // Set cookie to remember user's choice
      document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
      router.push(router.pathname, router.asPath, {
        locale: newLocale,
        scroll: false,
      });
    },
    [router],
  );

  const value = useMemo(
    () => ({
      locale,
      locales,
      defaultLocale,
      setLocale,
      load,
      keySplit,
    }),
    [locale, locales, defaultLocale, setLocale, load, keySplit],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
