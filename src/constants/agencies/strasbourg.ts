import { Agency } from "@/types/agency";
import { Building, Globe, Briefcase, LibraryBig, Warehouse } from "lucide-react";
import Routes from "@/constants/routes";

const strasbourgAgency: Agency = {
  id: "strasbourg",
  name: "Strasbourg",
  region: "Grand Est",
  
  title: "Développement Web à Strasbourg | Solutions Digitales pour Entreprises Alsaciennes",
  description: "Créez votre site web ou application mobile à Strasbourg. Solutions digitales sur mesure pour les entreprises alsaciennes, adaptées aux enjeux locaux et transfrontaliers.",
  
  heroTitle: "Développement Web & Mobile à Strasbourg",
  heroDescription: "Nous aidons les entreprises de Strasbourg et du Grand Est à se digitaliser avec des solutions web sur mesure, parfaitement adaptées aux enjeux spécifiques du marché alsacien et européen.",
  
  keyBusinessSectors: ["Institutions européennes", "Commerce transfrontalier", "Industrie", "Culture & Patrimoine"],
  localChallenges: [
    "Besoins spécifiques des institutions européennes et organisations internationales",
    "Développement du commerce transfrontalier avec l'Allemagne et la Suisse",
    "Transformation digitale des industries traditionnelles alsaciennes",
    "Valorisation numérique du riche patrimoine culturel et historique de la région"
  ],
  benefits: [
    "Solutions multilingues adaptées au contexte international strasbourgeois",
    "Expertise pointue dans les interfaces utilisateur conformes aux normes européennes",
    "Connaissance approfondie des marchés transfrontaliers et de leurs spécificités",
    "Approche à la fois innovante et respectueuse des traditions alsaciennes",
    "Accompagnement personnalisé tout au long de votre projet digital"
  ],
  
  introText: "Capitale européenne et ville frontalière au riche patrimoine, Strasbourg conjugue traditions alsaciennes et ouverture internationale. Son statut de siège d'institutions européennes, son industrie dynamique et sa position stratégique entre France et Allemagne en font un territoire unique où le digital joue un rôle essentiel de passerelle.",
  
  expertiseText: "Notre équipe conçoit des sites web, applications et solutions digitales parfaitement adaptés aux entreprises strasbourgeoises, qu'elles soient des organisations internationales, des entreprises industrielles ou des acteurs du patrimoine local. Nous comprenons les défis spécifiques de votre marché régional et transfrontalier, et vous proposons des solutions numériques multilingues et culturellement adaptées.",
  
  whyChooseUs: "Notre connaissance approfondie du marché strasbourgeois nous permet de développer des solutions numériques parfaitement adaptées aux défis spécifiques des entreprises locales. Nous comprenons les exigences du contexte européen et les particularités culturelles alsaciennes, et intégrons cette double dimension dans chaque projet pour créer des expériences digitales pertinentes et performantes.",
  
  accentColor: "blue",
  primaryStat: {
    icon: Globe,
    value: "Europe",
    label: "contexte international"
  },
  
  strengths: [
    {
      title: "Solutions européennes",
      description: "Plateformes multilingues pour institutions et organisations internationales.",
      icon: Globe
    },
    {
      title: "Commerce transfrontalier",
      description: "Solutions e-commerce adaptées aux marchés français, allemand et suisse.",
      icon: Briefcase
    },
    {
      title: "Industrie 4.0",
      description: "Digitalisation des processus pour l'industrie alsacienne traditionnelle.",
      icon: Warehouse
    },
    {
      title: "Patrimoine numérique",
      description: "Expériences digitales pour valoriser le patrimoine culturel et historique.",
      icon: LibraryBig
    }
  ],
  
  focusedServices: [
    {
      name: "Sites institutionnels",
      description: "Plateformes multilingues conformes aux normes européennes d'accessibilité.",
      link: Routes.service.frontend.web,
      icon: Building
    },
    {
      name: "E-commerce transfrontalier",
      description: "Solutions commerciales adaptées aux spécificités des marchés allemand et français.",
      link: Routes.service.integration.shopify,
      icon: Briefcase
    },
    {
      name: "Applications industrielles",
      description: "Outils numériques sur mesure pour moderniser les process industriels.",
      link: Routes.service.frontend.desktop,
      icon: Warehouse
    }
  ],
  
  testimonials: [],
  
  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "contact@onruntime.com",
    meetingOptions: ["Visioconférence", "Déplacements occasionnels à Strasbourg"]
  },

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
  
  geo: {
    latitude: "48.5734",
    longitude: "7.7521"
  },
  
  nearbyLocations: ["colmar", "mulhouse", "metz", "nancy"]
};

export default strasbourgAgency;