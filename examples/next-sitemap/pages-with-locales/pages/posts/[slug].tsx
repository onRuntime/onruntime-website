import Link from "next/link";
import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps } from "next";

const posts = [
  {
    slug: "hello-world",
    title: { en: "Hello World", fr: "Bonjour le monde" },
    content: { en: "Welcome to our blog!", fr: "Bienvenue sur notre blog !" },
  },
  {
    slug: "getting-started",
    title: { en: "Getting Started", fr: "Premiers pas" },
    content: { en: "Learn how to use this package.", fr: "Apprenez \u00E0 utiliser ce package." },
  },
  {
    slug: "advanced-usage",
    title: { en: "Advanced Usage", fr: "Utilisation avanc\u00E9e" },
    content: { en: "Advanced tips and tricks.", fr: "Trucs et astuces avanc\u00E9s." },
  },
];

interface PostProps {
  post: (typeof posts)[0];
}

// This function is automatically called by @onruntime/next-sitemap
// to discover all dynamic routes for the sitemap
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const post = posts.find((p) => p.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

export default function Post({ post }: PostProps) {
  const { locale = "en" } = useRouter();
  const title = post.title[locale as keyof typeof post.title] || post.title.en;
  const content = post.content[locale as keyof typeof post.content] || post.content.en;

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>{title}</h1>
      <p>{content}</p>
      <Link href="/posts">Back to Posts</Link>
    </main>
  );
}
