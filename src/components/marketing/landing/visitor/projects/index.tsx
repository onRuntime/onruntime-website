import { Button } from "@/components/ui/button";
import { default as ProjectsConst } from "@/constants/projects";
import React from "react";
import ProjectCard from "./card";

const Projects: React.FC = () => {
  return (
    <section className="px-4 md:px-0 py-24 flex flex-col gap-9 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-muted-foreground">Nos derniers projets</h2>

        <Button variant={"outline"}>Voir tous les projets</Button>
      </div>

      <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
        {ProjectsConst.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
