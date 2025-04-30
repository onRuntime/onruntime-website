'use client';

import React from 'react';
import { Code, Palette, Rocket, MapPin, Briefcase, GraduationCap, Building, Globe } from 'lucide-react';

// City-specific expertise data
const expertiseData = {
  paris: {
    title: "Notre expertise à Paris",
    description: "Notre connaissance approfondie du marché parisien nous permet d'offrir des solutions digitales parfaitement adaptées aux entreprises de la capitale, que ce soit des startups innovantes ou des acteurs établis.",
    location: "Paris, 75",
    ecosystem: "French Tech, Station F, Paris&Co",
    specialties: [
      "Solutions SaaS pour startups",
      "Applications Fintech et Adtech",
      "Design UI/UX moderne",
      "Projets multilingues pour entreprises internationales"
    ],
    sectors: [
      { name: "Fintech", icon: Briefcase },
      { name: "Fashion Tech", icon: Palette },
      { name: "Adtech", icon: Rocket },
      { name: "Startups", icon: Building }
    ]
  },
  marseille: {
    title: "Notre expertise à Marseille",
    description: "Notre connaissance du marché marseillais nous permet de créer des solutions parfaitement adaptées aux défis spécifiques des entreprises de la cité phocéenne et de la région PACA.",
    location: "Marseille, 13",
    ecosystem: "Pôle Média Belle de Mai, Euroméditerranée",
    specialties: [
      "Applications pour logistique maritime",
      "Solutions pour le secteur portuaire",
      "Plateformes e-santé",
      "Services adaptés au marché méditerranéen"
    ],
    sectors: [
      { name: "Maritime Tech", icon: Globe },
      { name: "Logistique", icon: Building },
      { name: "E-santé", icon: Code },
      { name: "Commerce", icon: Briefcase }
    ]
  },
  lyon: {
    title: "Notre expertise à Lyon",
    description: "Notre connaissance du marché lyonnais nous permet de proposer des solutions adaptées aux entreprises de la région Auvergne-Rhône-Alpes en pleine transformation numérique.",
    location: "Lyon, 69",
    ecosystem: "French Tech One Lyon St-Étienne, H7",
    specialties: [
      "Solutions IoT pour l'industrie",
      "Applications pour la transformation numérique",
      "Plateformes data pour l'industrie",
      "Services adaptés au secteur healthtech"
    ],
    sectors: [
      { name: "Cleantech", icon: Rocket },
      { name: "Healthtech", icon: Code },
      { name: "Industrie 4.0", icon: Building },
      { name: "Big Data", icon: Briefcase }
    ]
  },
  toulouse: {
    title: "Notre expertise à Toulouse",
    description: "Notre connaissance du marché toulousain nous permet de proposer des solutions adaptées aux entreprises de la ville rose, particulièrement dans le secteur aérospatial et technologique.",
    location: "Toulouse, 31",
    ecosystem: "IoT Valley, Aerospace Valley",
    specialties: [
      "Applications de visualisation 3D",
      "Solutions IoT sécurisées",
      "Services pour l'industrie aérospatiale",
      "Systèmes sécurisés pour données sensibles"
    ],
    sectors: [
      { name: "Aerospace Tech", icon: Rocket },
      { name: "IoT", icon: Code },
      { name: "Intelligence Artificielle", icon: Building },
      { name: "Systèmes sécurisés", icon: Briefcase }
    ]
  },
  nice: {
    title: "Notre expertise à Nice",
    description: "Notre connaissance du marché azuréen nous permet de développer des solutions adaptées aux entreprises de la Côte d'Azur, particulièrement dans les secteurs du tourisme et des technologies.",
    location: "Nice, 06",
    ecosystem: "Sophia Antipolis, French Tech Côte d'Azur",
    specialties: [
      "Applications smart city",
      "Solutions pour le tourisme",
      "Services pour l'immobilier",
      "Expériences utilisateur multilingues"
    ],
    sectors: [
      { name: "Smart City", icon: Building },
      { name: "Tourisme Digital", icon: Globe },
      { name: "Yachting", icon: Code },
      { name: "Proptech", icon: Briefcase }
    ]
  },
  nantes: {
    title: "Notre expertise à Nantes",
    description: "Notre connaissance du marché nantais nous permet de créer des solutions adaptées aux entreprises de l'Ouest, avec une attention particulière au développement durable numérique.",
    location: "Nantes, 44",
    ecosystem: "Quartier de la Création, La Cantine numérique",
    specialties: [
      "Applications créatives",
      "Solutions green tech",
      "Plateformes e-commerce",
      "Services écologiquement responsables"
    ],
    sectors: [
      { name: "Créatif Digital", icon: Palette },
      { name: "Green Tech", icon: Rocket },
      { name: "E-commerce", icon: Briefcase },
      { name: "Open Source", icon: Code }
    ]
  },
  montpellier: {
    title: "Notre expertise à Montpellier",
    description: "Notre connaissance du marché montpelliérain nous permet de proposer des solutions adaptées aux entreprises occitanes, particulièrement dans les secteurs santé et agriculture.",
    location: "Montpellier, 34",
    ecosystem: "BIC Montpellier, French Tech Méditerranée",
    specialties: [
      "Applications medtech",
      "Solutions agritech",
      "Services pour le gaming",
      "Interfaces adaptées au marché local"
    ],
    sectors: [
      { name: "Medtech", icon: Code },
      { name: "Agritech", icon: Building },
      { name: "Gaming", icon: Rocket },
      { name: "Environnement", icon: Globe }
    ]
  },
  strasbourg: {
    title: "Notre expertise à Strasbourg",
    description: "Notre connaissance du marché strasbourgeois nous permet de créer des solutions adaptées aux entreprises alsaciennes, avec une attention particulière aux besoins transfrontaliers.",
    location: "Strasbourg, 67",
    ecosystem: "Nextmed, Institutions européennes",
    specialties: [
      "Plateformes éducatives multilingues",
      "Solutions fintech transfrontalières",
      "Services pour institutions",
      "Interfaces utilisateur multilingues"
    ],
    sectors: [
      { name: "Edtech", icon: GraduationCap },
      { name: "Fintech", icon: Briefcase },
      { name: "Healthtech", icon: Code },
      { name: "Institutions", icon: Building }
    ]
  },
  bordeaux: {
    title: "Notre expertise à Bordeaux",
    description: "Notre connaissance du marché bordelais nous permet de développer des solutions adaptées aux entreprises girondines, particulièrement dans les secteurs du vin et du tourisme.",
    location: "Bordeaux, 33",
    ecosystem: "Cité numérique, Darwin Ecosystem",
    specialties: [
      "Applications pour l'œnotourisme",
      "Solutions pour le secteur viticole",
      "Plateformes de tourisme",
      "Interfaces utilisateur personnalisées"
    ],
    sectors: [
      { name: "Winetech", icon: Briefcase },
      { name: "Tourism Tech", icon: Globe },
      { name: "Mobilité", icon: Rocket },
      { name: "UX Design", icon: Palette }
    ]
  },
  lille: {
    title: "Notre expertise à Lille",
    description: "Notre connaissance du marché lillois nous permet de proposer des solutions adaptées aux entreprises des Hauts-de-France, avec une attention particulière au retail et au commerce transfrontalier.",
    location: "Lille, 59",
    ecosystem: "Euratechnologies, Marché Benelux",
    specialties: [
      "Solutions retail tech",
      "Plateformes e-commerce transfrontalières",
      "Applications de cybersécurité",
      "Services de logistique intelligente"
    ],
    sectors: [
      { name: "Retail Tech", icon: Building },
      { name: "Cybersécurité", icon: Code },
      { name: "E-commerce", icon: Briefcase },
      { name: "Logistique", icon: Globe }
    ]
  },
  rouen: {
    title: "Notre expertise à Rouen",
    description: "Notre connaissance du marché normand nous permet de créer des solutions adaptées aux entreprises rouennaises, particulièrement dans les secteurs de l'industrie et de l'agriculture.",
    location: "Rouen, 76",
    ecosystem: "Seine Innopolis, Normandie Incubation",
    specialties: [
      "Solutions pour l'industrie connectée",
      "Applications pour la logistique fluviale",
      "Systèmes de traçabilité agricole",
      "Services pour la transformation numérique"
    ],
    sectors: [
      { name: "Industrie Connectée", icon: Building },
      { name: "Logistique", icon: Globe },
      { name: "Agritech", icon: Code },
      { name: "PME", icon: Briefcase }
    ]
  }
};

interface LocalExpertiseProps {
  city: string;
}

const LocalExpertise: React.FC<LocalExpertiseProps> = ({ city }) => {
  // Get expertise for this city, or use Paris as default
  const expertise = expertiseData[city as keyof typeof expertiseData] || expertiseData.paris;

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          {expertise.title}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {expertise.description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 rounded-lg border bg-card">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-onruntime-blue" />
          <span className="font-medium">{expertise.location}</span>
        </div>
        <div className="h-4 w-px bg-border hidden md:block"></div>
        <div className="text-sm text-center md:text-left">
          <span className="font-medium text-onruntime-blue">Écosystème:</span> {expertise.ecosystem}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {expertise.sectors.map((sector, index) => {
          const Icon = sector.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">{sector.name}</h3>
            </div>
          );
        })}
      </div>

      <div className="p-6 border rounded-lg bg-card">
        <h3 className="text-xl font-medium text-foreground mb-4">Nos spécialités à {city.charAt(0).toUpperCase() + city.slice(1)}</h3>
        <ul className="space-y-3">
          {expertise.specialties.map((specialty, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-onruntime-blue"></div>
              <span>{specialty}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocalExpertise;