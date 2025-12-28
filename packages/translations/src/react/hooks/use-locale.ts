"use client";

import { useTranslationContext } from "./use-translation-context";

export const useLocale = () => {
  const { locale, locales, setLocale } = useTranslationContext();
  return { locale, locales, setLocale };
};
