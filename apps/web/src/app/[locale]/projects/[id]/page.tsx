import { notFound } from "next/navigation";
import Projects from "@/constants/projects";
import ProjectPage from "@/screens/marketing/projects/details";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/utils/metadata";
import { getTranslation } from "@/lib/translations.server";
import { ProjectSchema, ProjectTeamSchema } from "@/components/json-ld/project-schema";
import TeamMembers from "@/constants/team-members";

type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const project = Projects.find((p) => p.id === id);
  const { t } = await getTranslation("app/projects/[id]/page");

  if (!project) {
    return constructMetadata({
      title: t("metadata.not-found.title"),
      description: t("metadata.not-found.description"),
    });
  }

  const { t: tProject } = await getTranslation(`constants/projects/${project.id}`);

  return constructMetadata({
    title: t("metadata.title", { name: project.name }),
    description: t("metadata.description", {
      name: project.name,
      shortDescription: tProject("short-description").slice(0, 100),
    }),
  });
}

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const project = Projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const { t: tProject } = await getTranslation(`constants/projects/${project.id}`);

  const teamData = project.team?.map((member) => {
    const memberData = TeamMembers[member.ref];
    return {
      name: memberData?.name || member.ref,
      role: member.role,
      website: memberData?.website,
      avatar: memberData?.avatar,
      github: memberData?.github,
      linkedin: memberData?.linkedin,
    };
  }) || [];

  return (
    <>
      <ProjectSchema
        id={`https://onruntime.com/projects/${project.id}`}
        name={project.name}
        description={tProject("description")}
      />
      {teamData.length > 0 && <ProjectTeamSchema team={teamData} />}
      <ProjectPage project={project} />
    </>
  );
}

export async function generateStaticParams() {
  return Projects.map((project) => ({
    id: project.id,
  }));
}
