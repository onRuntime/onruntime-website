import {
  getTranslation as getTranslationCore,
  type TranslationLoader,
} from "@onruntime/translations";

export const locales = ["en", "fr"];
export const defaultLocale = locales[0];

export const load: TranslationLoader = (locale, namespace) => {
  try {
    return require(`@/locales/${locale}/${namespace}.json`);
  } catch {
    return undefined;
  }
};

export const getTranslation = async (
  params: Promise<{ locale: string }>,
  namespace = "common",
) => {
  const { locale } = await params;
  return getTranslationCore(load, locale, namespace);
};
