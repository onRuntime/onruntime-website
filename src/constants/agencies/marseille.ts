import { Agency } from "@/types/agency";
import { Building, Image, Ship, Sun, User } from "lucide-react";
import Routes from "@/constants/routes";

const marseilleAgency: Agency = {
  id: "marseille",
  name: "Marseille",
  region: "Provence-Alpes-Côte d'Azur",
  
  title: "Développement Web à Marseille | Solutions Digitales pour Entreprises Provençales",
  description: "Créez votre site web ou application mobile à Marseille. Solutions digitales sur mesure pour les entreprises provençales, adaptées aux enjeux locaux de votre secteur.",
  
  heroTitle: "Développement Web & Mobile à Marseille",
  heroDescription: "Nous aidons les entreprises de Marseille et de la région PACA à se digitaliser avec des solutions web sur mesure, parfaitement adaptées aux enjeux spécifiques du marché méditerranéen.",
  
  keyBusinessSectors: ["Tourisme", "Maritime", "Commerce local", "Restauration"],
  localChallenges: [
    "Forte concurrence dans le secteur touristique méditerranéen nécessitant une présence digitale distinctive",
    "Besoin de solutions numériques adaptées au commerce maritime et portuaire",
    "Digitalisation des commerces locaux face aux grandes chaînes",
    "Nécessité de solutions e-commerce adaptées pour valoriser l'artisanat et les produits locaux"
  ],
  benefits: [
    "Solutions sur mesure adaptées aux spécificités des entreprises provençales",
    "Expertise pointue dans les secteurs du tourisme et maritime",
    "Interface utilisateur optimisée pour une clientèle internationale",
    "Connaissance approfondie des enjeux économiques méditerranéens",
    "Accompagnement personnalisé tout au long de votre projet digital"
  ],
  
  introText: "Entre mer et collines, Marseille est un carrefour économique dynamique où tradition et innovation se rencontrent. Notre expertise digitale permet aux entreprises marseillaises de se démarquer dans un marché méditerranéen compétitif et en constante évolution.",
  
  expertiseText: "Notre équipe conçoit des sites web, applications et solutions e-commerce parfaitement adaptés aux entreprises marseillaises. Nous comprenons les défis de votre marché local et vous proposons des solutions digitales qui valorisent votre identité provençale tout en touchant une clientèle internationale.",
  
  whyChooseUs: "Notre connaissance approfondie du marché provençal nous permet de développer des solutions numériques parfaitement adaptées aux défis spécifiques des entreprises locales. Nous comprenons la richesse culturelle et économique de Marseille et l'intégrons dans chaque projet pour créer des expériences digitales authentiques et performantes.",
  
  accentColor: "magenta",
  primaryStat: {
    icon: Sun,
    value: "Tourisme",
    label: "secteur touristique"
  },
  
  strengths: [
    {
      title: "Expérience touristique",
      description: "Sites et applications optimisés pour le secteur touristique méditerranéen.",
      icon: Sun
    },
    {
      title: "E-commerce local",
      description: "Solutions de vente en ligne pour artisans et commerçants provençaux.",
      icon: Building
    },
    {
      title: "Secteur maritime",
      description: "Digitalisation adaptée aux activités portuaires et nautiques.",
      icon: Ship
    },
    {
      title: "Design méditerranéen",
      description: "Interfaces modernes reflétant l'identité visuelle méditerranéenne.",
      icon: Image
    }
  ],
  
  focusedServices: [
    {
      name: "Sites web touristiques",
      description: "Vitrines digitales multilingues pour hôtels, restaurants et activités touristiques.",
      link: Routes.service.frontend.web,
      icon: Sun
    },
    {
      name: "E-commerce provençal",
      description: "Boutiques en ligne adaptées aux producteurs et artisans locaux.",
      link: Routes.service.integration.shopify,
      icon: Building
    },
    {
      name: "Applications mobiles",
      description: "Solutions mobiles pour enrichir l'expérience touristique et commerciale.",
      link: Routes.service.frontend.mobile,
      icon: User
    }
  ],
  
  testimonials: [],
  
  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "contact@onruntime.com",
    meetingOptions: ["Visioconférence", "Déplacements occasionnels à Marseille"]
  },

  stats: [
    {
      label: "Expertise",
      value: "10+",
      description: "Années d'expérience"
    },
    {
      label: "Satisfaction",
      value: "98%",
      description: "Clients satisfaits"
    },
    {
      label: "Délai moyen",
      value: "6-8",
      description: "Semaines de réalisation"
    }
  ],
  
  geo: {
    latitude: "43.296482",
    longitude: "5.369780"
  },
  
  nearbyLocations: ["nice", "montpellier", "toulon", "aix-en-provence"]
};

export default marseilleAgency;