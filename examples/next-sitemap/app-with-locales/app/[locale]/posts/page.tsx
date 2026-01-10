import Link from "next/link";

const posts = [
  { slug: "hello-world", title: { en: "Hello World", fr: "Bonjour le monde" } },
  { slug: "getting-started", title: { en: "Getting Started", fr: "Premiers pas" } },
  { slug: "advanced-usage", title: { en: "Advanced Usage", fr: "Utilisation avancée" } },
];

export default async function Posts({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const content = {
    en: { title: "Blog Posts" },
    fr: { title: "Articles de blog" },
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>{t.title}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${locale}/posts/${post.slug}`}>
              {post.title[locale as keyof typeof post.title] || post.title.en}
            </Link>
          </li>
        ))}
      </ul>
      <Link href={`/${locale}`}>Home</Link>
    </main>
  );
}
