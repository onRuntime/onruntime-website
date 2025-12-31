import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Next Sitemap Example</h1>
      <p>This example demonstrates automatic sitemap generation.</p>

      <nav style={{ marginTop: "2rem" }}>
        <h2>Pages</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <nav style={{ marginTop: "2rem" }}>
        <h2>Sitemaps</h2>
        <ul>
          <li>
            <a href="/sitemap.xml">Sitemap Index</a>
          </li>
          <li>
            <a href="/sitemap-0.xml">Sitemap 0</a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
