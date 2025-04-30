'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import DotPattern from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import Routes from '@/constants/routes';

// Define city-specific data with realistic information
const cityDetails = {
  paris: {
    title: "Agence web à Paris",
    description: "Notre équipe travaille à distance avec les entreprises parisiennes tout en maîtrisant parfaitement l'écosystème numérique local. Nous accompagnons startups et entreprises dans un écosystème dynamique comptant plus de 3000 startups dans la région.",
    image: "/static/images/agency/paris.jpg",
    caption: "Vue de Paris",
    stats: [
      { label: "Startups", value: "3000+" },
      { label: "CAC 40", value: "30+ entreprises" },
      { label: "Tech Hubs", value: "5+" }
    ]
  },
  marseille: {
    title: "Agence digitale à Marseille",
    description: "Notre expertise du marché marseillais nous permet d'accompagner à distance les entreprises phocéennes dans leur transformation numérique. Situés dans la deuxième ville de France en pleine effervescence digitale, nous développons des solutions innovantes pour les secteurs maritime et logistique.",
    image: "/static/images/agency/marseille.jpg",
    caption: "Vue du Vieux-Port de Marseille",
    stats: [
      { label: "Croissance Tech", value: "+20%" },
      { label: "Incubateurs", value: "3+" },
      { label: "Port", value: "1er en France" }
    ]
  },
  lyon: {
    title: "Agence web à Lyon",
    description: "Notre connaissance approfondie du marché lyonnais nous permet d'accompagner à distance les entreprises de la région Auvergne-Rhône-Alpes. Nous développons des solutions adaptées à l'écosystème des technologies cleantech et industrie 4.0 pour faciliter la transformation numérique des entreprises régionales.",
    image: "/static/images/agency/lyon.jpg",
    caption: "Vue de Lyon et la Saône",
    stats: [
      { label: "Rank Économique", value: "3ème en France" },
      { label: "Grands Groupes", value: "10+" },
      { label: "Universités", value: "4+" }
    ]
  },
  toulouse: {
    title: "Agence digitale à Toulouse",
    description: "Notre expertise du marché toulousain nous permet d'accompagner à distance les entreprises de la ville rose, capitale européenne de l'aéronautique et du spatial. Nos solutions sont adaptées aux besoins spécifiques de ce secteur exigeant, avec une attention particulière à la sécurité des données.",
    image: "/static/images/agency/toulouse.jpg",
    caption: "La ville rose et la Garonne",
    stats: [
      { label: "Ingénieurs", value: "Forte concentration" },
      { label: "Secteur Aéro", value: "Leader européen" },
      { label: "Startups B2B", value: "80+" }
    ]
  },
  nice: {
    title: "Agence web à Nice",
    description: "Notre connaissance du marché azuréen nous permet d'accompagner à distance les entreprises de la Côte d'Azur. Nous développons des solutions innovantes en smart city et tourisme digital, parfaitement adaptées à une clientèle exigeante et internationale.",
    image: "/static/images/agency/nice.jpg",
    caption: "La Promenade des Anglais",
    stats: [
      { label: "Sophia Antipolis", value: "Grand technopôle" },
      { label: "Clientèle Int.", value: "25%" },
      { label: "Tourisme", value: "Secteur clé" }
    ]
  },
  nantes: {
    title: "Agence digitale à Nantes",
    description: "Notre expertise du marché nantais nous permet d'accompagner à distance les entreprises de l'Ouest. Dans cette ville en pleine effervescence digitale, nous développons des solutions créatives, green tech et e-commerce, en phase avec la culture collaborative et écologique locale.",
    image: "/static/images/agency/nantes.jpg",
    caption: "L'île de Nantes et les Machines",
    stats: [
      { label: "Croissance Démo", value: "Ville attractive" },
      { label: "Digital Week", value: "Événement majeur" },
      { label: "Projets Open Source", value: "Nombreux" }
    ]
  },
  montpellier: {
    title: "Agence web à Montpellier",
    description: "Notre connaissance du marché montpelliérain nous permet d'accompagner à distance les entreprises occitanes. Nous développons des solutions digitales pour les secteurs medtech et agritech, avec une attention particulière à l'impact environnemental et aux spécificités locales.",
    image: "/static/images/agency/montpellier.jpg",
    caption: "Place de la Comédie",
    stats: [
      { label: "Croissance Startups", value: "En progression" },
      { label: "Medtech", value: "Secteur clé" },
      { label: "Écosystème", value: "Dynamique" }
    ]
  },
  strasbourg: {
    title: "Agence digitale à Strasbourg",
    description: "Notre maîtrise du contexte strasbourgeois nous permet d'accompagner à distance les entreprises alsaciennes. Nous développons des solutions digitales multilingues et transfrontalières, adaptées à la position unique de Strasbourg entre France, Allemagne et Suisse.",
    image: "/static/images/agency/strasbourg.jpg",
    caption: "La Petite France",
    stats: [
      { label: "Institutions UE", value: "Présence notable" },
      { label: "Transfrontalier", value: "Marché clé" },
      { label: "Langues", value: "FR/DE/EN" }
    ]
  },
  bordeaux: {
    title: "Agence web à Bordeaux",
    description: "Notre connaissance du marché bordelais nous permet d'accompagner à distance les entreprises girondines. Nous développons des solutions innovantes pour les secteurs du vin, du tourisme et de la mobilité, parfaitement adaptées à l'identité et aux besoins de la région.",
    image: "/static/images/agency/bordeaux.jpg",
    caption: "Place de la Bourse et le Miroir d'eau",
    stats: [
      { label: "Wine Tech", value: "Secteur en croissance" },
      { label: "Croissance", value: "Ville attractive" },
      { label: "Qualité de vie", value: "Excellente" }
    ]
  },
  lille: {
    title: "Agence digitale à Lille",
    description: "Notre expertise du marché lillois nous permet d'accompagner à distance les entreprises des Hauts-de-France. Nous développons des solutions adaptées au retail tech et e-commerce transfrontalier, tirant parti de la position stratégique de Lille près de la Belgique.",
    image: "/static/images/agency/lille.jpg",
    caption: "Grand-Place de Lille",
    stats: [
      { label: "Euratechnologies", value: "Incubateur majeur" },
      { label: "E-commerce", value: "Secteur fort" },
      { label: "Transfrontalier", value: "Atout clé" }
    ]
  },
  rouen: {
    title: "Agence web à Rouen",
    description: "Notre connaissance du marché normand nous permet d'accompagner à distance les entreprises rouennaises. Nous développons des solutions digitales pour l'industrie connectée et l'agritech, parfaitement adaptées aux besoins des entreprises en transformation numérique de la région.",
    image: "/static/images/agency/rouen.jpg",
    caption: "La cathédrale de Rouen",
    stats: [
      { label: "Port", value: "Atout logistique" },
      { label: "Axe Seine", value: "Position stratégique" },
      { label: "Industries", value: "En transformation" }
    ]
  }
};

interface CityHeroSectionProps {
  city: string;
}

const CityHeroSection: React.FC<CityHeroSectionProps> = ({ city }) => {
  // Get details for this city, or use Paris as default
  const details = cityDetails[city as keyof typeof cityDetails] || cityDetails.paris;

  return (
    <div className="relative flex flex-col lg:flex-row gap-12 items-center">
      <div className="flex-1 flex flex-col items-start gap-6">
        <h1 className="font-medium text-4xl md:text-5xl text-foreground">
          {details.title}
        </h1>
        
        <p className="text-muted-foreground text-lg">
          {details.description}
        </p>

        <div className="grid grid-cols-3 gap-4 w-full mt-4">
          {details.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-xl font-semibold text-onruntime-blue">{stat.value}</span>
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

        <DotPattern
          width={30}
          height={30}
          className={cn(
            "absolute z-[-1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      <div className="flex-1 relative w-full aspect-video">
        <Image
          src={details.image}
          alt={details.caption}
          fill
          className="object-cover rounded-lg"
          // Use error handling in a client component
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/static/images/agency/default-city.jpg";
          }}
        />
        <div className="absolute bottom-4 left-4 bg-background/80 px-3 py-1 rounded text-xs">
          {details.caption}
        </div>
      </div>
    </div>
  );
};

export default CityHeroSection;