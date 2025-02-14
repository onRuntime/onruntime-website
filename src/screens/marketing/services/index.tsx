import React from 'react';
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Routes from "@/constants/routes";
import Services from "@/constants/services";
import ProjectTimeline from './timeline';
import { ConsultingSection, ExpertiseSection, ValuePropositionSection } from '@/components/marketing/services/sections';

// Service card component with expandable sub-services
const ServiceCard = ({ 
  name, 
  description, 
  icon: Icon,
  subServices,
  route
}: { 
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  subServices: Array<{
    name: string;
    description: string;
    route: string;
    icon?: React.ComponentType<any>;
  }>;
  route: string;
}) => (
  <div className="flex flex-col gap-6">
    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-onruntime-blue transition-colors">
      <Link href={route} className="absolute inset-0" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-medium text-foreground">{name}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
    
    <div className="grid sm:grid-cols-2 gap-4 pl-4">
      {subServices.map((subService, index) => (
        <Link 
          key={index}
          href={subService.route}
          className="group flex items-start gap-3 p-4 rounded-lg border bg-background hover:border-onruntime-blue transition-colors"
        >
          {subService.icon && (
            <div className="p-2 rounded-md bg-muted text-muted-foreground group-hover:bg-onruntime-blue/10 group-hover:text-onruntime-blue transition-colors">
              <subService.icon className="w-4 h-4" />
            </div>
          )}
          <div className="flex-1">
            <h4 className="text-sm font-medium text-foreground">{subService.name}</h4>
            <p className="text-xs text-muted-foreground mt-1">{subService.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const ServicesPage = () => {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-32">
        {/* Hero Section */}
        <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
          <h1 className="font-medium text-4xl md:text-5xl text-foreground">
            Des solutions sur mesure pour vos projets digitaux
          </h1>
          
          <p className="text-muted-foreground">
            De la conception à la réalisation, nous vous accompagnons à chaque étape de votre projet avec expertise et passion.
          </p>

          <Link href={Routes.contact}>
            <Button size="lg">
              Démarrer un projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "z-[-1]",
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        {/* Proposition de valeur */}
        <ValuePropositionSection />

        {/* Services Grid */}
        <div className="flex flex-col gap-16">
          {Services.map((service) => (
            <ServiceCard 
              key={service.id}
              name={service.name}
              description={service.description}
              icon={service.icon}
              subServices={service.subServices}
              route={Routes.service[service.id].root}
            />
          ))}
        </div>

        {/* Expertise et chiffres clés */}
        <ExpertiseSection />

        {/* Technologies */}
        {/* <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Notre stack technologique
            </h2>
            <p className="text-muted-foreground">
              Nous maîtrisons un large éventail de technologies modernes pour répondre à tous vos besoins.
            </p>
          </div>
          <TechnologiesSection />
        </div> */}

        {/* Notre processus */}
        <div className="bg-card rounded-lg p-8 border">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Notre processus de travail
            </h2>
            <p className="text-muted-foreground">
              Une méthodologie éprouvée et flexible pour mener votre projet vers le succès.
            </p>
          </div>
          
          <ProjectTimeline />
        </div>

        {/* Consulting */}
        <ConsultingSection />
      </div>
    </main>
  );
};

export default ServicesPage;