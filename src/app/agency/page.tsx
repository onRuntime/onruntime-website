import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ArrowRight, MapPin } from "lucide-react";
import Routes from "@/constants/routes";
import { constructMetadata } from '@/lib/utils/metadata';
import FranceMap from '@/components/marketing/agency/france-map';
import { getMajorAgencies } from '@/constants/agencies';
import { OrganizationSchema } from '@/components/json-ld/organization-schema';

export const metadata = constructMetadata({
  title: "Agence web en France | Développement sur mesure dans toutes les grandes villes",
  description: "Présence nationale avec des agences web locales à Paris, Lyon, Marseille et dans toutes les grandes villes de France. Solutions digitales adaptées à chaque région.",
});

export default function AgencyLandingPage() {
  // Get major agencies to feature
  const majorAgencies = getMajorAgencies();
  
  return (
    <main className="min-h-screen pt-32 pb-16">
      <OrganizationSchema 
        type="DigitalAgency"
        id="https://onruntime.com/agency#organization"
      />
      
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="relative flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col items-start gap-6">
            <h1 className="font-medium text-4xl md:text-5xl text-foreground">
              Votre agence web partout en France
            </h1>
            
            <p className="text-muted-foreground text-lg">
              Nous développons des solutions digitales innovantes adaptées aux spécificités de chaque région française. Découvrez notre expertise locale dans les plus grandes villes de France.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href={Routes.contact}>
                <Button size="lg">
                  Discuter de votre projet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link href="#agences">
                <Button variant="outline" size="lg">
                  Découvrir nos agences
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

        {/* National Presence Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Un réseau national, une expertise locale
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              onRuntime Studio combine la force d&apos;une présence nationale avec une connaissance approfondie des écosystèmes numériques locaux. Notre approche vous garantit des solutions parfaitement adaptées aux spécificités de votre région.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Connaissance locale</h3>
              <p className="text-muted-foreground">
                Notre équipe comprend les spécificités et les besoins particuliers de chaque écosystème numérique régional.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Réseau de talents</h3>
              <p className="text-muted-foreground">
                Des équipes locales qui connaissent parfaitement les enjeux économiques et culturels de votre région.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Méthodes éprouvées</h3>
              <p className="text-muted-foreground">
                Une approche standardisée et des processus rigoureux garantissant qualité et cohérence partout en France.
              </p>
            </div>
          </div>
        </div>

        {/* Cities Grid Section */}
        <div id="agences" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Nos agences en France
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos agences locales et les spécificités de chaque écosystème numérique régional.
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
                  Population: {agency.population.toLocaleString()}
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
                  <span>Découvrir</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Pourquoi choisir une agence locale ?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Travailler avec notre agence dans votre ville présente de nombreux avantages pour votre entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-medium text-foreground">Proximité et réactivité</h3>
              <p className="text-muted-foreground">
                Une équipe locale qui comprend votre marché, vos enjeux et qui peut intervenir rapidement pour des réunions en personne lorsque nécessaire.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-medium text-foreground">Connaissance de l&apos;écosystème</h3>
              <p className="text-muted-foreground">
                Une compréhension approfondie des acteurs locaux, des tendances régionales et des opportunités spécifiques à votre marché.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-medium text-foreground">Réseau local</h3>
              <p className="text-muted-foreground">
                Accès à un réseau de talents, partenaires et clients potentiels dans votre région, facilitant les collaborations et opportunités d&apos;affaires.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-medium text-foreground">Solutions adaptées</h3>
              <p className="text-muted-foreground">
                Des services et solutions spécifiquement conçus pour répondre aux défis et opportunités propres à votre région.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section (Brief) */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Nos services partout en France
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Des solutions digitales complètes disponibles dans toutes nos agences locales.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href={Routes.service.design.root}>
              <div className="flex flex-col items-center p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors text-center">
                <h3 className="text-lg font-medium text-foreground mb-1">Design UI/UX</h3>
                <p className="text-xs text-muted-foreground">
                  Interfaces modernes et ergonomiques
                </p>
              </div>
            </Link>
            
            <Link href={Routes.service.integration.root}>
              <div className="flex flex-col items-center p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors text-center">
                <h3 className="text-lg font-medium text-foreground mb-1">Intégration</h3>
                <p className="text-xs text-muted-foreground">
                  Solutions CMS et e-commerce
                </p>
              </div>
            </Link>
            
            <Link href={Routes.service.frontend.root}>
              <div className="flex flex-col items-center p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors text-center">
                <h3 className="text-lg font-medium text-foreground mb-1">Front-end</h3>
                <p className="text-xs text-muted-foreground">
                  Applications web & mobile
                </p>
              </div>
            </Link>
            
            <Link href={Routes.service.backend.root}>
              <div className="flex flex-col items-center p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors text-center">
                <h3 className="text-lg font-medium text-foreground mb-1">Back-end</h3>
                <p className="text-xs text-muted-foreground">
                  APIs et infrastructure cloud
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

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-lg border bg-card p-12">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-onruntime-blue/10 to-transparent" />
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Prêt à collaborer avec notre agence locale ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-nous dès aujourd&apos;hui pour discuter de votre projet avec notre équipe la plus proche de chez vous.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={Routes.contact}>
                <Button size="lg">
                  Nous contacter
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#agences">
                <Button variant="outline" size="lg">
                  Trouver une agence
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}