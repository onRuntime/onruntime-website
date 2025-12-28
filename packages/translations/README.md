# @onruntime/translations

Lightweight i18n library for React, Next.js, and React Native.

## Examples

- [Next.js App Router](https://github.com/onRuntime/onruntime/tree/master/examples/translations/next-app)
- [Next.js Pages Router](https://github.com/onRuntime/onruntime/tree/master/examples/translations/next-pages)
- [React + Vite](https://github.com/onRuntime/onruntime/tree/master/examples/translations/react)

## Installation

```bash
pnpm add @onruntime/translations
```

## Usage

### Next.js App Router

#### 1. Create your translations config

```typescript
// lib/translations.ts
import {
  getTranslation as getTranslationCore,
  type TranslationLoader,
} from "@onruntime/translations";

export const locales = ["en", "fr"];
export const defaultLocale = locales[0];

export const load: TranslationLoader = (locale, namespace) => {
  try {
    return require(`../locales/${locale}/${namespace}.json`);
  } catch {
    return undefined;
  }
};

export const getTranslation = async (
  params: Promise<{ lang: string }>,
  namespace = "common",
) => {
  const { lang } = await params;
  return getTranslationCore(load, lang, namespace);
};
```

#### 2. Setup middleware

```typescript
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { locales, defaultLocale } from "@/lib/translations";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameLocale === defaultLocale) {
    const newPathname = pathname.replace(`/${defaultLocale}`, "") || "/";
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  if (pathnameLocale) return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
```

#### 3. Setup layout with provider

```typescript
// app/[lang]/layout.tsx
import type { ReactNode } from "react";
import { AppTranslationProvider } from "@onruntime/translations/next";

import { load, locales } from "@/lib/translations";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body>
        <AppTranslationProvider locale={lang} locales={locales} load={load}>
          {children}
        </AppTranslationProvider>
      </body>
    </html>
  );
}
```

#### 4. Use in Server Components

```typescript
// app/[lang]/page.tsx
import { Link } from "@onruntime/translations/next";

import { getTranslation } from "@/lib/translations";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { t, locale } = await getTranslation(params);

  return (
    <div>
      <h1>{t("greeting", { name: "John" })}</h1>
      <Link href="/about">{t("nav.about")}</Link>
    </div>
  );
}
```

#### 5. Use in Client Components

```typescript
// app/[lang]/about/page.tsx
"use client";

import { useTranslation, useLocale } from "@onruntime/translations/react";
import { Link } from "@onruntime/translations/next";

export default function About() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  return (
    <div>
      <h1>{t("about.title")}</h1>
      <p>Current locale: {locale}</p>
      <Link href="/">{t("nav.home")}</Link>
    </div>
  );
}
```

### Next.js Pages Router

#### 1. Configure i18n in next.config.js

```javascript
// next.config.js
module.exports = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
};
```

#### 2. Setup provider in _app.tsx

```typescript
// pages/_app.tsx
import type { AppProps } from "next/app";
import { TranslationProvider } from "@onruntime/translations/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider
      load={(locale, ns) => {
        try {
          return require(`@/locales/${locale}/${ns}.json`);
        } catch {
          return undefined;
        }
      }}
    >
      <Component {...pageProps} />
    </TranslationProvider>
  );
}
```

#### 3. Use in pages

```typescript
// pages/index.tsx
import Link from "next/link";
import { useTranslation } from "@onruntime/translations/react";

export default function Home() {
  const { t, locale } = useTranslation();

  return (
    <div>
      <h1>{t("greeting", { name: "John" })}</h1>
      <Link href="/about" locale="fr">
        Switch to French
      </Link>
    </div>
  );
}
```

### React + Vite

#### 1. Setup provider with Vite loader

```typescript
// src/app.tsx
import { TranslationProvider } from "@onruntime/translations/react";
import { createViteLoader } from "@onruntime/translations/vite";

const modules = import.meta.glob("./locales/**/*.json", { eager: true });
const load = createViteLoader(modules);

const App = () => {
  return (
    <TranslationProvider defaultLocale="en" locales={["en", "fr"]} load={load}>
      <Demo />
    </TranslationProvider>
  );
};

export default App;
```

#### 2. Use translations

```typescript
// src/components/demo.tsx
import { useTranslation, useLocale } from "@onruntime/translations/react";

export const Demo = () => {
  const { t, locale } = useTranslation();
  const { setLocale } = useLocale();

  return (
    <div>
      <h1>{t("greeting", { name: "John" })}</h1>
      <p>Current locale: {locale}</p>
      <button onClick={() => setLocale(locale === "en" ? "fr" : "en")}>
        Switch language
      </button>
    </div>
  );
};
```

### Translation files

```json
// locales/en/common.json
{
  "greeting": "Hello, {name}!",
  "nav": {
    "home": "Home",
    "about": "About"
  },
  "about": {
    "title": "About Us"
  }
}
```

## License

MIT
