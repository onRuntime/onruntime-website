import React from "react";
import { Button } from "@/components/ui/button";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Link from "next/link";
import { ArrowRight, GitPullRequestArrow, Timer, Users } from "lucide-react";
import Image from "next/image";

export const ValuePropositionSection = () => (
  <div className="grid md:grid-cols-3 gap-8">
    <div className="flex flex-col items-center text-center gap-4 p-6">
      <div className="p-3 rounded-lg bg-onruntime-blue/10 text-onruntime-blue">
        <GitPullRequestArrow className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-medium text-foreground">Approche flexible</h3>
      <p className="text-muted-foreground">
        Notre méthodologie s&apos;adapte à vos besoins spécifiques, garantissant
        une collaboration fluide et efficace.
      </p>
    </div>

    <div className="flex flex-col items-center text-center gap-4 p-6">
      <div className="p-3 rounded-lg bg-onruntime-blue/10 text-onruntime-blue">
        <Timer className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-medium text-foreground">
        Time-to-Market optimisé
      </h3>
      <p className="text-muted-foreground">
        Des solutions rapides et efficaces pour lancer votre projet dans les
        meilleurs délais.
      </p>
    </div>

    <div className="flex flex-col items-center text-center gap-4 p-6">
      <div className="p-3 rounded-lg bg-onruntime-blue/10 text-onruntime-blue">
        <Users className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-medium text-foreground">Équipe dédiée</h3>
      <p className="text-muted-foreground">
        Des experts passionnés qui s&apos;investissent pleinement dans la
        réussite de votre projet.
      </p>
    </div>
  </div>
);

const technologies = [
  
  "React",
  "Next.js",
  "Nuxt",
  "TypeScript",
  "Vue.js",
  "TailwindCSS",
  "Sass",

  "Node.js",
  "Python",
  "Django",
  "PHP",
  "Laravel",
  "NestJS",
  "Express",
  "Flask",

  "WordPress",
  "Shopify",
  "Webflow",
  "SquareSpace",
  "PrestaShop",
  "Strapi",
  "WooCommerce",

  "AWS",
  "Google Cloud",
  "Azure",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "MySQL",
  "Firebase",
  "Supabase",
  "Prisma",
  "Vercel",
  "Netlify",
];

const TechnologyList = () => (
  <>
    {technologies.map((tech, index) => (
      <React.Fragment key={`${tech}-${index}`}>
        <span>{tech} </span>
        <span>·</span>
      </React.Fragment>
    ))}
  </>
);

export const TechnologiesSection = () => (
  <div className="relative py-10 md:py-8">
    <div className="w-full overflow-hidden relative">
      
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-muted to-transparent z-10" />

      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-muted to-transparent z-10" />

      <div className="flex flex-col gap-2">
        {" "}
        
        <VelocityScroll
          defaultVelocity={1}
          numRows={1}
          className="text-2xl md:text-2xl font-medium"
        >
          <span className="inline-flex items-center gap-4 ml-4">
            <TechnologyList />
          </span>
        </VelocityScroll>
        <VelocityScroll
          defaultVelocity={-1}
          numRows={1}
          className="text-2xl md:text-2xl font-medium"
        >
          <span className="inline-flex items-center gap-4 ml-4">
            <TechnologyList />
          </span>
        </VelocityScroll>
      </div>
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
        Nous proposons également des services de consulting pour vous aider à
        faire les bons choix technologiques et stratégiques.
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

const techPartners = [
  {
    name: "Google Cloud Platform",
    logo: "/static/images/partners/google-cloud.svg",
    description: "Infrastructure cloud robuste et évolutive"
  },
  {
    name: "Amazon Web Services",
    logo: "/static/images/partners/aws.svg",
    description: "Solutions cloud complètes et flexibles"
  },
  {
    name: "Shopify",
    logo: "/static/images/partners/shopify.svg",
    description: "Solutions e-commerce personnalisées"
  }
]

export const ExpertiseSection = () => (
  <div className="grid md:grid-cols-2 gap-12">
    <div>
      <h2 className="text-2xl font-medium text-foreground mb-4">
        Une expertise reconnue
      </h2>
      <p className="text-muted-foreground mb-6">
        Avec plus de 10 ans d&apos;expérience cumulée, notre équipe maîtrise les
        dernières technologies et les meilleures pratiques du développement web
        et mobile.
      </p>
      <dl className="grid grid-cols-2 gap-4 md:gap-8">
        <div className="space-y-2">
          <dt className="text-3xl font-medium text-foreground">10+</dt>
          <dd className="text-sm text-muted-foreground">
            Années d&apos;expérience
          </dd>
        </div>
        <div className="space-y-2">
          <dt className="text-3xl font-medium text-foreground">7+</dt>
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

    <div className="space-y-8">
      <h3 className="text-lg font-medium text-foreground">
        Nos technologies partenaires
      </h3>
      
      <div className="grid grid-cols-1 gap-6">
        {techPartners.map((partner) => (
          <div 
            key={partner.name}
            className="flex items-center gap-6 p-4 rounded-lg border bg-background hover:bg-accent/50 transition-colors"
          >
            <div className="relative w-16 h-12 flex-shrink-0">
              <Image
                src={partner.logo}
                alt={partner.name}
                className="object-contain"
                fill
                sizes="64px"
              />
            </div>
            <div>
              <h4 className="font-medium text-foreground">{partner.name} Partner</h4>
              <p className="text-sm text-muted-foreground">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
