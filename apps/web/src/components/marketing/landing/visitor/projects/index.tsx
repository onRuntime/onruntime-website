"use client";
import { Button } from "@/components/ui/button";
import { default as ProjectsConst } from "@/constants/projects";
import React from "react";
import ProjectCard from "./card";
import { Link } from "@onruntime/translations/next";
import Routes from "@/constants/routes";

const Projects: React.FC = () => {
  return (
    <section className="px-4 md:px-0 py-24 flex flex-col gap-9 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-muted-foreground">Nos derniers projets</h2>
        <Link href={Routes.projects}>
          <Button variant={"outline"}>Voir tous les projets</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
        {ProjectsConst.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
