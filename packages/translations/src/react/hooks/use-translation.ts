"use client";

import type { TranslateFunction } from "../../core/types";
import { useTranslationLoader } from "./use-translation-loader";

export type UseTranslationResult = {
  t: TranslateFunction;
  locale: string;
};

export const useTranslation = (namespace = "common"): UseTranslationResult => {
  const { t, locale } = useTranslationLoader(namespace);
  return { t, locale };
};
