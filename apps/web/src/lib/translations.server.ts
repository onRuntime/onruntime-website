import "server-only";

import { headers } from "next/headers";
import { getTranslation as getTranslationCore } from "@onruntime/translations";

import { load, defaultLocale } from "./translations";

export const getTranslation = async (namespace = "common") => {
  const headersList = await headers();
  const locale = headersList.get("x-locale") || defaultLocale;
  return getTranslationCore(load, locale, namespace);
};
