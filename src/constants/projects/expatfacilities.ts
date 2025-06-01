import { Project, Tag } from "@/types/project";
import { Building2, Globe, MapPin, Plane, Shield, Users, CreditCard, Smartphone, Phone, Map } from "lucide-react";

export const expatFacilitiesProject: Project = {
  id: "expatfacilities",
  name: "Expat Facilities",
  tags: [Tag.CUSTOMER],
  shortDescription:
    "Plateforme complète d'accompagnement pour l'expatriation étudiante, intégrant logement, visa, transport et support local.",
  description:
    "Développement d'une plateforme full-stack permettant aux étudiants français de gérer leur expatriation de A à Z avec des services intégrés et un réseau d'ambassadeurs locaux.",
  longDescription: `Expat Facilities était une startup française révolutionnaire qui simplifiait l'expatriation pour les étudiants. Notre équipe a développé une plateforme complète from scratch, évoluant d'une simple landing page vers une solution sophistiquée combinant les fonctionnalités d'Airbnb avec un écosystème de services d'expatriation.

La plateforme intégrait de multiples APIs partenaires pour offrir une expérience unifiée : recherche de logements via des partenaires comme Spotahome, réservations de vols avec Lufthansa, assurances spécialisées, et un système unique d'ambassadeurs locaux présents dans plus de 70 pays.

Le défi technique principal était l'orchestration de dizaines d'APIs tierces pour créer une expérience utilisateur fluide et cohérente, tout en gérant les complexités des paiements internationaux et du matching entre étudiants et ambassadeurs locaux.`,
  iconUrl: "/static/images/projects/expatfacilities/icon.webp",
  showcaseUrl: "/static/images/projects/expatfacilities/showcase.jpg",
  thumbnailUrl: "/static/images/projects/expatfacilities/thumbnail.jpg",
  website: "https://www.linkedin.com/company/expatfacilities",
  repository: undefined,
  startDate: "2020-07",
  status: "completed",

  features: [
    {
      title: "Plateforme de logement intégrée",
      description:
        "Recherche et réservation de logements étudiants via l'intégration d'APIs partenaires comme Spotahome",
      icon: Building2,
    },
    {
      title: "Réseau d'ambassadeurs locaux",
      description:
        "Plus de 300 ambassadeurs étudiants dans 70 pays pour accompagner sur place les nouveaux arrivants",
      icon: Users,
    },
    {
      title: "Services visa et administratif",
      description:
        "Gestion complète des démarches de visa et accompagnement administratif personnalisé",
      icon: Shield,
    },
    {
      title: "Transport et logistique",
      description:
        "Réservation de vols (partenariat Lufthansa), trains, et transport local avec tarifs préférentiels",
      icon: Plane,
    },
    {
      title: "Assurances expatriation",
      description:
        "Assurances spécialisées pour expatriation temporaire en partenariat avec Mondial Assistance et Allianz",
      icon: Shield,
    },
    {
      title: "Tracking avancé",
      description:
        "Suivi en temps réel de toutes les démarches avec notifications et interface de pilotage",
      icon: Smartphone,
    },
  ],

  technologies: [
    {
      name: "Next.js",
      description: "Framework React pour le frontend",
      icon: Globe,
    },
    {
      name: "NestJS",
      description: "Backend API robuste et modulaire",
      icon: Globe,
    },
    {
      name: "MongoDB",
      description: "Base de données principale",
      icon: Globe,
    },
    {
      name: "GraphQL",
      description: "API unifiée pour les données",
      icon: Globe,
    },
    {
      name: "Google Cloud",
      description: "Infrastructure cloud et services",
      icon: Globe,
    },
    {
      name: "Stripe",
      description: "Paiements internationaux",
      icon: CreditCard,
    },
    {
      name: "TypeScript",
      description: "Développement type-safe",
      icon: Globe,
    },
    {
      name: "Styled Components",
      description: "Styling et thématisation",
      icon: Globe,
    },
  ],

  metrics: [
    {
      label: "Pays couverts",
      value: "70+",
      description: "Destinations d'expatriation disponibles",
    },
    {
      label: "Ambassadeurs",
      value: "300+",
      description: "Étudiants ambassadeurs dans le monde",
    },
    {
      label: "Utilisateurs",
      value: "2000+",
      description: "Étudiants utilisateurs de la plateforme",
    },
  ],

  team: [
    {
      ref: "antoine-kingue",
      role: "Lead Developer",
    },
    {
      ref: "lucas-bodin",
      role: "Lead Designer",
    },
    {
      ref: "younes-bessa",
      role: "Lead Frontend Developer",
    },
    {
      ref: "jeremy-baudrin",
      role: "Lead Backend Developer",
    },
    {
      ref: "mareh-mannaa",
      role: "Marketing & Communication",
    },
    {
      ref: "alexis-mouchon",
      role: "Backend Developer",
    },
    {
      ref: "johann-six",
      role: "Frontend Developer",
    },
  ],

  screenshots: [
    {
      url: "/static/images/projects/expatfacilities/screenshots/platform.jpg",
      caption: "Interface principale de la plateforme",
    },
    {
      url: "/static/images/projects/expatfacilities/screenshots/services.jpg",
      caption: "Sélection et configuration des services",
    },
  ],

  challenges: [
    "Intégration de dizaines d'APIs tierces (Spotahome, Lufthansa, assurances) dans une expérience unifiée",
    "Gestion des paiements internationaux avec Stripe dans multiple devises et réglementations",
    "Développement d'un système de matching étudiants/ambassadeurs basé sur la géolocalisation",
    "Architecture scalable pour supporter la croissance rapide (70 pays, 300+ ambassadeurs)",
    "Synchronisation en temps réel des disponibilités logements entre plateformes partenaires",
    "Interface multilingue et adaptation aux spécificités locales de chaque pays",
  ],

  learnings: [
    "Complexité de l'orchestration d'APIs tierces avec des formats et limitations différents",
    "Importance cruciale de la gestion d'erreur dans un écosystème multi-partenaires",
    "Défis de l'internationalisation au-delà de la traduction (devises, réglementations, cultures)",
    "Architecture microservices essentielle pour isoler les intégrations partenaires",
    "UX/UI critique pour transformer un processus complexe en expérience fluide",
    "Gestion des relations partenaires et négociations techniques pour les intégrations",
  ],

  futurePlans: [
    "Expansion vers d'autres types d'expatriation (professionnels, retraités)",
    "IA pour optimiser le matching étudiants/ambassadeurs",
    "Application mobile native pour les ambassadeurs",
    "Plateforme de formation pour les ambassadeurs",
  ],
};