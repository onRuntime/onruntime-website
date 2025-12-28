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
