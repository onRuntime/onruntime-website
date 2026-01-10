import Link from "next/link";

export default function About() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>About</h1>
      <p>This is the about page.</p>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
