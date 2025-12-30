import { Agency } from "@/types/agency";
import { Microscope, GraduationCap, Wine, Palmtree } from "lucide-react";
import Routes from "@/constants/routes";

const montpellierAgency: Agency = {
  id: "montpellier",
  name: "Montpellier",
  region: "Occitanie",

  keyBusinessSectors: ["health-biotech", "higher-education", "viticulture", "tourism"],
  localChallenges: [
    "biotech-health-digitalization",
    "innovative-educational-platforms",
    "wine-heritage-digital-showcase",
    "tourism-adaptation"
  ],
  benefits: [
    "health-sector-solutions",
    "educational-platforms-expertise",
    "languedoc-market-knowledge",
    "regional-products-ui",
    "personalized-support"
  ],

  accentColor: "magenta",
  primaryStat: {
    key: "health",
    icon: Microscope,
    value: "Santé"
  },

  strengths: [
    { key: "connected-health", icon: Microscope },
    { key: "elearning", icon: GraduationCap },
    { key: "digital-terroir", icon: Wine },
    { key: "regional-tourism", icon: Palmtree }
  ],

  focusedServices: [
    { key: "health-applications", link: Routes.service.frontend.mobile, icon: Microscope },
    { key: "educational-platforms", link: Routes.service.frontend.web, icon: GraduationCap },
    { key: "terroir-ecommerce", link: Routes.service.integration.shopify, icon: Wine }
  ],

  testimonials: [],

  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "contact@onruntime.com"
  },

  stats: [
    { key: "expertise", value: "10+" },
    { key: "satisfaction", value: "98%" },
    { key: "average-time", value: "6-8" }
  ],

  geo: {
    latitude: "43.6108",
    longitude: "3.8767"
  },

  nearbyLocations: ["nimes", "toulouse", "marseille", "perpignan"]
};

export default montpellierAgency;
