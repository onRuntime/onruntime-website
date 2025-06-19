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
  project 
}: ProjectCardProps) => {
  const ref = React.useRef<HTMLAnchorElement>(null);

  return (
    <Link 
      className="flex flex-col gap-3 h-full group" 
      href={Routes.project(project.id)} 
      ref={ref}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image 
          className="object-cover transition-transform duration-300 group-hover:scale-105" 
          src={project.thumbnailUrl} 
          alt={project.name} 
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute bottom-2 right-2 flex flex-wrap gap-2">
          {project.tags && project.tags.flatMap((tag) => {
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
      <div className="flex flex-col flex-grow">
        <h3 className="text-foreground font-medium">{project.name}</h3>
        <p className="text-sm text-foreground leading-tight line-clamp-2 mt-1">
          {project.shortDescription}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;