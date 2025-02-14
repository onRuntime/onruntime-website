import React from 'react';
import { Button } from "@/components/ui/button";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Link from "next/link";
import { ArrowRight, GitPullRequestArrow, Timer, Users } from "lucide-react";

export const ValuePropositionSection = () => (
  <div className="grid md:grid-cols-3 gap-8">
    <div className="flex flex-col items-center text-center gap-4 p-6">
      <div className="p-3 rounded-lg bg-onruntime-blue/10 text-onruntime-blue">
        <GitPullRequestArrow className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-medium text-foreground">Approche Flexible</h3>
      <p className="text-muted-foreground">
        Notre méthodologie s&apos;adapte à vos besoins spécifiques, garantissant une collaboration fluide et efficace.
      </p>
    </div>

    <div className="flex flex-col items-center text-center gap-4 p-6">
      <div className="p-3 rounded-lg bg-onruntime-blue/10 text-onruntime-blue">
        <Timer className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-medium text-foreground">Time-to-Market Optimisé</h3>
      <p className="text-muted-foreground">
        Des solutions rapides et efficaces pour lancer votre projet dans les meilleurs délais.
      </p>
    </div>

    <div className="flex flex-col items-center text-center gap-4 p-6">
      <div className="p-3 rounded-lg bg-onruntime-blue/10 text-onruntime-blue">
        <Users className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-medium text-foreground">Équipe Dédiée</h3>
      <p className="text-muted-foreground">
        Des experts passionnés qui s&apos;investissent pleinement dans la réussite de votre projet.
      </p>
    </div>
  </div>
);

export const TechnologiesSection = () => (
  <div className="relative py-10 md:py-20 overflow-hidden">
    <div className="max-w-full overflow-hidden">
      <VelocityScroll defaultVelocity={2} numRows={2} className="flex flex-wrap text-sm md:text-base">
        <span className="whitespace-nowrap px-4">
          React · Next.js · TypeScript · Node.js · Vue.js · Python · Django · PHP · Laravel · WordPress · Shopify · AWS · Google Cloud · Docker · Kubernetes · GraphQL · MongoDB · PostgreSQL · Redis
        </span>
      </VelocityScroll>
    </div>
  </div>
);

export const ConsultingSection = () => (
  <div className="relative overflow-hidden rounded-lg border bg-card p-8">
    <div className="max-w-2xl">
      <h2 className="text-2xl font-medium text-foreground mb-4">
        Besoin de conseils ?
      </h2>
      <p className="text-muted-foreground mb-6">
        Nous proposons également des services de consulting pour vous aider à faire les bons choix technologiques et stratégiques.
      </p>
      <Link href="/contact">
        <Button>
          Prendre rendez-vous
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </div>

    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-onruntime-blue/10 to-transparent" />
  </div>
);

export const ExpertiseSection = () => (
  <div className="grid md:grid-cols-2 gap-12">
    <div>
      <h2 className="text-2xl font-medium text-foreground mb-4">
        Une expertise reconnue
      </h2>
      <p className="text-muted-foreground mb-6">
        Avec plus de 10 ans d&apos;expérience cumulée, notre équipe maîtrise les dernières technologies et les meilleures pratiques du développement web et mobile.
      </p>
      <dl className="grid grid-cols-2 gap-4 md:gap-8">
        <div className="space-y-2">
          <dt className="text-3xl font-medium text-foreground">10+</dt>
          <dd className="text-sm text-muted-foreground">Années d&apos;expérience</dd>
        </div>
        <div className="space-y-2">
          <dt className="text-3xl font-medium text-foreground">50+</dt>
          <dd className="text-sm text-muted-foreground">Projets réalisés</dd>
        </div>
        <div className="space-y-2">
          <dt className="text-3xl font-medium text-foreground">100%</dt>
          <dd className="text-sm text-muted-foreground">Satisfaction client</dd>
        </div>
        <div className="space-y-2">
          <dt className="text-3xl font-medium text-foreground">24/7</dt>
          <dd className="text-sm text-muted-foreground">Support disponible</dd>
        </div>
      </dl>
    </div>

    <div className="grid grid-cols-2 gap-4">
      {/* Logos des technologies/certifications */}
    </div>
  </div>
);