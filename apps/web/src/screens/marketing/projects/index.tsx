import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ArrowRight, BriefcaseBusiness, CheckCircle, Code, Gem, Globe, Palette, Rocket, Star, Users } from "lucide-react";
import Routes from "@/constants/routes";
import { FeaturedProjects, StudioProjects, CustomerProjects } from '@/components/marketing/projects/sections';

const ProjectsPage = () => {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-24">
        <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
          <h1 className="font-medium text-4xl md:text-5xl text-foreground">
            Nos projets et réalisations
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Découvrez notre portfolio de projets en développement web, mobile et design UI/UX. 
            Des solutions innovantes et des interfaces modernes réalisées par notre équipe d&apos;experts.
          </p>

          <p className="text-muted-foreground">
            De la conception à la réalisation, chaque projet témoigne de notre expertise 
            et de notre engagement à créer des expériences numériques exceptionnelles.
          </p>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "z-[-1]",
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Notre expertise en développement de projets
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Chez onRuntime Studio, nous combinons créativité, expertise technique et méthodologie éprouvée 
              pour transformer vos idées en solutions digitales performantes et innovantes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Développement sur mesure</h3>
              <p className="text-muted-foreground">
                Des solutions codées avec soin, utilisant les technologies les plus adaptées 
                à votre projet et à vos objectifs spécifiques.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Design UI/UX exceptionnel</h3>
              <p className="text-muted-foreground">
                Des interfaces élégantes et intuitives qui engagent vos utilisateurs 
                et véhiculent efficacement l&apos;identité de votre marque.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Performance optimale</h3>
              <p className="text-muted-foreground">
                Des applications rapides, réactives et optimisées pour offrir 
                une expérience utilisateur fluide et agréable.
              </p>
            </div>
          </div>
        </div>

        <FeaturedProjects />

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Notre processus de Réalisation
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Une méthodologie éprouvée qui garantit la qualité et le succès de chaque projet,
              de la conception initiale au déploiement final.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-onruntime-blue/10 text-onruntime-blue mb-4">
                1
              </div>
              <h3 className="font-medium text-foreground mb-2">Découverte</h3>
              <p className="text-sm text-muted-foreground">
                Analyse approfondie de vos besoins, objectifs et des spécificités de votre secteur.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-onruntime-blue/10 text-onruntime-blue mb-4">
                2
              </div>
              <h3 className="font-medium text-foreground mb-2">Conception</h3>
              <p className="text-sm text-muted-foreground">
                Création de maquettes et prototypes pour visualiser et valider l&apos;expérience utilisateur.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-onruntime-blue/10 text-onruntime-blue mb-4">
                3
              </div>
              <h3 className="font-medium text-foreground mb-2">Développement</h3>
              <p className="text-sm text-muted-foreground">
                Codage soigné avec des technologies modernes et des tests rigoureux pour garantir la qualité.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-onruntime-blue/10 text-onruntime-blue mb-4">
                4
              </div>
              <h3 className="font-medium text-foreground mb-2">Déploiement</h3>
              <p className="text-sm text-muted-foreground">
                Mise en production avec suivi et support continu pour assurer la réussite de votre projet.
              </p>
            </div>
          </div>
        </div>

        <StudioProjects />

        <div className="bg-card border rounded-lg p-12 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-medium text-foreground mb-4">Ce que nos clients disent de nous</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La satisfaction de nos clients est notre priorité absolue. Voici quelques témoignages 
              de partenaires avec qui nous avons eu le plaisir de collaborer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg bg-background">
              <p className="italic text-muted-foreground mb-4">
                &quot;L&apos;équipe d&apos;onRuntime Studio a transformé notre vision en une solution digitale 
                exceptionnelle qui a dépassé toutes nos attentes. Leur expertise technique et leur 
                créativité ont fait toute la différence.&quot;
              </p>
              <div className="font-medium">Thomas M. - Directeur Marketing</div>
            </div>

            <div className="p-6 border rounded-lg bg-background">
              <p className="italic text-muted-foreground mb-4">
                &quot;Un partenaire fiable et innovant qui comprend réellement nos besoins. 
                Leur approche méthodique et leur communication transparente ont rendu le 
                processus de développement agréable et sans stress.&quot;
              </p>
              <div className="font-medium">Sophie D. - Fondatrice Startup</div>
            </div>
          </div>
        </div>

        <CustomerProjects />

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Industries que nous servons
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre expertise s&apos;étend à de nombreux secteurs, avec des solutions adaptées 
              aux spécificités de chaque industrie.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 text-center">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mx-auto mb-3 w-fit">
                <BriefcaseBusiness className="w-5 h-5" />
              </div>
              <h3 className="font-medium">E-commerce</h3>
            </div>
            <div className="p-4 text-center">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mx-auto mb-3 w-fit">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-medium">Startups</h3>
            </div>
            <div className="p-4 text-center">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mx-auto mb-3 w-fit">
                <Gem className="w-5 h-5" />
              </div>
              <h3 className="font-medium">Luxe</h3>
            </div>
            <div className="p-4 text-center">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mx-auto mb-3 w-fit">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-medium">Institutions</h3>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Pourquoi choisir onRuntime Studio ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous nous distinguons par notre approche centrée sur le client et notre engagement envers l&apos;excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 p-4">
              <CheckCircle className="w-5 h-5 text-onruntime-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Expertise technique</h3>
                <p className="text-sm text-muted-foreground">
                  Une équipe de développeurs et designers expérimentés maîtrisant les dernières technologies.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4">
              <CheckCircle className="w-5 h-5 text-onruntime-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Solutions sur mesure</h3>
                <p className="text-sm text-muted-foreground">
                  Des développements personnalisés qui répondent précisément à vos besoins spécifiques.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4">
              <CheckCircle className="w-5 h-5 text-onruntime-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Support continu</h3>
                <p className="text-sm text-muted-foreground">
                  Un accompagnement de qualité tout au long du projet et après le lancement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-card p-12">
          <Star className="absolute right-8 top-8 text-onruntime-blue/20 w-24 h-24 rotate-12" />
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Prêt à donner vie à votre projet ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-nous dès aujourd&apos;hui pour discuter de votre idée et découvrir comment 
              notre expertise peut vous aider à la transformer en réalité.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={Routes.contact}>
                <Button size="lg">
                  Démarrer un projet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href={Routes.services}>
                <Button variant="outline" size="lg">
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;