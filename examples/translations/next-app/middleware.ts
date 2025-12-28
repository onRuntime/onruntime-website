import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { locales, defaultLocale } from "@/lib/translations";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname has a locale prefix
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // If it's the default locale with prefix, redirect to remove it
  if (pathnameLocale === defaultLocale) {
    const newPathname = pathname.replace(`/${defaultLocale}`, "") || "/";
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  // If it has a non-default locale prefix, let it through
  if (pathnameLocale) return;

  // No locale prefix - rewrite to default locale internally
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
