import { Agency } from "@/types/agency";
import { Microscope, GraduationCap, Wine, Palmtree } from "lucide-react";
import Routes from "@/constants/routes";

const montpellierAgency: Agency = {
  id: "montpellier",
  name: "Montpellier",
  region: "Occitanie",
  
  title: "Développement Web à Montpellier | Solutions Digitales pour Entreprises Languedociennes",
  description: "Créez votre site web ou application mobile à Montpellier. Solutions digitales sur mesure pour les entreprises montpelliéraines, adaptées aux enjeux locaux de votre secteur.",
  
  heroTitle: "Développement Web & Mobile à Montpellier",
  heroDescription: "Nous aidons les entreprises de Montpellier et du Languedoc à se digitaliser avec des solutions web sur mesure, parfaitement adaptées aux enjeux spécifiques du marché régional.",
  
  keyBusinessSectors: ["Santé & Biotechnologies", "Enseignement supérieur", "Viticulture", "Tourisme"],
  localChallenges: [
    "Digitalisation du secteur des biotechnologies et de la santé en pleine expansion",
    "Besoin de plateformes éducatives innovantes pour les nombreuses universités et écoles",
    "Valorisation numérique du patrimoine viticole et des produits du terroir",
    "Adaptation des acteurs du tourisme face à la concurrence méditerranéenne"
  ],
  benefits: [
    "Solutions sur mesure adaptées aux entreprises innovantes du secteur santé",
    "Expertise pointue dans les plateformes éducatives et les outils e-learning",
    "Connaissance approfondie du marché languedocien et de ses spécificités",
    "Interfaces utilisateur optimisées pour valoriser les produits régionaux",
    "Accompagnement personnalisé tout au long de votre projet digital"
  ],
  
  introText: "Ville dynamique à la croisée des influences méditerranéennes et languedociennes, Montpellier se distingue par son écosystème d'innovation en santé, ses universités prestigieuses et son art de vivre. Notre expertise digitale permet aux entreprises montpelliéraines de tirer parti de cette richesse et de se démarquer dans un environnement compétitif.",
  
  expertiseText: "Notre équipe conçoit des sites web, applications et solutions digitales parfaitement adaptés aux entreprises de Montpellier et sa région. Nous comprenons les défis spécifiques de votre marché local, qu'il s'agisse du secteur de la santé, de l'éducation ou du terroir languedocien, et vous proposons des solutions numériques qui valorisent votre expertise et votre ancrage régional.",
  
  whyChooseUs: "Notre connaissance approfondie du marché montpelliérain nous permet de développer des solutions numériques parfaitement adaptées aux défis spécifiques des entreprises locales. Nous comprenons l'équilibre entre innovation et tradition qui caractérise Montpellier, et intégrons cette compréhension dans chaque projet pour créer des expériences digitales authentiques et performantes.",
  
  accentColor: "magenta",
  primaryStat: {
    icon: Microscope,
    value: "Santé",
    label: "biotechnologies"
  },
  
  strengths: [
    {
      title: "Santé connectée",
      description: "Solutions digitales pour startups et entreprises des sciences de la vie.",
      icon: Microscope
    },
    {
      title: "E-learning",
      description: "Plateformes pédagogiques pour universités et établissements de formation.",
      icon: GraduationCap
    },
    {
      title: "Terroir digital",
      description: "Sites et e-commerce pour domaines viticoles et producteurs locaux.",
      icon: Wine
    },
    {
      title: "Tourisme régional",
      description: "Expériences numériques pour valoriser le patrimoine languedocien.",
      icon: Palmtree
    }
  ],
  
  focusedServices: [
    {
      name: "Applications santé",
      description: "Solutions sur mesure pour startups et entreprises du secteur des sciences de la vie.",
      link: Routes.service.frontend.mobile,
      icon: Microscope
    },
    {
      name: "Plateformes éducatives",
      description: "Outils d'apprentissage digitaux pour établissements d'enseignement.",
      link: Routes.service.frontend.web,
      icon: GraduationCap
    },
    {
      name: "E-commerce terroir",
      description: "Boutiques en ligne pour producteurs locaux et domaines viticoles.",
      link: Routes.service.integration.shopify,
      icon: Wine
    }
  ],
  
  testimonials: [],
  
  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "contact@onruntime.com",
    meetingOptions: ["Visioconférence", "Déplacements occasionnels à Montpellier"]
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
    latitude: "43.6108",
    longitude: "3.8767"
  },
  
  nearbyLocations: ["nimes", "toulouse", "marseille", "perpignan"]
};

export default montpellierAgency;