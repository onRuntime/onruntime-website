import { Agency } from "@/types/agency";
import { Building, Code, Database, FlaskConical, Store } from "lucide-react";
import Routes from "@/constants/routes";

const lyonAgency: Agency = {
  id: "lyon",
  name: "Lyon",
  region: "Auvergne-Rhône-Alpes",

  keyBusinessSectors: ["biotech", "pharma", "gastronomy", "finance"],
  localChallenges: [
    "industry-digitalization",
    "gastronomy-visibility",
    "local-ecommerce",
    "biotech-applications"
  ],
  benefits: [
    "sector-expertise",
    "industrial-understanding",
    "sme-solutions",
    "lyon-ui-design",
    "local-ecosystem-knowledge"
  ],

  accentColor: "blue",
  primaryStat: {
    key: "primary-stat",
    icon: FlaskConical
  },

  strengths: [
    { key: "biotech-pharma", icon: FlaskConical },
    { key: "gastronomy-ecommerce", icon: Store },
    { key: "industrial-applications", icon: Building },
    { key: "business-interfaces", icon: Code }
  ],

  focusedServices: [
    { key: "biotech-applications", link: Routes.service.frontend.web, icon: FlaskConical },
    { key: "gastronomy-ecommerce", link: Routes.service.integration.shopify, icon: Store },
    { key: "industrial-digitalization", link: Routes.service.backend.api, icon: Database }
  ],

  testimonials: [],

  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "contact@onruntime.com"
  },

  stats: [
    { key: "biotech-projects", value: "15+" },
    { key: "satisfaction", value: "97%" },
    { key: "sme-supported", value: "45+" }
  ],

  geo: {
    latitude: "45.764043",
    longitude: "4.835659"
  },

  nearbyLocations: ["saint-etienne", "grenoble", "valence", "chambery"]
};

export default lyonAgency;
