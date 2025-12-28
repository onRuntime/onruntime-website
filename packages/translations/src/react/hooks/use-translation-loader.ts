"use client";

import { useMemo } from "react";

import type { TranslateFunction, TranslationDictionary } from "../../core/types";
import { createTranslate } from "../../core/translate";
import { useTranslationContext } from "./use-translation-context";

export const useTranslationLoader = (
  namespace: string,
): {
  translation: TranslationDictionary | undefined;
  t: TranslateFunction;
  locale: string;
} => {
  const { locale, defaultLocale, load, keySplit } = useTranslationContext();

  const translation = useMemo(() => {
    let dict = load(locale, namespace);
    if (!dict && defaultLocale !== locale) {
      dict = load(defaultLocale, namespace);
    }
    return dict;
  }, [locale, defaultLocale, namespace, load]);

  const t = useMemo(
    () => createTranslate(translation, keySplit),
    [translation, keySplit],
  );

  return { translation, t, locale };
};
