import { Agency } from "@/types/agency";
import { Building, Code, Rocket, Landmark, Globe } from "lucide-react";
import Routes from "@/constants/routes";

const parisAgency: Agency = {
  id: "paris",
  name: "Paris",
  region: "Île-de-France",
  
  title: "Agence Web à Paris | Développement Web, Mobile & Design UI/UX",
  description: "Votre partenaire digital au cœur de Paris. Solutions de développement web, mobile et design UI/UX pour accélérer la croissance de votre entreprise parisienne.",
  
  heroTitle: "Développement Digital dans la Capitale",
  heroDescription: "Transformez votre présence numérique avec des solutions innovantes adaptées au marché parisien compétitif et son écosystème dynamique de startups, grands groupes et entreprises innovantes.",
  
  keyBusinessSectors: ["Startups Tech", "Finance", "Luxe", "Médias & Communication"],
  localChallenges: [
    "Forte concurrence digitale sur le marché parisien nécessitant des solutions différenciantes",
    "Besoins d'outils agiles et performants pour les startups en hypercroissance",
    "Digitalisation des services financiers traditionnels face aux fintechs",
    "Développement d'expériences digitales premium pour le secteur du luxe parisien",
    "Solutions innovantes pour les grands groupes en transformation numérique"
  ],
  benefits: [
    "Expertise pointue des dernières technologies adaptées à l'écosystème startup parisien",
    "Solutions premium répondant aux exigences élevées du marché de la capitale",
    "Compréhension des codes du luxe et de la finance pour des expériences numériques sur mesure",
    "Agilité et réactivité pour accompagner le rythme intensif des entreprises parisiennes",
    "Connaissance approfondie des tendances et innovations de la tech française"
  ],
  
  introText: "Au cœur de la capitale française, notre expertise digitale répond aux exigences du marché parisien avec des solutions web et mobile innovantes. Entre grands groupes, entreprises du luxe et startups en pleine croissance, Paris concentre un écosystème numérique dynamique dont nous comprenons parfaitement les enjeux et les opportunités.",
  
  expertiseText: "Nous concevons des expériences digitales premium qui répondent aux standards élevés des entreprises parisiennes. Notre équipe maîtrise les défis spécifiques de la capitale, qu'il s'agisse de créer des interfaces utilisateur raffinées pour le secteur du luxe, des applications performantes pour les fintechs, ou des solutions évolutives pour les startups en hypercroissance.",
  
  whyChooseUs: "Notre connaissance approfondie du marché parisien nous permet de développer des solutions digitales parfaitement alignées avec les exigences des entreprises de la capitale. Nous combinons innovation technique, excellence créative et compréhension business pour vous accompagner efficacement dans un environnement hautement compétitif.",
  
  accentColor: "magenta",
  primaryStat: {
    icon: Rocket,
    value: "Innovation",
    label: "startup & tech"
  },
  
  strengths: [
    {
      title: "Solutions Startup",
      description: "Applications évolutives pour entreprises en forte croissance.",
      icon: Rocket
    },
    {
      title: "Expériences Luxe",
      description: "Interfaces premium pour marques et services haut de gamme.",
      icon: Landmark
    },
    {
      title: "Finance & Fintech",
      description: "Solutions sécurisées pour le secteur financier parisien.",
      icon: Building
    },
    {
      title: "International",
      description: "Développement multilingue adapté aux entreprises globales.",
      icon: Globe
    }
  ],

  focusedServices: [
    {
      name: "Applications SaaS",
      description: "Développement de solutions cloud innovantes pour startups et scale-ups.",
      link: Routes.service.frontend.web,
      icon: Rocket
    },
    {
      name: "E-commerce premium",
      description: "Plateformes de vente haut de gamme pour les marques de luxe parisiennes.",
      link: Routes.service.integration.shopify,
      icon: Landmark
    },
    {
      name: "Design UI/UX innovant",
      description: "Interfaces utilisateur modernes et différenciantes pour se démarquer à Paris.",
      link: Routes.service.design.ui,
      icon: Code
    }
  ],
  
  testimonials: [],
  
  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "paris@onruntime.com",
    meetingOptions: ["Visioconférence", "Rencontres à Paris"]
  },
  
  stats: [
    {
      label: "Startups",
      value: "30+",
      description: "Projets pour startups"
    },
    {
      label: "Clients luxe",
      value: "15+",
      description: "Marques premium"
    },
    {
      label: "ROI moyen",
      value: "250%",
      description: "Retour sur investissement"
    }
  ],
  
  geo: {
    latitude: "48.856614",
    longitude: "2.3522219"
  },
  
  nearbyLocations: ["boulogne-billancourt", "nanterre", "saint-denis", "versailles"]
};

export default parisAgency;