"use client";

import { createContext, useMemo, useState, type ReactNode } from "react";

import type { TranslationLoader } from "../../core/types";

export type TranslationContextValue = {
  locale: string;
  locales: readonly string[];
  defaultLocale: string;
  setLocale: (locale: string) => void;
  load: TranslationLoader;
  keySplit?: boolean;
};

export const TranslationContext = createContext<TranslationContextValue | null>(
  null,
);

export type TranslationProviderProps = {
  children: ReactNode;
  locales: readonly string[];
  defaultLocale?: string;
  load: TranslationLoader;
  keySplit?: boolean;
};

export const TranslationProvider = ({
  children,
  locales,
  defaultLocale,
  load,
  keySplit = true,
}: TranslationProviderProps) => {
  if (locales.length === 0) {
    throw new Error("TranslationProvider: locales array must not be empty");
  }

  const resolvedDefaultLocale = defaultLocale ?? locales[0];
  const [locale, setLocale] = useState(resolvedDefaultLocale);

  const value = useMemo(
    () => ({
      locale,
      locales,
      defaultLocale: resolvedDefaultLocale,
      setLocale,
      load,
      keySplit,
    }),
    [locale, locales, resolvedDefaultLocale, load, keySplit],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
