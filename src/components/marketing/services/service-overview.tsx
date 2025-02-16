import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import { ArrowRight, LucideIcon, Timer, Users, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Service } from '@/types/service';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import DotPattern from '@/components/ui/dot-pattern';
import ProcessTimeline from './process-timeline';

interface ProcessStep {
  title: string;
  description: string;
  services?: string[];
}

interface ServiceOverviewPageProps {
  service: Service;
  heroImage: string;
  showCaseImage: string;
  benefits: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  processList: ProcessStep[];
}

const ServiceOverviewPage: React.FC<ServiceOverviewPageProps> = ({
  service,
  heroImage,
  showCaseImage,
  benefits,
  processList
}) => {
  return (
    <ServiceLayout
      title={`${service.name} | onRuntime Studio`}
      description={service.description}
      heroTitle={service.name}
      heroDescription={service.description}
      heroImage={heroImage}
    >
      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-medium text-foreground">
            Une expertise pointue en {service.name.charAt(0).toLowerCase() + service.name.slice(1)}
          </h2>
          <p className="text-muted-foreground">
            Nous combinons créativité et expertise technique pour offrir des solutions {service.name.charAt(0).toLowerCase() + service.name.slice(1)} qui répondent parfaitement à vos objectifs. Notre approche méthodique et notre expérience nous permettent de créer des solutions durables et évolutives.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-onruntime-blue" />
              <span className="text-sm">Livraison rapide</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-onruntime-blue" />
              <span className="text-sm">Équipe dédiée</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-onruntime-blue" />
              <span className="text-sm">Solutions performantes</span>
            </div>
          </div>
        </div>
        <div className="flex-1 relative w-full aspect-video rounded-lg overflow-hidden">
          <Image 
            src={showCaseImage}
            alt={service.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Nos Services Section */}
      <div className="relative">
        <div className="text-center mb-12">
          <Badge className="mb-4">Nos services</Badge>
          <h2 className="text-3xl font-medium text-foreground mb-4">
            Solutions {service.name.charAt(0).toLowerCase() + service.name.slice(1)} sur mesure
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de services {service.name.charAt(0).toLowerCase() + service.name.slice(1)}, conçue pour répondre à tous vos besoins et vous accompagner dans la réalisation de vos projets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {service.subServices.map((subService) => (
            <Link 
              key={subService.id}
              href={subService.route}
              className="group"
            >
              <div className="h-full flex flex-col gap-6 p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors">
                <div className="flex items-center gap-4">
                  {subService.icon && (
                    <div className="p-3 rounded-md bg-muted text-muted-foreground group-hover:bg-onruntime-blue/10 group-hover:text-onruntime-blue transition-colors">
                      <subService.icon className="w-6 h-6" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">{subService.name}</h3>
                    <p className="text-sm text-muted-foreground">{subService.description}</p>
                  </div>
                </div>
                <div className="mt-auto pt-4 flex justify-between items-center border-t">
                  <span className="text-sm text-muted-foreground">En savoir plus</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-onruntime-blue transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <DotPattern
          width={30}
          height={30}
          className={cn(
            "absolute inset-0 -z-10",
            "[mask-image:radial-gradient(white,transparent)]"
          )}
        />
      </div>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="mb-4">Avantages</Badge>
          <h2 className="text-3xl font-medium text-foreground mb-6">
            Pourquoi choisir nos services {service.name.charAt(0).toLowerCase() + service.name.slice(1)} ?
          </h2>
          <div className="space-y-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue h-fit">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image 
            src="/static/images/services/frontend/frontend-avantages.jpg"
            alt="Avantages"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Process Section */}
      <div>
        <div className="text-center mb-12">
          <Badge className="mb-4">Notre processus</Badge>
          <h2 className="text-3xl font-medium text-foreground mb-4">
            Comment nous travaillons
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une approche intégrée qui combine nos différentes expertises pour un résultat optimal.
          </p>
        </div>

        <ProcessTimeline steps={processList} />
      </div>
    </ServiceLayout>
  );
};

export default ServiceOverviewPage;