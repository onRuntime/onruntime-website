import type { TranslationLoader } from "@onruntime/translations";
import type { NextRequest } from "next/server";

export const locales = [
  // Default
  { code: "en", label: "English" },
  // Europe
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
  { code: "pt", label: "Português" },
  { code: "nl", label: "Nederlands" },
  { code: "pl", label: "Polski" },
  { code: "sv", label: "Svenska" },
  // Asia
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "zh", label: "中文" },
  // Middle East / Africa
  { code: "ar", label: "العربية" },
  { code: "tr", label: "Türkçe" },
  // South Asia
  { code: "hi", label: "हिन्दी" },
] as const;

export type Locale = (typeof locales)[number]["code"];

export const localeCodes = locales.map((l) => l.code);
export const defaultLocale = locales[0].code;

export const LOCALE_COOKIE = "NEXT_LOCALE";

export const load: TranslationLoader = (locale, namespace) => {
  try {
    return require(`@/locales/${locale}/${namespace}.json`);
  } catch {
    return undefined;
  }
};

export function getPreferredLocale(request: NextRequest): Locale {
  // Check cookie first (user's explicit choice)
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && localeCodes.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // Fall back to Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, priorityToken] = lang.trim().split(";");
      const priorityMatch = priorityToken?.match(/q=([0-9.]+)/);
      const priority = priorityMatch ? parseFloat(priorityMatch[1]) : 1.0;
      return {
        code: code.split("-")[0].toLowerCase(),
        priority: Number.isNaN(priority) ? 1.0 : priority,
      };
    })
    .sort((a, b) => b.priority - a.priority)
    .find((lang) => localeCodes.includes(lang.code as Locale));

  return (preferred?.code as Locale) || defaultLocale;
}
