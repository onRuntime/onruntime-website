import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "@onruntime/translations/react";

export default function Home() {
  const { t, locale } = useTranslation();
  const { locales = [] } = useRouter();
  const count: number = 5;

  const otherLocale = locale === "en" ? "fr" : "en";

  return (
    <div style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <nav style={{ marginBottom: "2rem", display: "flex", gap: "1rem" }}>
        <Link href="/" style={{ fontWeight: "bold" }}>{t("nav.home")}</Link>
        <Link href="/about">{t("nav.about")}</Link>
      </nav>

      <h1>{t("greeting", { name: "John" })}</h1>
      <p>{t(count === 1 ? "messages.one" : "messages.other", { count })}</p>
      <p style={{ color: "#666" }}>Current locale: {locale}</p>
      <p style={{ color: "#666" }}>Available locales: {locales.join(", ")}</p>

      <Link
        href="/"
        locale={otherLocale}
        style={{ display: "inline-block", marginTop: "1rem", padding: "0.5rem 1rem", background: "#000", color: "#fff", textDecoration: "none", borderRadius: "4px" }}
      >
        {t("actions.switch")}
      </Link>
    </div>
  );
}
