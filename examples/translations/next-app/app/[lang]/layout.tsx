import type { ReactNode } from "react";

import { locales } from "@/lib/translations";

import { Providers } from "./providers";

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
        <Providers locale={lang}>{children}</Providers>
      </body>
    </html>
  );
}
