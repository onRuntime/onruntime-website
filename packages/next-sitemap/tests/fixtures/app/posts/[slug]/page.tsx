export async function generateStaticParams() {
  return [
    { slug: "hello-world" },
    { slug: "getting-started" },
    { slug: "advanced-usage" },
  ];
}

export default function Post({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>;
}
