import Link from "next/link";

export default function About() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>About</h1>
      <p>This is a static page that will be included in the sitemap.</p>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
