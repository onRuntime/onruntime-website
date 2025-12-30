import { Agency } from "@/types/agency";
import { Building, Database, Cloud, Store } from "lucide-react";
import Routes from "@/constants/routes";

const rouenAgency: Agency = {
  id: "rouen",
  name: "Rouen",
  region: "Normandie",

  keyBusinessSectors: ["industry", "agrifood", "logistics", "local-commerce"],
  localChallenges: [
    "traditional-industries-digitalization",
    "logistics-optimization",
    "local-ecommerce-needs",
    "sme-digital-transition"
  ],
  benefits: [
    "normandy-specific-solutions",
    "industrial-agrifood-expertise",
    "competitive-pricing",
    "seine-logistics-knowledge",
    "personalized-support"
  ],

  accentColor: "blue",
  primaryStat: {
    key: "primary-stat",
    icon: Building
  },

  strengths: [
    { key: "industrial-websites", icon: Building },
    { key: "local-ecommerce", icon: Store },
    { key: "business-applications", icon: Database },
    { key: "sme-digitalization", icon: Cloud }
  ],

  focusedServices: [
    { key: "professional-websites", link: Routes.service.frontend.web, icon: Building },
    { key: "regional-ecommerce", link: Routes.service.integration.shopify, icon: Store },
    { key: "business-applications", link: Routes.service.frontend.desktop, icon: Database }
  ],

  testimonials: [],

  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "contact@onruntime.com"
  },

  stats: [
    { key: "expertise", value: "10+" },
    { key: "satisfaction", value: "97%" },
    { key: "average-time", value: "6-8" }
  ],

  geo: {
    latitude: "49.443232",
    longitude: "1.099971"
  },

  nearbyLocations: ["le-havre", "caen", "evreux", "dieppe"]
};

export default rouenAgency;
