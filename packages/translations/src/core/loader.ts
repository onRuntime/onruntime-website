import type { TranslateFunction, TranslationLoader } from "./types";
import { createTranslate } from "./translate";

/**
 * Get translation function for server components or static usage
 *
 * @example
 * ```tsx
 * // Server Component
 * const { t } = getTranslation(load, "en");
 * return <h1>{t("greeting", { name: "John" })}</h1>;
 * ```
 */
export const getTranslation = (
  load: TranslationLoader,
  locale: string,
  namespace = "common",
): { t: TranslateFunction; locale: string } => {
  const dictionary = load(locale, namespace);
  const t = createTranslate(dictionary);
  return { t, locale };
};
