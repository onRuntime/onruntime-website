import type {
  TranslateFunction,
  TranslationDictionary,
  TranslationVariables,
} from "./types";

/**
 * Create a translation function for a given dictionary
 */
export const createTranslate = (
  translation: TranslationDictionary | undefined,
  keySplit = true,
): TranslateFunction => {
  return (key: string, variables?: TranslationVariables): string => {
    const keyList = keySplit ? key.split(".") : [key];
    let parent: unknown = translation;

    for (const k of keyList) {
      if (parent && typeof parent === "object" && k in parent) {
        parent = (parent as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    if (typeof parent === "string" && variables) {
      return parent.replace(
        /\{(\w+)\}/g,
        (_, name: string) => String(variables[name] ?? `{${name}}`),
      );
    }

    return typeof parent === "string" ? parent : key;
  };
};
