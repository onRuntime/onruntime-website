import { Agency } from "@/types/agency";
import { Plane, School, Store, Rocket } from "lucide-react";
import Routes from "@/constants/routes";

const toulouseAgency: Agency = {
  id: "toulouse",
  name: "Toulouse",
  region: "Occitanie",
  
  title: "Développement Web à Toulouse | Solutions Digitales pour Entreprises Occitanes",
  description: "Créez votre site web ou application mobile à Toulouse. Solutions digitales sur mesure pour les entreprises toulousaines, adaptées aux enjeux locaux de votre secteur.",
  
  heroTitle: "Développement Web & Mobile à Toulouse",
  heroDescription: "Nous aidons les entreprises de Toulouse et de l'Occitanie à se digitaliser avec des solutions web sur mesure, parfaitement adaptées aux enjeux spécifiques du marché toulousain.",
  
  keyBusinessSectors: ["Aéronautique", "Spatial", "Tech", "Education"],
  localChallenges: [
    "Transformation digitale des entreprises de l'écosystème aéronautique et spatial",
    "Besoin de plateformes innovantes pour les startups de la French Tech toulousaine",
    "Développement de solutions e-learning pour les nombreux établissements d'enseignement",
    "Adaptation des commerces locaux face à la concurrence des grandes enseignes nationales"
  ],
  benefits: [
    "Solutions sur mesure adaptées aux industries de haute technologie",
    "Expertise pointue dans le développement d'interfaces complexes",
    "Connaissance approfondie de l'écosystème startup toulousain",
    "Approche agile parfaitement adaptée aux projets innovants",
    "Accompagnement personnalisé tout au long de votre projet digital"
  ],
  
  introText: "Capitale européenne de l'aéronautique et ville étudiante dynamique, Toulouse présente un écosystème économique unique où innovation et tradition se côtoient. Notre expertise digitale permet aux entreprises toulousaines de se démarquer dans un environnement compétitif en constante évolution technologique.",
  
  expertiseText: "Notre équipe conçoit des sites web, applications et solutions digitales parfaitement adaptés aux entreprises toulousaines, qu'elles soient des géants de l'aéronautique, des startups innovantes ou des commerces traditionnels. Nous comprenons les défis spécifiques de votre marché local et vous proposons des solutions technologiques de pointe.",
  
  whyChooseUs: "Notre connaissance approfondie du marché toulousain nous permet de développer des solutions numériques parfaitement adaptées aux défis spécifiques des entreprises locales. Nous comprenons les enjeux technologiques de la Ville Rose et intégrons cette expertise dans chaque projet pour créer des expériences digitales performantes et tournées vers le futur.",
  
  accentColor: "blue",
  primaryStat: {
    icon: Rocket,
    value: "Innovation",
    label: "secteur technologique"
  },
  
  strengths: [
    {
      title: "Solutions aéronautiques",
      description: "Applications et interfaces adaptées aux besoins spécifiques du secteur aérospatial.",
      icon: Plane
    },
    {
      title: "Plateformes startups",
      description: "Solutions digitales agiles et évolutives pour les startups innovantes.",
      icon: Rocket
    },
    {
      title: "E-learning",
      description: "Plateformes pédagogiques pour les établissements d'enseignement supérieur.",
      icon: School
    },
    {
      title: "Commerce local",
      description: "Digitalisation sur mesure pour les commerces et artisans toulousains.",
      icon: Store
    }
  ],
  
  focusedServices: [
    {
      name: "Applications métier",
      description: "Solutions sur mesure pour l'industrie aéronautique et les entreprises technologiques.",
      link: Routes.service.frontend.desktop,
      icon: Plane
    },
    {
      name: "Sites web innovants",
      description: "Vitrines digitales modernes pour startups et entreprises innovantes.",
      link: Routes.service.frontend.web,
      icon: Rocket
    },
    {
      name: "Plateformes e-commerce",
      description: "Solutions complètes pour les commerces locaux souhaitant se digitaliser.",
      link: Routes.service.integration.shopify,
      icon: Store
    }
  ],
  
  testimonials: [],
  
  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "contact@onruntime.com",
    meetingOptions: ["Visioconférence", "Déplacements occasionnels à Toulouse"]
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
      value: "5-7",
      description: "Semaines de réalisation"
    }
  ],
  
  geo: {
    latitude: "43.604652",
    longitude: "1.444209"
  },
  
  nearbyLocations: ["bordeaux", "montpellier", "pau", "carcassonne"]
};

export default toulouseAgency;