import "server-only";

import { headers } from "next/headers";
import { getTranslation as getTranslationCore } from "@onruntime/translations";

import { load, defaultLocale } from "./translations";

export const getTranslation = async (namespace = "common", localeOverride?: string) => {
  const locale = localeOverride ?? (await headers()).get("x-locale") ?? defaultLocale;
  return getTranslationCore(load, locale, namespace);
};
