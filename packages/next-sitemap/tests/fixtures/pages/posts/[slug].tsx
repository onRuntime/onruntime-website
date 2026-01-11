import type { GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "hello-world" } },
      { params: { slug: "getting-started" } },
      { params: { slug: "advanced-usage" } },
    ],
    fallback: false,
  };
};

export default function Post({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>;
}
