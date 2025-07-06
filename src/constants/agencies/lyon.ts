import { Agency } from "@/types/agency";
import { Building, Code, Database, FlaskConical, Store } from "lucide-react";
import Routes from "@/constants/routes";

const lyonAgency: Agency = {
  id: "lyon",
  name: "Lyon",
  region: "Auvergne-Rhône-Alpes",
  
  title: "Agence Web à Lyon | Solutions Digitales sur Mesure",
  description: "Développement web, mobile et design UI/UX à Lyon. Notre expertise digitale adaptée aux entreprises de Rhône-Alpes pour dynamiser votre présence en ligne.",
  
  heroTitle: "Développement Web & Mobile à Lyon",
  heroDescription: "Transformez votre entreprise lyonnaise avec des solutions digitales innovantes parfaitement adaptées au dynamisme économique de la région Auvergne-Rhône-Alpes.",
  
  keyBusinessSectors: ["Biotechnologie", "Industrie pharmaceutique", "Gastronomie", "Finance"],
  localChallenges: [
    "Digitalisation des PME et ETI industrielles face aux enjeux de l'industrie 4.0",
    "Développement de la visibilité numérique pour les acteurs de la gastronomie lyonnaise",
    "Solutions e-commerce adaptées au commerce local et aux artisans de la région",
    "Applications métier pour les secteurs pharmaceutique et biotech en pleine expansion"
  ],
  benefits: [
    "Expertise sectorielle dans les domaines d'excellence lyonnais (biotech, pharma, gastronomie)",
    "Compréhension des enjeux de digitalisation du bassin industriel rhônalpin",
    "Solutions adaptées aux PME et ETI en transformation numérique",
    "Designs UI/UX reflétant l'identité visuelle et les standards de qualité lyonnais",
    "Connaissance approfondie de l'écosystème numérique local"
  ],
  
  introText: "Implantée au cœur du dynamisme lyonnais, notre expertise digitale accompagne les entreprises de la région dans leur transformation numérique. Entre tradition industrielle, excellence biomédicale et rayonnement gastronomique, Lyon présente un tissu économique riche et diversifié dont nous comprenons parfaitement les enjeux.",
  
  expertiseText: "Nous créons des solutions web, mobile et e-commerce adaptées aux spécificités du marché lyonnais et rhônalpin. Notre équipe maîtrise les défis numériques propres aux secteurs d'excellence de la région, des biotechnologies à la gastronomie, en passant par l'industrie manufacturière.",
  
  whyChooseUs: "Notre connaissance du marché lyonnais nous permet de développer des solutions numériques parfaitement alignées avec les exigences et les particularités des entreprises locales. Nous comprenons les standards d'excellence de la région et proposons un accompagnement digital qui valorise l'identité et le savoir-faire lyonnais.",
  
  accentColor: "blue",
  primaryStat: {
    icon: FlaskConical,
    value: "Biotech",
    label: "secteur d'innovation"
  },
  
  strengths: [
    {
      title: "Solutions Biotech & Pharma",
      description: "Applications spécialisées pour le pôle santé lyonnais.",
      icon: FlaskConical
    },
    {
      title: "E-commerce gastronomique",
      description: "Valorisation digitale des produits du terroir rhônalpin.",
      icon: Store
    },
    {
      title: "Applications industrielles",
      description: "Outils numériques pour l'industrie 4.0 et la production.",
      icon: Building
    },
    {
      title: "Interfaces métier",
      description: "Design UI/UX adaptés aux besoins spécifiques lyonnais.",
      icon: Code
    }
  ],
  
  focusedServices: [
    {
      name: "Applications métier biotech",
      description: "Solutions digitales pour les laboratoires et entreprises pharmaceutiques lyonnaises.",
      link: Routes.service.frontend.web,
      icon: FlaskConical
    },
    {
      name: "E-commerce gastronomique",
      description: "Plateformes de vente en ligne pour valoriser l'excellence culinaire lyonnaise.",
      link: Routes.service.integration.shopify,
      icon: Store
    },
    {
      name: "Digitalisation industrielle",
      description: "Outils de pilotage et solutions IoT pour l'industrie rhônalpine.",
      link: Routes.service.backend.api,
      icon: Database
    }
  ],
  
  testimonials: [],
  
  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "contact@onruntime.com",
    meetingOptions: ["Visioconférence", "Déplacements occasionnels à Lyon"]
  },
  
  stats: [
    {
      label: "Projets biotech",
      value: "15+",
      description: "Applications spécialisées"
    },
    {
      label: "Satisfaction",
      value: "97%",
      description: "Clients satisfaits"
    },
    {
      label: "PME accompagnées",
      value: "45+",
      description: "Entreprises lyonnaises"
    }
  ],
  
  geo: {
    latitude: "45.764043",
    longitude: "4.835659"
  },
  
  nearbyLocations: ["saint-etienne", "grenoble", "valence", "chambery"]
};

export default lyonAgency;