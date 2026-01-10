import Link from "next/link";

const posts = [
  { slug: "hello-world", title: "Hello World" },
  { slug: "getting-started", title: "Getting Started" },
  { slug: "advanced-usage", title: "Advanced Usage" },
];

export default function Posts() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
