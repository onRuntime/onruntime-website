import { notFound } from "next/navigation";
import Projects from "@/constants/projects";
import ProjectPage from "@/screens/marketing/projects";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/utils/metadata";
import { ProjectSchema } from "@/components/json-ld/project-schema";

type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const project = Projects.find((p) => p.id === id);

  if (!project) {
    return constructMetadata({
      title: "Projet non trouvé | onRuntime Studio",
      description: "Ce projet n'existe pas.",
    });
  }

  return constructMetadata({
    title: `Étude de cas : ${project.name} - Projet digital par notre agence`,
    description: `Découvrez comment notre agence a conçu et développé ${
      project.name
    }. ${project.shortDescription.slice(0, 100)}`,
  });
}

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const project = Projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectSchema
        id={`https://onruntime.com/projects/${project.id}`}
        name={project.name}
        description={project.description}
      />
      <ProjectPage project={project} />
    </>
  );
}

export async function generateStaticParams() {
  return Projects.map((project) => ({
    id: project.id,
  }));
}
