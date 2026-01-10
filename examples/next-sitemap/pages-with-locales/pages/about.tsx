import Link from "next/link";
import { useRouter } from "next/router";

const content = {
  en: { title: "About Us", description: "This is an example Next.js app with i18n support." },
  fr: { title: "\u00C0 propos", description: "Ceci est un exemple d'application Next.js avec support i18n." },
};

export default function About() {
  const { locale = "en" } = useRouter();
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      <Link href="/">Home</Link>
    </main>
  );
}
