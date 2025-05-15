import { Agency } from "@/types/agency";
import { Ship, Laptop, Leaf, Wind, Building } from "lucide-react";
import Routes from "@/constants/routes";

const nantesAgency: Agency = {
  id: "nantes",
  name: "Nantes",
  region: "Pays de la Loire",
  
  title: "Développement Web à Nantes | Solutions Digitales pour Entreprises Ligériennes",
  description: "Créez votre site web ou application mobile à Nantes. Solutions digitales sur mesure pour les entreprises nantaises, adaptées aux enjeux locaux de votre secteur.",
  
  heroTitle: "Développement Web & Mobile à Nantes",
  heroDescription: "Nous aidons les entreprises de Nantes et des Pays de la Loire à se digitaliser avec des solutions web sur mesure, parfaitement adaptées aux enjeux spécifiques du marché ligérien.",
  
  keyBusinessSectors: ["Tech & Numérique", "Transition écologique", "Industries créatives", "Agroalimentaire"],
  localChallenges: [
    "Forte concurrence dans l'écosystème numérique nantais en pleine expansion",
    "Besoins spécifiques des startups et scale-ups de la French Tech locale",
    "Digitalisation des acteurs de la transition écologique et énergétique",
    "Transformation numérique des industries traditionnelles et agroalimentaires régionales"
  ],
  benefits: [
    "Solutions sur mesure adaptées à l'écosystème numérique nantais",
    "Expertise pointue dans les technologies web innovantes et éco-responsables",
    "Approche agile parfaitement adaptée aux startups et entreprises innovantes",
    "Connaissance approfondie des enjeux de la transition numérique ligérienne",
    "Accompagnement personnalisé tout au long de votre projet digital"
  ],
  
  introText: "Capitale historique de la Bretagne et métropole innovante, Nantes est reconnue pour son dynamisme économique et sa qualité de vie. Son écosystème numérique florissant, ses industries créatives et son engagement dans la transition écologique en font un territoire unique où l'innovation digitale joue un rôle central.",
  
  expertiseText: "Notre équipe conçoit des sites web, applications et solutions digitales parfaitement adaptés aux entreprises nantaises, qu'elles soient des startups innovantes, des acteurs de l'économie responsable ou des entreprises traditionnelles en transformation. Nous comprenons les spécificités du marché local et vous proposons des solutions numériques alignées avec les valeurs d'innovation et de durabilité propres à Nantes.",
  
  whyChooseUs: "Notre connaissance approfondie du marché nantais nous permet de développer des solutions numériques parfaitement adaptées aux défis spécifiques des entreprises locales. Nous comprenons l'esprit d'innovation et l'engagement pour une économie plus responsable qui caractérisent Nantes, et intégrons ces valeurs dans chaque projet digital que nous réalisons.",
  
  accentColor: "blue",
  primaryStat: {
    icon: Laptop,
    value: "Tech",
    label: "numérique nantais"
  },
  
  strengths: [
    {
      title: "Tech innovante",
      description: "Solutions digitales modernes pour startups et scale-ups nantaises.",
      icon: Laptop
    },
    {
      title: "Éco-conception",
      description: "Sites et applications à l'empreinte environnementale maîtrisée.",
      icon: Leaf
    },
    {
      title: "Industrie maritime",
      description: "Digitalisation adaptée aux activités portuaires et fluviales.",
      icon: Ship
    },
    {
      title: "Énergies renouvelables",
      description: "Solutions numériques pour les acteurs de la transition énergétique.",
      icon: Wind
    }
  ],
  
  focusedServices: [
    {
      name: "Web applications",
      description: "Applications web performantes et évolutives pour startups et entreprises innovantes.",
      link: Routes.service.frontend.web,
      icon: Laptop
    },
    {
      name: "Sites éco-conçus",
      description: "Sites web optimisés et durables pour les acteurs de l'économie responsable.",
      link: Routes.service.frontend.web,
      icon: Leaf
    },
    {
      name: "Plateformes métier",
      description: "Solutions sur mesure pour industries traditionnelles en transformation.",
      link: Routes.service.backend.api,
      icon: Building
    }
  ],
  
  testimonials: [],
  
  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "contact@onruntime.com",
    meetingOptions: ["Visioconférence", "Déplacements occasionnels à Nantes"]
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
    latitude: "47.2184",
    longitude: "-1.5536"
  },
  
  nearbyLocations: ["rennes", "angers", "la-rochelle", "saint-nazaire"]
};

export default nantesAgency;