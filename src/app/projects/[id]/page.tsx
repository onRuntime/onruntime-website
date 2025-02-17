import { notFound } from "next/navigation";
import Projects from "@/constants/projects";
import ProjectPage from "@/screens/marketing/projects";
import type { Metadata } from "next";

type Params = Promise<{ id: string }>;

export async function generateMetadata({ 
  params 
}: { 
  params: Params 
}): Promise<Metadata> {
  const { id } = await params;
  const project = Projects.find(p => p.id === id);

  if (!project) {
    return {
      title: "Projet non trouvé | onRuntime Studio",
      description: "Ce projet n'existe pas."
    };
  }

  return {
    title: `${project.name} | onRuntime Studio`,
    description: project.description,
  };
}

export default async function Page({ 
  params 
}: { 
  params: Params 
}) {
  const { id } = await params;
  const project = Projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}

export async function generateStaticParams() {
  return Projects.map((project) => ({
    id: project.id,
  }));
}