import React from 'react';
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "@onruntime/translations/next";
import Routes from "@/constants/routes";
import { ServiceBenefit, ServiceCategoryData, ServiceProcessStep } from '@/types/service';
import { Badge } from '@/components/ui/badge';
import ProcessTimeline from './process-timeline';

interface ServiceOverviewPageProps {
  service: ServiceCategoryData;
  benefits: ServiceBenefit[];
  processList: ServiceProcessStep[];
  accentColor?: string;
}

const ServiceOverviewPage: React.FC<ServiceOverviewPageProps> = ({
  service,
  benefits,
  processList,
  accentColor = "onruntime-blue",
}) => {
  return (
    <main className="min-h-screen pt-32 pb-16 w-full">
      <div className="px-4 md:px-0 max-w-5xl mx-auto">
        
        <div className="relative overflow-hidden rounded-xl border border-border bg-card mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="p-8 md:p-12 flex flex-col items-start gap-6 relative z-10">
              <h1 className="font-medium text-4xl md:text-5xl text-foreground">
                {service.name}
              </h1>
              
              <p className="text-muted-foreground text-lg">
                {service.description}
              </p>

              <Link href={Routes.contact}>
                <Button size="lg">
                  Discuter de votre projet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative hidden md:flex items-center justify-center p-8 overflow-hidden">
              <div className="relative z-10 w-full max-w-xs aspect-square">
                <div className={`absolute inset-0 rounded-full bg-${accentColor}/5 backdrop-blur-sm border border-${accentColor}/10 flex items-center justify-center`}>
                  {React.createElement(
                    service.icon, 
                    { className: `w-24 h-24 text-${accentColor} opacity-30` }
                  )}
                </div>
                
                {service.subServices.slice(0, 4).map((subService, index) => {
                  const angle = (index * (360 / Math.min(service.subServices.length, 4))) * (Math.PI / 180);
                  const radius = 130;
                  const leftPos = 50 + Math.cos(angle) * radius;
                  const topPos = 50 + Math.sin(angle) * radius;
                  
                  return (
                    <div 
                      key={subService.id}
                      className="absolute bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-border shadow-sm transform hover:scale-105 transition-transform"
                      style={{ 
                        left: `calc(${leftPos}% - 60px)`, 
                        top: `calc(${topPos}% - 30px)`,
                        maxWidth: '120px'
                      }}
                    >
                      {subService.icon && React.createElement(
                        subService.icon, 
                        { className: `w-5 h-5 text-${accentColor} mb-2` }
                      )}
                      <p className="text-xs font-medium truncate">{subService.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={`absolute inset-0 z-0 opacity-10 overflow-hidden`}>
            <div className={`absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-${accentColor} blur-3xl`}></div>
            <div className={`absolute -left-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-${accentColor} blur-3xl`}></div>
          </div>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "absolute inset-0 z-0",
              "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-medium text-foreground">
              Une expertise pointue en {service.name.charAt(0).toLowerCase() + service.name.slice(1)}
            </h2>
            <p className="text-muted-foreground">
              Nous combinons créativité et expertise technique pour offrir des solutions {service.name.charAt(0).toLowerCase() + service.name.slice(1)} qui répondent parfaitement à vos objectifs. Notre approche méthodique et notre expérience nous permettent de créer des solutions durables et évolutives.
            </p>
            <div className="flex flex-wrap gap-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  {React.createElement(
                    benefit.icon, 
                    { className: `w-5 h-5 text-${accentColor}` }
                  )}
                  <span className="text-sm">{benefit.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative w-full aspect-video rounded-xl border border-border bg-card overflow-hidden">
            <div className={`absolute inset-0 z-0 opacity-20 overflow-hidden`}>
              <div className={`absolute -right-20 -top-20 w-[300px] h-[300px] rounded-full bg-${accentColor} blur-3xl`}></div>
              <div className={`absolute -left-20 -bottom-20 w-[250px] h-[250px] rounded-full bg-${accentColor} blur-3xl`}></div>
            </div>
            
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              {React.createElement(
                service.icon, 
                { className: `w-32 h-32 text-${accentColor} opacity-10` }
              )}
            </div>
          </div>
        </div>

        <div className="relative mb-24">
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
                      <div className={`p-3 rounded-md bg-${accentColor}/10 text-${accentColor} group-hover:bg-${accentColor}/20 transition-colors`}>
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
                    <ArrowRight className={`w-4 h-4 text-muted-foreground group-hover:text-${accentColor} transition-colors`} />
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <Badge className="mb-4">Avantages</Badge>
            <h2 className="text-3xl font-medium text-foreground mb-6">
              Pourquoi choisir nos services {service.name.charAt(0).toLowerCase() + service.name.slice(1)} ?
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`p-2 rounded-md bg-${accentColor}/10 text-${accentColor} h-fit`}>
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
          
          <div className="relative aspect-square rounded-xl border border-border bg-card overflow-hidden">
            <div className={`absolute inset-0 z-0 opacity-20 overflow-hidden`}>
              <div className={`absolute -left-20 -top-20 w-[300px] h-[300px] rounded-full bg-${accentColor} blur-3xl`}></div>
              <div className={`absolute -right-20 -bottom-20 w-[250px] h-[250px] rounded-full bg-${accentColor} blur-3xl`}></div>
            </div>
            
            <div className="absolute inset-0 z-10 grid grid-cols-2 grid-rows-2 p-12">
              {benefits.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-center justify-center">
                  {React.createElement(
                    benefit.icon, 
                    { className: `w-20 h-20 text-${accentColor} opacity-10` }
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {processList && processList.length > 0 && (
          <div className="mb-24">
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
        )}

        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-12">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-medium text-foreground mb-6">
              Prêt à concrétiser votre projet ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <Link href={Routes.contact}>
              <Button size="lg">
                Commencer maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className={`absolute inset-0 z-0 opacity-10 overflow-hidden`}>
            <div className={`absolute right-0 top-0 w-full h-full bg-gradient-to-bl from-${accentColor} to-transparent`}></div>
          </div>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "absolute inset-0 z-0",
              "[mask-image:radial-gradient(ellipse_at_bottom_right,black_30%,transparent_70%)]"
            )}
          />
        </div>
      </div>
    </main>
  );
};

export default ServiceOverviewPage;