import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const content = {
    en: { title: "Home", nav: "Navigation" },
    fr: { title: "Accueil", nav: "Navigation" },
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>{t.title}</h1>
      <nav>
        <h2>{t.nav}</h2>
        <ul>
          <li>
            <Link href={`/${locale}/about`}>About</Link>
          </li>
          <li>
            <Link href={`/${locale}/posts`}>Posts</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
