"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";

import { useTranslationContext } from "../react/hooks/use-translation-context";

export type LinkProps = ComponentProps<typeof NextLink>;

/**
 * Link component that automatically prefixes href with the current locale.
 * For the default locale, no prefix is added (Pages Router behavior).
 */
export const Link = ({ href, locale, ...props }: LinkProps) => {
  const { locale: currentLocale, defaultLocale } = useTranslationContext();

  const targetLocale = locale ?? currentLocale;

  // Handle string href
  if (typeof href === "string") {
    // If href is external, use as-is
    if (href.startsWith("http") || href.startsWith("//")) {
      return <NextLink href={href} {...props} />;
    }

    // For default locale, don't add prefix (Pages Router behavior)
    if (targetLocale === defaultLocale) {
      const cleanHref = href.startsWith("/") ? href : `/${href}`;
      return <NextLink href={cleanHref} {...props} />;
    }

    // For non-default locales, prefix with locale
    const localizedHref = href.startsWith("/")
      ? `/${targetLocale}${href}`
      : `/${targetLocale}/${href}`;

    return <NextLink href={localizedHref} {...props} />;
  }

  // Handle UrlObject href
  const pathname = href.pathname ?? "/";

  // For default locale, don't add prefix
  if (targetLocale === defaultLocale) {
    return <NextLink href={href} {...props} />;
  }

  // For non-default locales, prefix pathname with locale
  const localizedHref = {
    ...href,
    pathname: pathname.startsWith("/")
      ? `/${targetLocale}${pathname}`
      : `/${targetLocale}/${pathname}`,
  };

  return <NextLink href={localizedHref} {...props} />;
};
