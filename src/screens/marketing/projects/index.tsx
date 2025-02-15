import React from 'react';
import { Project, Tag } from "@/types/project";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Safari from "@/components/ui/safari";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Globe, Calendar, Timer, Users } from 'lucide-react';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="relative w-full flex flex-col items-center gap-8">
          <div className="max-w-2xl text-center space-y-6">
            <Image 
              src={project.iconUrl} 
              alt={project.name}
              className="w-16 h-16 rounded-lg mx-auto"
            />
            
            <div className="flex flex-wrap gap-2 justify-center">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag === Tag.FEATURED ? "Projet phare" : "Open Source"}
                </Badge>
              ))}
            </div>

            <h1 className="font-medium text-4xl md:text-5xl text-foreground">
              {project.name}
            </h1>
            
            <p className="text-muted-foreground text-lg">
              {project.description}
            </p>

            <div className="flex gap-3 justify-center">
              {project.website && (
                <Button>
                  Voir le projet
                  <Globe className="ml-2 w-4 h-4" />
                </Button>
              )}

              {project.repository && (
                <Link href={project.repository} target="_blank">
                  <Button variant="outline">
                    <Github className="mr-2 w-4 h-4" />
                    Code source
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "absolute z-[-1] inset-0",
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        {/* Showcase */}
        <div className="w-full">
          <Safari 
            width={1200}
            height={750}
            imageSrc={project.showcaseUrl}
          />
        </div>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 p-6 rounded-lg border bg-card">
            <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date de début</p>
              <p className="font-medium">{new Date(project.startDate).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-6 rounded-lg border bg-card">
            <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
              <Timer className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Statut</p>
              <p className="font-medium capitalize">{project.status}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-6 rounded-lg border bg-card">
            <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Équipe</p>
              <p className="font-medium">{project.team.length} membres</p>
            </div>
          </div>
        </div>

        {/* Description détaillée */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-3xl font-medium text-foreground mb-6">À propos du projet</h2>
          <div className="text-muted-foreground whitespace-pre-line">
            {project.longDescription}
          </div>
        </div>

        {/* Métriques */}
        {project.metrics && (
          <div className="space-y-8">
            <h2 className="text-3xl font-medium text-foreground text-center">Impact et Métriques</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {project.metrics.map((metric, index) => (
                <div key={index} className="text-center space-y-2">
                  <p className="text-4xl font-medium text-foreground">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  {metric.description && (
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fonctionnalités */}
        <div className="space-y-8">
          <h2 className="text-3xl font-medium text-foreground text-center">Fonctionnalités clés</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
                {feature.icon && (
                  <Image src={feature.icon} alt={feature.title} className="w-12 h-12" />
                )}
                <h3 className="text-lg font-medium text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="space-y-8">
          <h2 className="text-3xl font-medium text-foreground text-center">Technologies utilisées</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.technologies.map((tech, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg border bg-card">
                <Image src={tech.icon} alt={tech.name} className="w-12 h-12" />
                <div>
                  <h3 className="text-lg font-medium text-foreground">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots Gallery */}
        <div className="space-y-8">
          <h2 className="text-3xl font-medium text-foreground text-center">Galerie</h2>
          <div className="grid grid-cols-2 gap-8">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="space-y-2">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={screenshot.url}
                    alt={screenshot.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">{screenshot.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-medium text-foreground text-center">L&apos;équipe</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {project.team.map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-4 p-6 rounded-lg border bg-card text-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <div className="flex gap-2">
                  {member.github && (
                    <Link href={member.github} target="_blank">
                      <Button variant="outline" size="icon">
                        <Github className="w-4 h-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Learnings */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-foreground">Défis rencontrés</h2>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue mt-0.5">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <p className="text-muted-foreground">{challenge}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-foreground">Apprentissages clés</h2>
            <ul className="space-y-4">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue mt-0.5">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <p className="text-muted-foreground">{learning}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Future Plans */}
        {project.futurePlans && (
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-foreground">Perspectives futures</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.futurePlans.map((plan, index) => (
                <div key={index} className="p-6 rounded-lg border bg-card">
                  <p className="text-muted-foreground">{plan}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="relative overflow-hidden rounded-lg border bg-card p-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Intéressé par ce projet ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Découvrez comment nous pouvons vous aider à réaliser un projet similaire.
            </p>
            <Link href="/contact">
              <Button>
                Discuter de votre projet
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-onruntime-blue/10 to-transparent" />
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;