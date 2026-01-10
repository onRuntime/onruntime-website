import Link from "next/link";

const posts = [
  {
    slug: "hello-world",
    title: { en: "Hello World", fr: "Bonjour le monde" },
    content: { en: "Welcome to our blog!", fr: "Bienvenue sur notre blog !" },
  },
  {
    slug: "getting-started",
    title: { en: "Getting Started", fr: "Premiers pas" },
    content: { en: "Learn how to use this package.", fr: "Apprenez à utiliser ce package." },
  },
  {
    slug: "advanced-usage",
    title: { en: "Advanced Usage", fr: "Utilisation avancée" },
    content: { en: "Advanced tips and tricks.", fr: "Trucs et astuces avancés." },
  },
];

// This function is automatically called by @onruntime/next-sitemap
// to discover all dynamic routes for the sitemap
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const title = post.title[locale as keyof typeof post.title] || post.title.en;
  const content = post.content[locale as keyof typeof post.content] || post.content.en;

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>{title}</h1>
      <p>{content}</p>
      <Link href={`/${locale}/posts`}>Back to Posts</Link>
    </main>
  );
}
