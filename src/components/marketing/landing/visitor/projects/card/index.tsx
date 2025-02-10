"use client";

import { Badge } from "@/components/ui/badge";
import Routes from "@/constants/routes";
import { Project, Tag } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
}: ProjectCardProps) => {
  const ref = React.useRef<HTMLAnchorElement>(null);

  return (
    <Link
      className="flex flex-col gap-3 max-w-[415px] sm:max-w-64"
      href={Routes.project(project.id)}
      ref={ref}
    >
      <div className="relative">
        <Image
          className="relative rounded-lg object-cover h-[200px] w-full"
          src={project.showcaseUrl}
          alt={project.name}
          width={260}
          height={200}
        />

        <div className="absolute bottom-2 right-2 flex flex-wrap gap-2">
          {project.tags &&
            project.tags.flatMap((tag) => {
              switch (tag) {
                case Tag.FEATURED:
                  return <Badge key={tag}>Featured</Badge>;
                case Tag.OPEN_SOURCE:
                  return <Badge key={tag}>Open Source</Badge>;
                default:
                  return null;
              }
            })}
        </div>
      </div>

      <h3 className="text-foreground font-bold">{project.name}</h3>

      <p className="leading-tight">
        {project.shortDescription.length > 125
          ? project.shortDescription.slice(0, 125) + "..."
          : project.shortDescription}
      </p>
    </Link>
  );
};

export default ProjectCard;
