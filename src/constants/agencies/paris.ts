// src/constants/agencies/paris.ts
import { Agency } from "@/types/agency";
import { Building, MapPin, Users, Rocket } from "lucide-react";
import Routes from "@/constants/routes";

const parisAgency: Agency = {
  id: "paris",
  name: "Paris",
  region: "Île-de-France",
  population: 2161000,
  
  // SEO Content
  title: "Agence Web à Paris | Développement Web, Mobile & Design UI/UX",
  description: "Votre partenaire digital à Paris pour tous vos projets web, mobile et design UI/UX. Expertise locale et solutions digitales personnalisées dans la capitale.",
  
  // Optional hero overrides
  heroTitle: "Agence web à Paris",
  heroDescription: "Notre équipe travaille à distance avec les entreprises parisiennes tout en maîtrisant parfaitement l'écosystème numérique local. Nous accompagnons startups et entreprises dans un écosystème dynamique comptant plus de 3000 startups dans la région.",
  
  // Page content sections
  introText: "Située au cœur de Paris, notre agence digitale combine créativité parisienne et expertise technique pour transformer vos idées en solutions digitales performantes. En plein centre de l'innovation française, nous accompagnons startups, PME et grands groupes parisiens dans leur transformation numérique.",
  expertiseText: "Notre équipe parisienne maîtrise les dernières technologies du web et du mobile pour créer des expériences utilisateur exceptionnelles. Nous comprenons les spécificités du marché parisien et ses exigences en matière d'innovation et d'excellence.",
  whyChooseUs: "Choisir onRuntime Studio à Paris, c'est opter pour une agence qui comprend les défis spécifiques des entreprises parisiennes. Notre proximité avec l'écosystème startup et tech de la capitale nous permet de vous apporter des solutions adaptées à votre contexte et à vos ambitions.",
  
  // Visual and design elements
  accentColor: "blue",
  primaryStat: {
    icon: Building,
    value: "French Tech Paris",
    label: "Écosystème"
  },
  
  // Key features
  strengths: [
    {
      title: "Au cœur de l'innovation parisienne",
      description: "Notre équipe parisienne est immergée dans l'un des écosystèmes tech les plus dynamiques d'Europe.",
      icon: Rocket
    },
    {
      title: "Réseau local étendu",
      description: "Bénéficiez de notre réseau de partenaires et d'experts parisiens pour enrichir votre projet.",
      icon: Users
    },
    {
      title: "Expertise secteurs de pointe",
      description: "Fintech, luxe, retail, médias: nous connaissons les enjeux des industries parisiennes.",
      icon: Building
    },
    {
      title: "Agilité métropolitaine",
      description: "Notre méthodologie s'adapte au rythme intense de la capitale et de ses entreprises.",
      icon: MapPin
    }
  ],
  
  // Featured services
  focusedServices: [
    {
      name: "Design UI/UX premium",
      description: "Des interfaces élégantes qui reflètent l'excellence attendue des marques parisiennes.",
      link: Routes.service.design.root,
      icon: Rocket
    },
    {
      name: "Développement d'applications mobiles",
      description: "Applications iOS et Android performantes pour conquérir le marché parisien exigeant.",
      link: Routes.service.frontend.mobile,
      icon: Users
    },
    {
      name: "Solutions e-commerce haut de gamme",
      description: "Boutiques en ligne sophistiquées avec Shopify et solutions sur mesure.",
      link: Routes.service.integration.shopify,
      icon: Building
    }
  ],
  
  // Local projects
  localProjects: [
    {
      name: "Plateforme de réservation événementielle",
      description: "Application de découverte et réservation d'événements culturels parisiens, utilisée par plus de 50 000 habitants.",
      imageUrl: "/static/images/projects/tonightpass/thumbnail.jpg",
      tags: ["Mobile", "Web", "Design UI/UX"]
    },
    {
      name: "Site vitrine pour créateur parisien",
      description: "Création d'un site showcase pour un créateur de mode du Marais, avec système de prise de rendez-vous intégré.",
      imageUrl: "/static/images/agency/paris-project-fashion.jpg",
      tags: ["Web", "Design UI/UX"]
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      name: "Sophie Martin",
      role: "Directrice Marketing",
      company: "Mode Élégance Paris",
      text: "L'équipe d'onRuntime à Paris a parfaitement saisi l'essence de notre marque parisienne. Leur design élégant et fonctionnel a transformé notre présence en ligne.",
      imageUrl: "/static/images/testimonials/sophie-martin.jpg"
    },
    {
      name: "Thomas Dubois",
      role: "Fondateur",
      company: "TechStart Paris",
      text: "Leur connaissance de l'écosystème startup parisien nous a permis de développer une solution parfaitement adaptée à notre marché cible dans la capitale.",
      imageUrl: "/static/images/testimonials/thomas-dubois.jpg"
    }
  ],
  
  // Contact information
  contactInfo: {
    address: "16 Rue du Faubourg Saint-Denis, 75010 Paris",
    phone: "+33 7 56 90 93 75",
    email: "paris@onruntime.com",
    meetingPoints: ["Station F", "WeWork La Fayette", "Café de la Gare"]
  },
  
  // Statistics and metrics
  stats: [
    {
      label: "Startups",
      value: "3000+",
      description: "Dans la région"
    },
    {
      label: "CAC 40",
      value: "30+",
      description: "Entreprises"
    },
    {
      label: "Tech Hubs",
      value: "5+",
      description: "Incubateurs"
    },
    {
      label: "Projets parisiens",
      value: "75+",
      description: "Réalisations pour des clients de Paris"
    },
    {
      label: "Startups accompagnées",
      value: "30+",
      description: "Jeunes pousses parisiennes"
    },
    {
      label: "Satisfaction client",
      value: "98%",
      description: "De clients satisfaits à Paris"
    }
  ],
  
  // Geographical information
  geo: {
    latitude: "48.856614",
    longitude: "2.3522219"
  },
  
  // Related cities
  nearbyLocations: ["boulogne-billancourt", "saint-denis", "montreuil", "versailles"]
};

export default parisAgency;