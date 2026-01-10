import Link from "next/link";
import { useRouter } from "next/router";

const content = {
  en: { title: "Home", nav: "Navigation" },
  fr: { title: "Accueil", nav: "Navigation" },
};

export default function Home() {
  const { locale = "en" } = useRouter();
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>{t.title}</h1>
      <nav>
        <h2>{t.nav}</h2>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
        <h3>Switch locale:</h3>
        <ul>
          <li>
            <Link href="/" locale="en">English</Link>
          </li>
          <li>
            <Link href="/" locale="fr">Fran\u00E7ais</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
