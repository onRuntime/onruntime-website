"use client";

import type { ReactNode } from "react";
import { AppTranslationProvider } from "@onruntime/translations/next";

import { load, locales } from "@/lib/translations";

type ProvidersProps = {
  children: ReactNode;
  locale: string;
};

export const Providers = ({ children, locale }: ProvidersProps) => {
  return (
    <AppTranslationProvider locale={locale} locales={locales} load={load}>
      {children}
    </AppTranslationProvider>
  );
};
