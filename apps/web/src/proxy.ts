import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { locales, defaultLocale } from "@/lib/translations";

const LOCALE_COOKIE = "NEXT_LOCALE";

function getPreferredLocale(request: NextRequest): string {
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

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // If URL has the default locale prefix, redirect to remove it and set cookie
  if (pathnameLocale === defaultLocale) {
    const newPathname = pathname.slice(`/${defaultLocale}`.length) || "/";
    const response = NextResponse.redirect(new URL(newPathname, request.url));
    response.cookies.set(LOCALE_COOKIE, defaultLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
    return response;
  }

  // If URL has a non-default locale prefix, use it and persist preference
  if (pathnameLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", pathnameLocale);
    requestHeaders.set("x-pathname", pathname);
    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    response.cookies.set(LOCALE_COOKIE, pathnameLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
    return response;
  }

  // No locale in URL - detect from Accept-Language
  const preferredLocale = getPreferredLocale(request);

  // If preferred locale is not the default, redirect to it
  if (preferredLocale !== defaultLocale) {
    return NextResponse.redirect(
      new URL(`/${preferredLocale}${pathname}`, request.url),
    );
  }

  // Use default locale (rewrite internally)
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", defaultLocale);
  requestHeaders.set("x-pathname", pathname);
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(request.nextUrl, {
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api|.*\\.).*)"],
};
