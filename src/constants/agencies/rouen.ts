// src/constants/agencies/rouen.ts
import { Agency } from "@/types/agency";
import { Building, MapPin, Database, Cloud } from "lucide-react";
import Routes from "@/constants/routes";

const rouenAgency: Agency = {
  id: "rouen",
  name: "Rouen",
  region: "Normandie",
  population: 111000,
  
  // SEO Content
  title: "Agence digitale à Rouen | Web et Mobile",
  description: "Agence digitale à Rouen spécialisée en développement web, mobile et design UI/UX. Solutions digitales sur mesure pour les entreprises normandes.",
  
  // Optional hero overrides
  heroTitle: "Agence web à Rouen",
  heroDescription: "Notre connaissance du marché normand nous permet d'accompagner à distance les entreprises rouennaises. Nous développons des solutions digitales pour l'industrie connectée et l'agritech, parfaitement adaptées aux besoins des entreprises en transformation numérique de la région.",
  
  // Page content sections
  introText: "Au cœur de la Normandie, notre agence rouennaise combine expertise technique et connaissance du tissu économique local pour transformer vos idées en solutions digitales performantes. Entre tradition industrielle et innovation agricole, nous accompagnons les entreprises normandes dans leur transformation numérique.",
  expertiseText: "Notre équipe maîtrise les dernières technologies du web et du mobile pour créer des expériences adaptées aux secteurs clés normands. Nous comprenons les enjeux de l'industrie, de la logistique fluviale et de l'agriculture, pour proposer des solutions sur mesure et efficaces.",
  whyChooseUs: "Choisir onRuntime Studio à Rouen, c'est opter pour une agence qui comprend les défis spécifiques des entreprises normandes. Notre expertise technique et notre connaissance du territoire nous permettent de vous proposer des solutions parfaitement adaptées à votre contexte local.",
  
  // Visual and design elements
  accentColor: "blue",
  primaryStat: {
    icon: Building,
    value: "Industrie",
    label: "Secteur clé"
  },
  
  // Key features
  strengths: [
    {
      title: "Expertise industrielle connectée",
      description: "Solutions digitales adaptées à la transformation numérique du tissu industriel normand.",
      icon: Building
    },
    {
      title: "Innovation agricole",
      description: "Applications et outils pour le secteur agritech en plein développement dans la région.",
      icon: Cloud
    },
    {
      title: "Logistique fluviale",
      description: "Solutions pour optimiser les activités liées à l'axe Seine et au port de Rouen.",
      icon: MapPin
    },
    {
      title: "Transformation numérique",
      description: "Accompagnement personnalisé pour la digitalisation des PME normandes.",
      icon: Database
    }
  ],
  
  // Featured services
  focusedServices: [
    {
      name: "Applications métier industrielles",
      description: "Solutions digitales optimisant les processus des industries normandes.",
      link: Routes.service.frontend.web,
      icon: Building
    },
    {
      name: "Solutions agritech",
      description: "Outils de gestion et optimisation pour le secteur agricole régional.",
      link: Routes.service.backend.api,
      icon: Cloud
    },
    {
      name: "Plateformes logistiques",
      description: "Systèmes de suivi et optimisation pour la logistique fluviale et portuaire.",
      link: Routes.service.backend.database,
      icon: Database
    }
  ],
  
  // Local projects
  localProjects: [
    {
      name: "Plateforme de gestion agricole",
      description: "Solution de suivi des cultures et optimisation logistique pour coopératives normandes.",
      imageUrl: "/static/images/agency/rouen-agricole.jpg",
      tags: ["Web", "Mobile", "AgriTech"]
    },
    {
      name: "Application industrielle connectée",
      description: "Interface de monitoring et maintenance prédictive pour une industrie rouennaise.",
      imageUrl: "/static/images/agency/rouen-industrie.jpg",
      tags: ["IoT", "Dashboard", "Industrie"]
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      name: "François Dubois",
      role: "Directeur Industriel",
      company: "NormandieIndustrie",
      text: "onRuntime Studio a accompagné notre transformation digitale avec une solution parfaitement adaptée à nos contraintes industrielles. Leur compréhension du tissu économique normand a été un véritable atout.",
      imageUrl: "/static/images/testimonials/francois-dubois.jpg"
    },
    {
      name: "Marie Leclerc",
      role: "Directrice Innovation",
      company: "AgriNormandie",
      text: "Leur application de gestion agricole a simplifié le quotidien de nos agriculteurs tout en optimisant notre logistique. Une équipe à l'écoute qui comprend les réalités du terrain normand.",
      imageUrl: "/static/images/testimonials/marie-leclerc.jpg"
    }
  ],
  
  // Contact information
  contactInfo: {
    address: "12 Place du Vieux Marché, 76000 Rouen",
    phone: "+33 7 56 90 93 75",
    email: "rouen@onruntime.com",
    meetingPoints: ["Centre-ville historique", "Quartier des Docks", "Seine Innopolis"]
  },
  
  // Statistics and metrics
  stats: [
    {
      label: "Port",
      value: "1er",
      description: "Port céréalier d'Europe"
    },
    {
      label: "Axe Seine",
      value: "Position",
      description: "Stratégique"
    },
    {
      label: "Industries",
      value: "En transformation",
      description: "Numérique"
    },
    {
      label: "Projets normands",
      value: "40+",
      description: "Réalisations locales"
    },
    {
      label: "Satisfaction client",
      value: "97%",
      description: "Clients satisfaits en Normandie"
    }
  ],
  
  // Geographical information
  geo: {
    latitude: "49.443232",
    longitude: "1.099971"
  },
  
  // Related cities
  nearbyLocations: ["le-havre", "caen", "evreux", "dieppe"]
};

export default rouenAgency;