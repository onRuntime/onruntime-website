"use client";

import { type ReactNode, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";

import type { TranslationLoader } from "../core/types";
import { TranslationContext } from "../react/contexts/translation-context";

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

  const value = useMemo(
    () => ({
      locale,
      locales,
      defaultLocale: defaultLocale ?? locales[0],
      setLocale: (newLocale: string) => {
        const segments = pathname.split("/");
        segments[1] = newLocale;
        router.push(segments.join("/"));
      },
      load,
      keySplit,
    }),
    [locale, locales, defaultLocale, pathname, router, load, keySplit],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
