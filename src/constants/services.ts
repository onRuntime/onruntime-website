import { Service, ServiceCategory } from "@/types/service";
import Routes from "./routes";
import { 
  Palette, 
  Code, 
  Layers, 
  Server,
  Paintbrush,
  LayoutTemplate,
  Smartphone,
  FileCode,
  ShoppingBag,
  Globe,
  Box,
  Cloud,
  Bot,
  Database
} from "lucide-react";

const Services: Service[] = [
  {
    id: ServiceCategory.DESIGN,
    name: "Design UI/UX",
    description: "Création d'interfaces modernes et d'expériences utilisateur optimales",
    icon: Palette,
    subServices: [
      {
        id: "moodboard",
        name: "Moodboard",
        description: "Définition de l'identité visuelle et de l'ambiance de votre projet",
        route: Routes.service.design.moodboard,
        icon: Paintbrush,
      },
      {
        id: "wireframes",
        name: "Wireframes",
        description: "Conception de la structure et du parcours utilisateur",
        route: Routes.service.design.wireframes,
        icon: LayoutTemplate,
      },
      {
        id: "ui",
        name: "Maquettage UI",
        description: "Design détaillé des interfaces utilisateur",
        route: Routes.service.design.ui,
        icon: Smartphone,
      },
      {
        id: "branding",
        name: "Charte graphique",
        description: "Création de votre identité visuelle complète",
        route: Routes.service.design.branding,
        icon: Palette,
      },
      {
        id: "audit",
        name: "Audit UX/UI",
        description: "Analyse et optimisation de vos interfaces existantes",
        route: Routes.service.design.audit,
        icon: FileCode,
      },
    ],
  },
  {
    id: ServiceCategory.INTEGRATION,
    name: "Intégration",
    description: "Intégration sur les principales plateformes e-commerce et CMS",
    icon: Layers,
    subServices: [
      {
        id: "shopify",
        name: "Shopify",
        description: "Création et personnalisation de boutiques en ligne Shopify",
        route: Routes.service.integration.shopify,
        icon: ShoppingBag,
      },
      {
        id: "wordpress",
        name: "WordPress",
        description: "Développement de sites WordPress sur mesure",
        route: Routes.service.integration.wordpress,
        icon: Globe,
      },
      {
        id: "webflow",
        name: "Webflow",
        description: "Création de sites web modernes avec Webflow",
        route: Routes.service.integration.webflow,
        icon: Box,
      },
      {
        id: "squarespace",
        name: "SquareSpace",
        description: "Intégration et personnalisation sur SquareSpace",
        route: Routes.service.integration.squarespace,
        icon: Layers,
      },
      {
        id: "prestashop",
        name: "PrestaShop",
        description: "Développement de boutiques PrestaShop",
        route: Routes.service.integration.prestashop,
        icon: ShoppingBag,
      },
    ],
  },
  {
    id: ServiceCategory.FRONTEND,
    name: "Développement Front-end",
    description: "Création d'applications web et mobiles performantes",
    icon: Code,
    subServices: [
      {
        id: "web",
        name: "Applications Web",
        description: "Développement d'applications web modernes avec React et Next.js",
        route: Routes.service.frontend.web,
        icon: Globe,
      },
      {
        id: "mobile",
        name: "Applications Mobiles",
        description: "Création d'applications mobiles natives avec React Native",
        route: Routes.service.frontend.mobile,
        icon: Smartphone,
      },
      {
        id: "desktop",
        name: "Logiciels de Bureau",
        description: "Développement d'applications desktop multiplateforme",
        route: Routes.service.frontend.desktop,
        icon: Box,
      },
      {
        id: "pwa",
        name: "Progressive Web Apps",
        description: "Création d'applications web progressives performantes",
        route: Routes.service.frontend.pwa,
        icon: Globe,
      },
    ],
  },
  {
    id: ServiceCategory.BACKEND,
    name: "Développement Back-end",
    description: "Architecture et développement de solutions robustes",
    icon: Server,
    subServices: [
      {
        id: "api",
        name: "APIs RESTful",
        description: "Conception et développement d'APIs performantes",
        route: Routes.service.backend.api,
        icon: Code,
      },
      {
        id: "database",
        name: "Bases de données",
        description: "Architecture et optimisation de bases de données",
        route: Routes.service.backend.database,
        icon: Database,
      },
      {
        id: "bots",
        name: "Bots Discord/Slack",
        description: "Développement de bots et d'automatisations",
        route: Routes.service.backend.bots,
        icon: Bot,
      },
      {
        id: "microservices",
        name: "Microservices",
        description: "Architecture et développement de microservices",
        route: Routes.service.backend.microservices,
        icon: Box,
      },
      {
        id: "cloud",
        name: "Solutions Cloud",
        description: "Déploiement et gestion d'infrastructures cloud",
        route: Routes.service.backend.cloud,
        icon: Cloud,
      },
    ],
  },
];

export default Services;