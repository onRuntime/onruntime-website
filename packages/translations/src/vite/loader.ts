import type { TranslationDictionary } from "../core/types";
import type { TranslationLoader } from "../core/types";

/**
 * Create a translation loader from Vite's import.meta.glob result
 *
 * @example
 * ```ts
 * const modules = import.meta.glob('./locales/*.json', { eager: true });
 * const load = createViteLoader(modules);
 * ```
 */
export const createViteLoader = (
  modules: Record<string, unknown>,
  basePath = "./locales",
): TranslationLoader => {
  return (locale: string, namespace: string) => {
    const path = `${basePath}/${locale}/${namespace}.json`;
    const module = modules[path] as
      | { default: TranslationDictionary }
      | TranslationDictionary
      | undefined;

    if (!module) {
      return undefined;
    }

    // Handle both { default: ... } and direct exports
    if (typeof module === "object" && "default" in module) {
      return module.default as TranslationDictionary;
    }

    return module as TranslationDictionary;
  };
};
