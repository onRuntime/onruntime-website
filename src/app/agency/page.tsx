import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ArrowRight, Globe, Laptop, Users } from "lucide-react";
import Routes from "@/constants/routes";
import { constructMetadata } from '@/lib/utils/metadata';
import FranceMap from '@/components/marketing/agency/france-map';
import { getMajorAgencies } from '@/constants/agencies';
import { OrganizationSchema } from '@/components/json-ld/organization-schema';

export const metadata = constructMetadata({
  title: "Expertise web locale | Développement digital dans les grandes villes françaises",
  description: "Nous accompagnons les entreprises locales partout en France avec notre expertise des marchés numériques régionaux. Solutions digitales adaptées à chaque région.",
});

export default function AgencyLandingPage() {
  
  const majorAgencies = getMajorAgencies(10);
  
  return (
    <main className="min-h-screen pt-32 pb-16 w-full">
      <OrganizationSchema 
        type="DigitalAgency"
        id="https://onruntime.com/agency#organization"
      />
      
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-24">
        
        <div className="relative flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col items-start gap-6">
            <h1 className="font-medium text-4xl md:text-5xl text-foreground">
              Votre partenaire digital partout en France
            </h1>
            
            <p className="text-muted-foreground text-lg">
              Nous développons des solutions digitales innovantes adaptées aux spécificités de chaque marché régional français. Notre équipe maîtrise les enjeux numériques locaux pour vous accompagner efficacement, où que vous soyez en France.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href={Routes.contact}>
                <Button size="lg">
                  Discuter de votre projet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link href="#expertise-locale">
                <Button variant="outline" size="lg">
                  Découvrir notre expertise locale
                </Button>
              </Link>
            </div>

            <DotPattern
              width={30}
              height={30}
              className={cn(
                "absolute z-[-1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
              )}
            />
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-md">
              <FranceMap cities={majorAgencies.map(agency => agency.id)} />
            </div>
          </div>
        </div>

        <div id="expertise-locale" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Une expertise adaptée à chaque territoire
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Notre équipe analyse et comprend les écosystèmes numériques locaux pour vous proposer des solutions parfaitement adaptées aux spécificités économiques et culturelles de votre région.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Compréhension des marchés locaux</h3>
              <p className="text-muted-foreground">
                Nous étudions et maîtrisons les spécificités et les tendances des écosystèmes numériques régionaux.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Travail à distance efficace</h3>
              <p className="text-muted-foreground">
                Notre équipe collabore à distance avec votre entreprise, où que vous soyez en France, avec la même efficacité qu&apos;en présentiel.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Solutions personnalisées</h3>
              <p className="text-muted-foreground">
                Des stratégies digitales sur mesure qui s&apos;adaptent à votre contexte local et aux particularités de votre marché régional.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Notre expertise dans les grandes villes françaises
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre connaissance approfondie des marchés locaux et comment elle peut bénéficier à votre entreprise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {majorAgencies.map((agency) => (
              <Link 
                key={agency.id} 
                href={Routes.agency.city(agency.id)}
                className="flex flex-col p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors group"
              >
                <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-onruntime-blue transition-colors">
                  {agency.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Région: {agency.region}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {agency.strengths.slice(0, 3).map((strength, index) => (
                    <span 
                      key={index} 
                      className="inline-block text-xs px-2 py-1 rounded-full bg-muted"
                    >
                      {strength.title}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-xs text-muted-foreground flex items-center group-hover:text-onruntime-blue transition-colors">
                  <span>Découvrir notre expertise</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Pourquoi travailler avec nous pour votre projet local ?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Notre connaissance des marchés régionaux présente de nombreux avantages pour votre entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-medium text-foreground">Expertise des écosystèmes locaux</h3>
              <p className="text-muted-foreground">
                Une équipe qui comprend les dynamiques de marché propres à votre région, permettant une stratégie digitale parfaitement adaptée.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-medium text-foreground">Agilité à distance</h3>
              <p className="text-muted-foreground">
                Collaboration efficace par visioconférence, messagerie et outils collaboratifs pour une expérience de travail fluide et productive.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-medium text-foreground">Stratégies localisées</h3>
              <p className="text-muted-foreground">
                Des solutions digitales qui tiennent compte des spécificités culturelles et économiques de votre territoire.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-medium text-foreground">Analyse de marché régional</h3>
              <p className="text-muted-foreground">
                Étude des tendances, de la concurrence et des opportunités propres à votre secteur géographique pour une stratégie digitale optimale.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Nos services pour toutes les régions de France
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Des solutions digitales complètes adaptées aux spécificités de chaque marché local.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href={Routes.service.design.root}>
              <div className="flex flex-col items-center p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors text-center">
                <h3 className="text-lg font-medium text-foreground mb-1">Design UI/UX</h3>
                <p className="text-xs text-muted-foreground">
                  Interfaces adaptées aux usages locaux
                </p>
              </div>
            </Link>
            
            <Link href={Routes.service.integration.root}>
              <div className="flex flex-col items-center p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors text-center">
                <h3 className="text-lg font-medium text-foreground mb-1">Intégration</h3>
                <p className="text-xs text-muted-foreground">
                  Solutions CMS et e-commerce régionales
                </p>
              </div>
            </Link>
            
            <Link href={Routes.service.frontend.root}>
              <div className="flex flex-col items-center p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors text-center">
                <h3 className="text-lg font-medium text-foreground mb-1">Front-end</h3>
                <p className="text-xs text-muted-foreground">
                  Applications adaptées à vos utilisateurs
                </p>
              </div>
            </Link>
            
            <Link href={Routes.service.backend.root}>
              <div className="flex flex-col items-center p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors text-center">
                <h3 className="text-lg font-medium text-foreground mb-1">Back-end</h3>
                <p className="text-xs text-muted-foreground">
                  Infrastructures robustes et évolutives
                </p>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link href={Routes.services}>
              <Button>
                Découvrir tous nos services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-card p-12">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-onruntime-blue/10 to-transparent" />
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Un projet digital adapté à votre marché local ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-nous pour discuter de votre projet. Notre expertise des marchés locaux nous permet de vous accompagner efficacement, où que vous soyez en France.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={Routes.contact}>
                <Button size="lg">
                  Nous contacter
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#expertise-locale">
                <Button variant="outline" size="lg">
                  En savoir plus sur notre approche
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}