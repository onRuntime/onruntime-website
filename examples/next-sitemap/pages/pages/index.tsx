import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Next.js Sitemap Example (Pages Router)</h1>
      <p>
        This example demonstrates how to use @onruntime/next-sitemap with the
        Pages Router.
      </p>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/sitemap.xml">Sitemap Index</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
