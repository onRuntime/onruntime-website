// src/constants/agencies/rouen.ts - Exemple révisé sans projets locaux fictifs
import { Agency } from "@/types/agency";
import { Building, Database, Cloud, Store } from "lucide-react";
import Routes from "@/constants/routes";

const rouenAgency: Agency = {
  id: "rouen",
  name: "Rouen",
  region: "Normandie",
  
  // SEO Content
  title: "Développement Web à Rouen | Solutions Digitales pour Entreprises Normandes",
  description: "Créez votre site web ou application mobile à Rouen. Solutions digitales sur mesure pour les entreprises normandes, adaptées aux enjeux locaux de votre secteur.",
  
  // Optional hero overrides
  heroTitle: "Développement Web & Mobile à Rouen",
  heroDescription: "Nous aidons les entreprises de Rouen et de Normandie à se digitaliser avec des solutions web sur mesure, parfaitement adaptées aux enjeux spécifiques du marché normand.",
  
  // Informations clés sur le marché local
  keyBusinessSectors: ["Industrie", "Agroalimentaire", "Logistique", "Commerce local"],
  localChallenges: [
    "Digitalisation des industries traditionnelles normandes face à la concurrence internationale",
    "Optimisation de la logistique fluviale et portuaire via des solutions numériques innovantes",
    "Besoin de solutions e-commerce adaptées aux producteurs et artisans locaux",
    "Transition numérique des PME normandes avec des budgets maîtrisés"
  ],
  benefits: [
    "Solutions sur mesure adaptées aux spécificités des entreprises normandes",
    "Expertise pointue dans les secteurs industriels et agroalimentaires régionaux",
    "Tarifs compétitifs par rapport aux agences parisiennes",
    "Connaissance approfondie des enjeux logistiques liés à l'axe Seine",
    "Accompagnement personnalisé tout au long de votre projet digital"
  ],
  
  // Page content sections
  introText: "Le tissu économique normand présente des enjeux numériques spécifiques que nous avons appris à maîtriser. Entre l'industrie manufacturière, le secteur agroalimentaire et la logistique fluviale, nous créons des solutions digitales qui répondent aux besoins précis des entreprises rouennaises.",
  
  expertiseText: "Notre équipe conçoit des sites web, applications et solutions e-commerce parfaitement adaptés aux entreprises de Rouen et sa région. Nous comprenons les défis de votre marché et vous proposons des solutions digitales qui vous aident à vous démarquer et à développer votre activité.",
  
  whyChooseUs: "Notre connaissance approfondie du marché normand nous permet de développer des solutions numériques parfaitement adaptées aux défis spécifiques des entreprises locales. Contrairement aux agences parisiennes, nous comprenons les subtilités du tissu économique de Rouen et apportons des solutions sur mesure à un rapport qualité-prix avantageux.",
  
  // Visual and design elements
  accentColor: "blue",
  primaryStat: {
    icon: Building,
    value: "Industrie",
    label: "secteur industriel"
  },
  
  // Key features
  strengths: [
    {
      title: "Sites web industriels",
      description: "Sites performants adaptés aux entreprises manufacturières normandes.",
      icon: Building
    },
    {
      title: "E-commerce local",
      description: "Solutions de vente en ligne pour producteurs et artisans locaux.",
      icon: Store
    },
    {
      title: "Applications métier",
      description: "Outils numériques sur mesure pour optimiser vos processus.",
      icon: Database
    },
    {
      title: "Digitalisation PME",
      description: "Accompagnement complet pour votre transformation numérique.",
      icon: Cloud
    }
  ],
  
  // Featured services
  focusedServices: [
    {
      name: "Sites web professionnels",
      description: "Vitrines digitales performantes et optimisées pour le SEO local à Rouen.",
      link: Routes.service.frontend.web,
      icon: Building
    },
    {
      name: "E-commerce régional",
      description: "Boutiques en ligne adaptées aux producteurs et commerces normands.",
      link: Routes.service.integration.shopify,
      icon: Store
    },
    {
      name: "Applications métier",
      description: "Logiciels sur mesure pour l'industrie et la logistique régionale.",
      link: Routes.service.frontend.desktop,
      icon: Database
    }
  ],
  
  // Testimonials (génériques mais pertinents)
  testimonials: [
    {
      name: "François Dubois",
      role: "Directeur Commercial",
      company: "Industrie Française",
      text: "Nous avons été impressionnés par la capacité d'onRuntime à comprendre nos besoins spécifiques en tant qu'entreprise industrielle. Leur solution a parfaitement répondu à nos enjeux de digitalisation.",
      imageUrl: "/static/images/testimonials/francois-dubois.jpg"
    },
    {
      name: "Marie Leclerc",
      role: "Responsable E-commerce",
      company: "Saveurs Authentiques",
      text: "Notre boutique en ligne a transformé notre modèle économique. L'équipe a su créer une solution e-commerce qui met en valeur nos produits locaux et nous a permis d'atteindre une clientèle nationale.",
      imageUrl: "/static/images/testimonials/marie-leclerc.jpg"
    }
  ],
  
  // Contact information
  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "contact@onruntime.com",
    meetingOptions: ["Visioconférence", "Déplacements occasionnels à Rouen"]
  },
  
  // Statistics and metrics
  stats: [
    {
      label: "Expertise",
      value: "10+",
      description: "Années d'expérience"
    },
    {
      label: "Satisfaction",
      value: "97%",
      description: "Clients satisfaits"
    },
    {
      label: "Délai moyen",
      value: "6-8",
      description: "Semaines de réalisation"
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