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
          <div key={project.id} className="flex flex-col h-full group">
            <Link href={Routes.project(project.id)} className="block">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
                <Image 
                  src={project.showcaseUrl} 
                  alt={project.name}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
            </Link>
            <h3 className="text-xl font-medium">{project.name}</h3>
            <p className="mt-2 mb-4 text-foreground line-clamp-3">{project.description}</p>
            <div className="mt-auto">
              <Link href={Routes.project(project.id)}>
                <Button variant="outline" className="w-full group-hover:border-onruntime-blue transition-colors">
                  Voir le projet
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:text-onruntime-blue transition-colors" />
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {customerProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center py-12">
          <div className="text-center max-w-lg">
            <p className="text-muted-foreground mb-6">
              Nos projets clients sont en cours de préparation. 
              Contactez-nous pour en savoir plus sur nos réalisations 
              ou pour discuter de votre projet.
            </p>
            <Link href={Routes.contact}>
              <Button variant="outline">
                Discuter de votre projet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};