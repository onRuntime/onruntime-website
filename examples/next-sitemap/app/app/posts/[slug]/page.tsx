import Link from "next/link";

const posts = [
  { slug: "hello-world", title: "Hello World", content: "Welcome to our blog!" },
  { slug: "getting-started", title: "Getting Started", content: "Learn how to use this package." },
  { slug: "advanced-usage", title: "Advanced Usage", content: "Advanced tips and tricks." },
];

// This function is automatically called by @onruntime/next-sitemap
// to discover all dynamic routes for the sitemap
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href="/posts">Back to Posts</Link>
    </main>
  );
}
