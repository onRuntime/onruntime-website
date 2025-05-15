import { Agency } from "@/types/agency";
import { Palmtree, Building, Hotel, ShoppingBag, HeartPulse } from "lucide-react";
import Routes from "@/constants/routes";

const niceAgency: Agency = {
  id: "nice",
  name: "Nice",
  region: "Provence-Alpes-Côte d'Azur",
  
  title: "Développement Web à Nice | Solutions Digitales pour Entreprises Azuréennes",
  description: "Créez votre site web ou application mobile à Nice. Solutions digitales sur mesure pour les entreprises de la Côte d'Azur, adaptées aux enjeux locaux de votre secteur.",
  
  heroTitle: "Développement Web & Mobile à Nice",
  heroDescription: "Nous aidons les entreprises de Nice et de la Côte d'Azur à se digitaliser avec des solutions web sur mesure, parfaitement adaptées aux enjeux spécifiques du marché azuréen.",
  
  keyBusinessSectors: ["Tourisme de luxe", "Immobilier", "Événementiel", "Santé & Bien-être"],
  localChallenges: [
    "Digitalisation du secteur du tourisme haut de gamme sur la Côte d'Azur",
    "Besoin de solutions immobilières innovantes pour un marché international exigeant",
    "Mise en valeur digitale de l'événementiel (festivals, congrès, expositions)",
    "Transformation numérique du secteur santé et bien-être dans une région reconnue pour sa qualité de vie"
  ],
  benefits: [
    "Solutions sur mesure adaptées à une clientèle internationale exigeante",
    "Expertise pointue dans les interfaces haut de gamme et l'expérience utilisateur premium",
    "Connaissance approfondie du marché azuréen et de ses spécificités",
    "Applications multilingues adaptées à la clientèle internationale de la Côte d'Azur",
    "Accompagnement personnalisé tout au long de votre projet digital"
  ],
  
  introText: "Entre mer Méditerranée et Alpes, Nice bénéficie d'un rayonnement international et d'une économie diversifiée où le tourisme côtoie l'innovation. Notre expertise digitale permet aux entreprises niçoises de se démarquer dans un environnement compétitif où l'image et l'excellence sont primordiales.",
  
  expertiseText: "Notre équipe conçoit des sites web, applications et solutions e-commerce parfaitement adaptés aux entreprises de Nice et de la Côte d'Azur. Nous comprenons les exigences élevées de votre marché local et vous proposons des solutions digitales qui valorisent le positionnement premium propre à la région.",
  
  whyChooseUs: "Notre connaissance approfondie du marché azuréen nous permet de développer des solutions numériques parfaitement adaptées aux défis spécifiques des entreprises locales. Nous comprenons la dimension internationale de Nice et sa réputation d'excellence, et intégrons ces aspects dans chaque projet pour créer des expériences digitales raffinées et performantes.",
  
  accentColor: "blue",
  primaryStat: {
    icon: Palmtree,
    value: "Tourisme",
    label: "tourisme de luxe"
  },
  
  strengths: [
    {
      title: "Expérience premium",
      description: "Sites et applications haut de gamme pour le tourisme de luxe et l'hôtellerie.",
      icon: Hotel
    },
    {
      title: "Immobilier digital",
      description: "Solutions innovantes pour les agences immobilières et promoteurs.",
      icon: Building
    },
    {
      title: "Plateformes événementielles",
      description: "Sites et applications pour festivals, congrès et événements prestigieux.",
      icon: ShoppingBag
    },
    {
      title: "Bien-être connecté",
      description: "Solutions digitales pour cliniques, spas et centres de bien-être.",
      icon: HeartPulse
    }
  ],
  
  focusedServices: [
    {
      name: "Sites web premium",
      description: "Vitrines digitales haut de gamme pour hôtels, restaurants et boutiques de luxe.",
      link: Routes.service.frontend.web,
      icon: Hotel
    },
    {
      name: "Applications immobilières",
      description: "Solutions sur mesure pour la présentation et la gestion de biens d'exception.",
      link: Routes.service.frontend.mobile,
      icon: Building
    },
    {
      name: "Identité visuelle",
      description: "Design UI/UX élégant et soigné pour marques et établissements prestigieux.",
      link: Routes.service.design.ui,
      icon: Palmtree
    }
  ],
  
  testimonials: [],
  
  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "contact@onruntime.com",
    meetingOptions: ["Visioconférence", "Déplacements occasionnels à Nice"]
  },

  stats: [
    {
      label: "Expertise",
      value: "10+",
      description: "Années d'expérience"
    },
    {
      label: "Satisfaction",
      value: "99%",
      description: "Clients satisfaits"
    },
    {
      label: "Délai moyen",
      value: "6-8",
      description: "Semaines de réalisation"
    }
  ],
  
  geo: {
    latitude: "43.7102",
    longitude: "7.2620"
  },
  
  nearbyLocations: ["marseille", "cannes", "monaco", "antibes"]
};

export default niceAgency;