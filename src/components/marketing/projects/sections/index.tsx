"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import Projects from "@/constants/projects";
import { Tag } from "@/types/project";
import ProjectCard from "@/components/marketing/landing/visitor/projects/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Routes from "@/constants/routes";

export const FeaturedProjects = () => {
  const featuredProjects = Projects.filter(project => 
    project.tags.includes(Tag.FEATURED)
  );

  if (featuredProjects.length === 0) return null;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium text-foreground">Projets à la une</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <div key={project.id} className="flex flex-col h-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
              <Image 
                src={project.showcaseUrl} 
                alt={project.name}
                className="object-cover"
                fill
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag}>
                    {tag === Tag.FEATURED ? "Featured" : 
                     tag === Tag.OPEN_SOURCE ? "Open Source" : 
                     tag === Tag.CUSTOMER ? "Client" : tag}
                  </Badge>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-medium">{project.name}</h3>
            <p className="mt-2 mb-4 text-muted-foreground line-clamp-2">{project.description}</p>
            <div className="mt-auto">
              <Link href={Routes.project(project.id)}>
                <Button variant="outline" className="w-full">
                  Voir le projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const StudioProjects = () => {
  const studioProjects = Projects.filter(project => 
    !project.tags.includes(Tag.FEATURED) && !project.tags.includes(Tag.CUSTOMER)
  );

  if (studioProjects.length === 0) return null;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium text-foreground">Projets studio</h2>
      </div>
      <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
        {studioProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export const CustomerProjects = () => {
  const customerProjects = Projects.filter(project => 
    project.tags.includes(Tag.CUSTOMER)
  );

  const hasCustomerProjects = customerProjects.length > 0;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium text-foreground">Projets clients</h2>
        {!hasCustomerProjects && <Badge variant="secondary">Prochainement</Badge>}
      </div>
      
      {hasCustomerProjects ? (
        <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
          {customerProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center py-12">
          <p className="text-center text-muted-foreground max-w-lg">
            Nos projets clients sont en cours de préparation. 
            Contactez-nous pour en savoir plus sur nos réalisations 
            ou pour discuter de votre projet.
          </p>
        </div>
      )}
    </div>
  );
};