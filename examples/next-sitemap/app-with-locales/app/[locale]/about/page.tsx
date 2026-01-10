import Link from "next/link";

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const content = {
    en: { title: "About Us", description: "This is an example Next.js app with i18n support." },
    fr: { title: "À propos", description: "Ceci est un exemple d'application Next.js avec support i18n." },
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      <Link href={`/${locale}`}>Home</Link>
    </main>
  );
}
