import { Project, Tag } from "@/types/project";
import { Code, Compass, Database, Server, Shield, Ticket } from "lucide-react";

export const tonightpassProject: Project = {
  id: "tonightpass",
  name: "Tonight Pass",
  tags: [Tag.FEATURED],
  shortDescription: "Découvrez et réservez les meilleurs événements adaptés à vos goûts.",
  description: "Tonight Pass est une plateforme innovante qui simplifie la découverte et la réservation d'événements grâce à un système de recommandations personnalisées basé sur vos préférences.",
  longDescription: `Tonight Pass révolutionne la façon dont les gens découvrent et participent aux événements. Notre plateforme combine technologie et expérience utilisateur pour offrir des recommandations personnalisées et une billetterie simplifiée.

La plateforme met en relation les organisateurs d'événements et les participants, offrant une solution complète de gestion des réservations, de recommandations intelligentes et d'analyse de données. L'application a été conçue pour optimiser l'expérience de découverte d'événements tout en simplifiant leur gestion pour les organisateurs.`,
  iconUrl: "/static/images/projects/tonightpass/icon.svg",
  showcaseUrl: "/static/images/projects/tonightpass/showcase.jpg",
  thumbnailUrl: "/static/images/projects/tonightpass/thumbnail.webp",
  website: "https://tonightpass.com",
  repository: undefined,
  startDate: "2021-04",
  status: "active",

  features: [
    {
      title: "Billetterie simplifiée",
      description: "Réservez vos billets en quelques clics pour tous types d'événements",
      icon: Ticket
    },
    {
      title: "Recommandations personnalisées",
      description: "Découvrez des événements adaptés à vos goûts",
      icon: Compass
    },
    {
      title: "E-tickets sécurisés",
      description: "Accédez aux événements avec des billets numériques sécurisés",
      icon: Shield
    }
  ],

  technologies: [
    {
      name: "React & React Native",
      description: "Applications web et mobile",
      icon: Code
    },
    {
      name: "Nest.js", 
      description: "Backend API",
      icon: Server
    },
    {
      name: "MongoDB",
      description: "Base de données principale",
      icon: Database
    }
  ],

  metrics: [
    {
      label: "Temps gagné",
      value: "45min",
      description: "En moyenne par recherche d'événement",
    },
    {
      label: "Couverture",
      value: "100%",
      description: "Disponible partout en France", 
    },
    {
      label: "Facilité",
      value: "1-clic",
      description: "Pour réserver n'importe quel événement",
    }
  ],

  team: [
    {
      ref: "antoine-kingue",
      role: "Product Manager",
    },
    {
      ref: "killian-mendy",
      role: "Product Manager",
    },
    {
      ref: "jeremy-baudrin",
      role: "Lead Developer",
    },
    {
      ref: "lucas-bodin",
      role: "Lead Designer",
    },
    {
      ref: "maeva-leclerc",
      role: "Lead Marketing",
    },
    {
      ref: "mareh-mannaa",
      role: "Marketing",
    },
    {
      ref: "alois-gradelet",
      role: "Community Manager",
    },
    {
      ref: "ines-munoz",
      role: "Community Manager",
    },
    {
      ref: "maceo-vaz-da-mota",
      role: "Designer",
    },
    {
      ref: "younes-bessa",
      role: "Developer",
    },
    {
      ref: "alexis-lecourt",
      role: "Developer",
    },
    {
      ref: "oumaima-haddar",
      role: "Developer",
    },
    {
      ref: "alexis-mouchon",
      role: "Developer",
    },
    {
      ref: "amel-tolba",
      role: "Developer",
    },
    {
      ref: "ines-ferreira",
      role: "Developer",
    },
  ],

  screenshots: [
    // {
    //   url: "/static/images/projects/tonightpass/screenshots/home.jpg",
    //   caption: "Page d'accueil de l'application",
    // },
    // {
    //   url: "/static/images/projects/tonightpass/screenshots/booking.jpg",
    //   caption: "Processus de réservation",
    // },
  ],

  challenges: [
    "Développement d'une expérience de billetterie fluide et intuitive",
    "Création d'un système de recommandation personnalisé",
    "Mise en place d'une infrastructure scalable",
    "Gestion des pics de trafic lors des mises en vente",
  ],
  
  learnings: [
    "Importance de la simplicité dans le parcours de réservation",
    "Nécessité d'une interface adaptée aux différents types d'événements",
    "Gestion efficace d'une base de données d'événements",
    "Équilibre entre rapidité et fiabilité du service",
  ],
  
  futurePlans: [
    "Déploiement de bornes dans les établissements",
    "Lancement d'une plateforme de recrutement événementiel",
    "Mise en place d'un service de location de salles",
    "Création d'un réseau de fournisseurs événementiels",
    "Développement d'outils avancés pour les organisateurs",
    "Perfectionnement du système de recommandations",
  ],
};