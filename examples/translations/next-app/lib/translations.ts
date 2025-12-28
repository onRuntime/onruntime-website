import {
  getTranslation as getTranslationCore,
  type TranslationLoader,
} from "@onruntime/translations";

export const locales = ["en", "fr"];
export const defaultLocale = locales[0];

export const load: TranslationLoader = (locale, namespace) => {
  try {
    return require(`../locales/${locale}/${namespace}.json`);
  } catch {
    return undefined;
  }
};

/**
 * Helper for server components - handles params automatically
 */
export const getTranslation = async (
  params: Promise<{ lang: string }>,
  namespace = "common",
) => {
  const { lang } = await params;
  return getTranslationCore(load, lang, namespace);
};
