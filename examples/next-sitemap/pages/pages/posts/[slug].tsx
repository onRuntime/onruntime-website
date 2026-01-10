import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";

const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    content: "Welcome to our blog!",
  },
  {
    slug: "getting-started",
    title: "Getting Started",
    content: "Learn how to use this package.",
  },
  {
    slug: "advanced-usage",
    title: "Advanced Usage",
    content: "Advanced tips and tricks.",
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
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href="/posts">Back to Posts</Link>
    </main>
  );
}
