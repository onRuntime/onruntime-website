"use client";

import type { ReactNode } from "react";
import { AppTranslationProvider } from "@onruntime/translations/next";

import { load, locales } from "@/lib/translations";

export const Providers = ({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) => {
  return (
    <AppTranslationProvider locale={locale} locales={locales} load={load}>
      {children}
    </AppTranslationProvider>
  );
};
