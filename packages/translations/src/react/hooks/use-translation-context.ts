"use client";

import { useContext } from "react";

import {
  TranslationContext,
  type TranslationContextValue,
} from "../contexts/translation-context";

export const useTranslationContext = (): TranslationContextValue => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error(
      "useTranslationContext must be used within a TranslationProvider",
    );
  }
  return context;
};
