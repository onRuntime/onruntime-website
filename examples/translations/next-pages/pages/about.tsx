import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "@onruntime/translations/react";

export default function About() {
  const { t, locale } = useTranslation();

  const otherLocale = locale === "en" ? "fr" : "en";

  return (
    <div style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <nav style={{ marginBottom: "2rem", display: "flex", gap: "1rem" }}>
        <Link href="/">{t("nav.home")}</Link>
        <Link href="/about" style={{ fontWeight: "bold" }}>{t("nav.about")}</Link>
      </nav>

      <h1>{t("about.title")}</h1>
      <p>{t("about.description")}</p>

      <Link
        href="/about"
        locale={otherLocale}
        style={{ display: "inline-block", marginTop: "1rem", padding: "0.5rem 1rem", background: "#000", color: "#fff", textDecoration: "none", borderRadius: "4px" }}
      >
        {t("actions.switch")}
      </Link>
    </div>
  );
}
