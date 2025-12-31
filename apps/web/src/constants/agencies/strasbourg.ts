import { Agency } from "@/types/agency";
import { Building, Globe, Briefcase, LibraryBig, Warehouse } from "lucide-react";
import Routes from "@/constants/routes";

const strasbourgAgency: Agency = {
  id: "strasbourg",
  name: "Strasbourg",
  region: "Grand Est",

  keyBusinessSectors: ["european-institutions", "cross-border-commerce", "industry", "culture-heritage"],
  localChallenges: [
    "european-institutions-needs",
    "cross-border-development",
    "traditional-industries-transformation",
    "heritage-digital-showcase"
  ],
  benefits: [
    "multilingual-solutions",
    "european-standards-expertise",
    "cross-border-knowledge",
    "innovative-traditional-approach",
    "personalized-support"
  ],

  accentColor: "blue",
  primaryStat: {
    key: "primary-stat",
    icon: Globe
  },

  strengths: [
    { key: "european-solutions", icon: Globe },
    { key: "cross-border-commerce", icon: Briefcase },
    { key: "industry-40", icon: Warehouse },
    { key: "digital-heritage", icon: LibraryBig }
  ],

  focusedServices: [
    { key: "institutional-websites", link: Routes.service.frontend.web, icon: Building },
    { key: "cross-border-ecommerce", link: Routes.service.integration.shopify, icon: Briefcase },
    { key: "industrial-applications", link: Routes.service.frontend.desktop, icon: Warehouse }
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
    latitude: "48.5734",
    longitude: "7.7521"
  },

  nearbyLocations: ["colmar", "mulhouse", "metz", "nancy"]
};

export default strasbourgAgency;
