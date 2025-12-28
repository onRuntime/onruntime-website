export type TranslationValue = string | { [key: string]: TranslationValue };

export type TranslationDictionary = { [key: string]: TranslationValue };

export type TranslationVariables = Record<string, string | number>;

export type TranslateFunction = (
  key: string,
  variables?: TranslationVariables,
) => string;

export type TranslationLoader = (
  locale: string,
  namespace: string,
) => TranslationDictionary | undefined;

export type TranslationConfig = {
  locale: string;
  fallbackLocale?: string;
  keySplit?: boolean;
};
