import type { TranslationLoader } from "@onruntime/translations";
import type { NextRequest } from "next/server";

export const locales = ["en", "fr"];
export const defaultLocale = locales[0];

export const LOCALE_COOKIE = "NEXT_LOCALE";

export const load: TranslationLoader = (locale, namespace) => {
  try {
    return require(`@/locales/${locale}/${namespace}.json`);
  } catch {
    return undefined;
  }
};

export function getPreferredLocale(request: NextRequest): string {
  // Check cookie first (user's explicit choice)
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
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
    .find((lang) => locales.includes(lang.code));

  return preferred?.code || defaultLocale;
}
