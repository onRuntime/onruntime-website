'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Building, Users, Rocket } from 'lucide-react';
import DotPattern from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import Routes from '@/constants/routes';

// Define city-specific data with realistic information
const cityDetails = {
  paris: {
    title: "Agence web à Paris",
    description: "Notre équipe travaille à distance avec les entreprises parisiennes tout en maîtrisant parfaitement l'écosystème numérique local. Nous accompagnons startups et entreprises dans un écosystème dynamique comptant plus de 3000 startups dans la région.",
    stats: [
      { label: "Startups", value: "3000+" },
      { label: "CAC 40", value: "30+ entreprises" },
      { label: "Tech Hubs", value: "5+" }
    ],
    primaryStat: {
      icon: Building,
      value: "French Tech Paris",
      label: "Écosystème"
    },
    accentColor: "blue"
  },
  marseille: {
    title: "Agence digitale à Marseille",
    description: "Notre expertise du marché marseillais nous permet d'accompagner à distance les entreprises phocéennes dans leur transformation numérique. Situés dans la deuxième ville de France en pleine effervescence digitale, nous développons des solutions innovantes pour les secteurs maritime et logistique.",
    stats: [
      { label: "Croissance Tech", value: "+20%" },
      { label: "Incubateurs", value: "3+" },
      { label: "Port", value: "1er en France" }
    ],
    primaryStat: {
      icon: MapPin,
      value: "Méditerranée",
      label: "Positionnement"
    },
    accentColor: "magenta"
  },
  lyon: {
    title: "Agence web à Lyon",
    description: "Notre connaissance approfondie du marché lyonnais nous permet d'accompagner à distance les entreprises de la région Auvergne-Rhône-Alpes. Nous développons des solutions adaptées à l'écosystème des technologies cleantech et industrie 4.0 pour faciliter la transformation numérique des entreprises régionales.",
    stats: [
      { label: "Rank Économique", value: "3ème en France" },
      { label: "Grands Groupes", value: "10+" },
      { label: "Universités", value: "4+" }
    ],
    primaryStat: {
      icon: Rocket,
      value: "Industrie 4.0",
      label: "Spécialité"
    },
    accentColor: "blue"
  },
  toulouse: {
    title: "Agence digitale à Toulouse",
    description: "Notre expertise du marché toulousain nous permet d'accompagner à distance les entreprises de la ville rose, capitale européenne de l'aéronautique et du spatial. Nos solutions sont adaptées aux besoins spécifiques de ce secteur exigeant, avec une attention particulière à la sécurité des données.",
    stats: [
      { label: "Ingénieurs", value: "Forte concentration" },
      { label: "Secteur Aéro", value: "Leader européen" },
      { label: "Startups B2B", value: "80+" }
    ],
    primaryStat: {
      icon: Rocket,
      value: "Aérospatiale",
      label: "Secteur clé"
    },
    accentColor: "magenta"
  },
  nice: {
    title: "Agence web à Nice",
    description: "Notre connaissance du marché azuréen nous permet d'accompagner à distance les entreprises de la Côte d'Azur. Nous développons des solutions innovantes en smart city et tourisme digital, parfaitement adaptées à une clientèle exigeante et internationale.",
    stats: [
      { label: "Sophia Antipolis", value: "Grand technopôle" },
      { label: "Clientèle Int.", value: "25%" },
      { label: "Tourisme", value: "Secteur clé" }
    ],
    primaryStat: {
      icon: Users,
      value: "International",
      label: "Clientèle"
    },
    accentColor: "blue"
  },
  nantes: {
    title: "Agence digitale à Nantes",
    description: "Notre expertise du marché nantais nous permet d'accompagner à distance les entreprises de l'Ouest. Dans cette ville en pleine effervescence digitale, nous développons des solutions créatives, green tech et e-commerce, en phase avec la culture collaborative et écologique locale.",
    stats: [
      { label: "Croissance Démo", value: "Ville attractive" },
      { label: "Digital Week", value: "Événement majeur" },
      { label: "Projets Open Source", value: "Nombreux" }
    ],
    primaryStat: {
      icon: Rocket,
      value: "Green Tech",
      label: "Innovation"
    },
    accentColor: "magenta"
  },
  montpellier: {
    title: "Agence web à Montpellier",
    description: "Notre connaissance du marché montpelliérain nous permet d'accompagner à distance les entreprises occitanes. Nous développons des solutions digitales pour les secteurs medtech et agritech, avec une attention particulière à l'impact environnemental et aux spécificités locales.",
    stats: [
      { label: "Croissance Startups", value: "En progression" },
      { label: "Medtech", value: "Secteur clé" },
      { label: "Écosystème", value: "Dynamique" }
    ],
    primaryStat: {
      icon: Building,
      value: "MedTech",
      label: "Spécialité"
    },
    accentColor: "blue"
  },
  strasbourg: {
    title: "Agence digitale à Strasbourg",
    description: "Notre maîtrise du contexte strasbourgeois nous permet d'accompagner à distance les entreprises alsaciennes. Nous développons des solutions digitales multilingues et transfrontalières, adaptées à la position unique de Strasbourg entre France, Allemagne et Suisse.",
    stats: [
      { label: "Institutions UE", value: "Présence notable" },
      { label: "Transfrontalier", value: "Marché clé" },
      { label: "Langues", value: "FR/DE/EN" }
    ],
    primaryStat: {
      icon: MapPin,
      value: "Transfrontalier",
      label: "Expertise"
    },
    accentColor: "magenta"
  },
  bordeaux: {
    title: "Agence web à Bordeaux",
    description: "Notre connaissance du marché bordelais nous permet d'accompagner à distance les entreprises girondines. Nous développons des solutions innovantes pour les secteurs du vin, du tourisme et de la mobilité, parfaitement adaptées à l'identité et aux besoins de la région.",
    stats: [
      { label: "Wine Tech", value: "Secteur en croissance" },
      { label: "Croissance", value: "Ville attractive" },
      { label: "Qualité de vie", value: "Excellente" }
    ],
    primaryStat: {
      icon: Building,
      value: "WineTech",
      label: "Spécialité"
    },
    accentColor: "blue"
  },
  lille: {
    title: "Agence digitale à Lille",
    description: "Notre expertise du marché lillois nous permet d'accompagner à distance les entreprises des Hauts-de-France. Nous développons des solutions adaptées au retail tech et e-commerce transfrontalier, tirant parti de la position stratégique de Lille près de la Belgique.",
    stats: [
      { label: "Euratechnologies", value: "Incubateur majeur" },
      { label: "E-commerce", value: "Secteur fort" },
      { label: "Transfrontalier", value: "Atout clé" }
    ],
    primaryStat: {
      icon: MapPin,
      value: "Transfrontalier",
      label: "Positionnement"
    },
    accentColor: "magenta"
  },
  rouen: {
    title: "Agence web à Rouen",
    description: "Notre connaissance du marché normand nous permet d'accompagner à distance les entreprises rouennaises. Nous développons des solutions digitales pour l'industrie connectée et l'agritech, parfaitement adaptées aux besoins des entreprises en transformation numérique de la région.",
    stats: [
      { label: "Port", value: "Atout logistique" },
      { label: "Axe Seine", value: "Position stratégique" },
      { label: "Industries", value: "En transformation" }
    ],
    primaryStat: {
      icon: Building,
      value: "Industrie",
      label: "Secteur clé"
    },
    accentColor: "blue"
  }
};

interface CityHeroSectionProps {
  city: string;
}

const CityHeroSection: React.FC<CityHeroSectionProps> = ({ city }) => {
  // Get details for this city, or use Paris as default
  const details = cityDetails[city as keyof typeof cityDetails] || cityDetails.paris;
  const accent = details.accentColor || "blue";
  const PrimaryIcon = details.primaryStat.icon;

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card mb-24">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left content column */}
        <div className="p-8 md:p-12 flex flex-col items-start gap-6 relative z-10">
          <h1 className="font-medium text-4xl md:text-5xl text-foreground">
            {details.title}
          </h1>
          
          <p className="text-muted-foreground text-lg">
            {details.description}
          </p>

          <div className="grid grid-cols-3 gap-4 w-full mt-4">
            {details.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className={`text-xl font-semibold text-onruntime-${accent}`}>{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          <Link href={Routes.contact}>
            <Button size="lg">
              Discuter de votre projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Right visual column with abstract geometric elements */}
        <div className="relative hidden md:flex items-center justify-center p-8 overflow-hidden">
          <div className="relative z-10 w-full max-w-xs aspect-square">
            {/* Central icon with city's primary focus */}
            <div className={`absolute inset-0 rounded-full bg-onruntime-${accent}/5 backdrop-blur-sm border border-onruntime-${accent}/10 flex items-center justify-center`}>
              <PrimaryIcon className={`w-24 h-24 text-onruntime-${accent} opacity-30`} />
            </div>
            
            {/* City name */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-border shadow-sm"
              style={{ maxWidth: '160px' }}
            >
              <p className="text-center font-medium text-lg capitalize">{city}</p>
              <p className="text-xs text-center text-muted-foreground mt-1">{details.primaryStat.label}: {details.primaryStat.value}</p>
            </div>

            {/* Decorative elements */}
            <div className={`absolute right-0 top-0 w-20 h-20 rounded-full bg-onruntime-${accent}/10 backdrop-blur-sm border border-onruntime-${accent}/20`}></div>
            <div className={`absolute left-12 bottom-12 w-16 h-16 rounded-full bg-onruntime-${accent}/15 backdrop-blur-sm border border-onruntime-${accent}/30`}></div>
            <div className={`absolute left-0 top-1/4 w-12 h-12 rounded-full bg-onruntime-${accent}/20 backdrop-blur-sm border border-onruntime-${accent}/40`}></div>
          </div>
        </div>
      </div>

      {/* Background gradients */}
      <div className={`absolute inset-0 z-0 opacity-10 overflow-hidden`}>
        <div className={`absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-onruntime-${accent} blur-3xl`}></div>
        <div className={`absolute -left-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-onruntime-${accent} blur-3xl`}></div>
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
  );
};

export default CityHeroSection;