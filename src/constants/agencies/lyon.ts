import { Agency } from "@/types/agency";
import { Building, Rocket, Code, Globe } from "lucide-react";
import Routes from "@/constants/routes";

const lyonAgency: Agency = {
  id: "lyon",
  name: "Lyon",
  region: "Auvergne-Rhône-Alpes",
  population: 518635,
  
  // SEO Content
  title: "Agence Web & Design UI/UX à Lyon | Développement sur mesure",
  description: "Solutions digitales innovantes à Lyon. Notre agence lyonnaise développe des sites web, applications mobiles et designs UI/UX pour dynamiser votre entreprise.",
  
  // Optional hero overrides
  heroTitle: "Agence web à Lyon",
  heroDescription: "Notre connaissance du marché lyonnais nous permet de proposer des solutions adaptées aux entreprises de la région Auvergne-Rhône-Alpes en pleine transformation numérique.",
  
  // Page content sections
  introText: "Implantée à Lyon, carrefour économique majeur entre Paris et la Méditerranée, notre agence digitale met son expertise au service des entreprises lyonnaises. Nous combinons l'innovation technique et la rigueur pour créer des solutions digitales qui répondent aux ambitions de la capitale des Gaules.",
  expertiseText: "Notre équipe lyonnaise maîtrise les dernières technologies du web et du mobile, avec une connaissance approfondie des attentes des entreprises locales. Entre tradition et innovation, nous concevons des expériences utilisateur qui reflètent l'excellence lyonnaise.",
  whyChooseUs: "Choisir onRuntime Studio à Lyon, c'est s'associer à une équipe qui comprend les spécificités du tissu économique local, des industries traditionnelles aux startups innovantes. Notre approche combine excellence technique et vision stratégique pour vous accompagner dans votre transformation digitale.",
  
  // Visual and design elements
  accentColor: "blue",
  primaryStat: {
    icon: Rocket,
    value: "Industrie 4.0",
    label: "Spécialité"
  },
  
  // Key features
  strengths: [
    {
      title: "Au cœur de l'écosystème lyonnais",
      description: "Parfaite connaissance des acteurs économiques et technologiques de la région.",
      icon: Building
    },
    {
      title: "Excellence technique",
      description: "Solutions de haute qualité reflétant la tradition d'excellence lyonnaise.",
      icon: Code
    },
    {
      title: "Approche multisectorielle",
      description: "Expertise adaptée aux diverses industries de la région: gastronomie, pharma, textile...",
      icon: Globe
    },
    {
      title: "Agilité et pragmatisme",
      description: "Méthodologies flexibles héritées de l'esprit entrepreneurial lyonnais.",
      icon: Rocket
    }
  ],
  
  // Featured services
  focusedServices: [
    {
      name: "Applications métier",
      description: "Solutions digitales optimisant les processus des industries lyonnaises.",
      link: Routes.service.frontend.web,
      icon: Code
    },
    {
      name: "E-commerce gastronomique",
      description: "Plateformes valorisant l'excellence culinaire lyonnaise à l'international.",
      link: Routes.service.integration.shopify,
      icon: Globe
    },
    {
      name: "Design UI/UX industriel",
      description: "Interfaces utilisateur ergonomiques pour secteurs techniques et industriels.",
      link: Routes.service.design.ui,
      icon: Building
    }
  ],
  
  // Local projects
  localProjects: [
    {
      name: "Plateforme pour artisans lyonnais",
      description: "Solution connectant les artisans de la soie et autres savoir-faire locaux aux marchés internationaux.",
      imageUrl: "/static/images/agency/lyon-artisans.jpg",
      tags: ["Web", "E-commerce", "Marketplace"]
    },
    {
      name: "Application découverte gastronomique",
      description: "Guide interactif des bouchons lyonnais et expériences culinaires de la capitale gastronomique.",
      imageUrl: "/static/images/agency/lyon-gastronomie.jpg",
      tags: ["Mobile", "Géolocalisation", "Restauration"]
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      name: "Philippe Blanc",
      role: "Directeur",
      company: "Association des Artisans de la Croix-Rousse",
      text: "Leur plateforme a donné une visibilité internationale à notre savoir-faire lyonnais. Un impact concret sur notre activité.",
      imageUrl: "/static/images/testimonials/philippe-blanc.jpg"
    },
    {
      name: "Isabelle Mercier",
      role: "Fondatrice",
      company: "LyonTech Innovations",
      text: "Une équipe qui comprend parfaitement les enjeux de la tech lyonnaise et sait traduire nos besoins en solutions concrètes.",
      imageUrl: "/static/images/testimonials/isabelle-mercier.jpg"
    }
  ],
  
  // Contact information
  contactInfo: {
    address: "10 Place Bellecour, 69002 Lyon",
    phone: "+33 7 56 90 93 75",
    email: "lyon@onruntime.com",
    meetingPoints: ["Part-Dieu", "Confluence", "Vieux Lyon"]
  },
  
  // Statistics and metrics
  stats: [
    {
      label: "Rank Économique",
      value: "3ème",
      description: "en France"
    },
    {
      label: "Grands Groupes",
      value: "10+",
      description: "Sièges sociaux"
    },
    {
      label: "Universités",
      value: "4+",
      description: "Écoles d'ingénieurs"
    },
    {
      label: "Projets lyonnais",
      value: "45+",
      description: "Réalisations locales"
    },
    {
      label: "Industries servies",
      value: "12+",
      description: "Secteurs d'activité"
    },
    {
      label: "Satisfaction client",
      value: "97%",
      description: "Clients satisfaits à Lyon"
    }
  ],
  
  // Geographical information
  geo: {
    latitude: "45.764043",
    longitude: "4.835659"
  },
  
  // Related cities
  nearbyLocations: ["villeurbanne", "saint-etienne", "grenoble", "clermont-ferrand"]
};

export default lyonAgency;