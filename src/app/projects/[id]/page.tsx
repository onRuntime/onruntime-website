import { notFound } from "next/navigation";
import Projects from "@/constants/projects";
import ProjectPage from "@/screens/marketing/projects";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = Projects.find(p => p.id === params.id);

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

export default function Page({ params }: ProjectPageProps) {
  const project = Projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}

// Generate static params for all projects
export async function generateStaticParams() {
  return Projects.map((project) => ({
    id: project.id,
  }));
}