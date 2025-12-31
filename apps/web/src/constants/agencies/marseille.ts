import { Agency } from "@/types/agency";
import { Building, Image, Ship, Sun, User } from "lucide-react";
import Routes from "@/constants/routes";

const marseilleAgency: Agency = {
  id: "marseille",
  name: "Marseille",
  region: "Provence-Alpes-Côte d'Azur",

  keyBusinessSectors: ["tourism", "maritime", "local-commerce", "restaurant"],
  localChallenges: [
    "tourism-competition",
    "maritime-solutions",
    "local-commerce-digitalization",
    "local-ecommerce"
  ],
  benefits: [
    "custom-solutions",
    "tourism-maritime-expertise",
    "international-ui",
    "mediterranean-knowledge",
    "personalized-support"
  ],

  accentColor: "magenta",
  primaryStat: {
    key: "primary-stat",
    icon: Sun
  },

  strengths: [
    { key: "tourism-experience", icon: Sun },
    { key: "local-ecommerce", icon: Building },
    { key: "maritime-sector", icon: Ship },
    { key: "mediterranean-design", icon: Image }
  ],

  focusedServices: [
    { key: "tourism-websites", link: Routes.service.frontend.web, icon: Sun },
    { key: "provencal-ecommerce", link: Routes.service.integration.shopify, icon: Building },
    { key: "mobile-applications", link: Routes.service.frontend.mobile, icon: User }
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
    latitude: "43.296482",
    longitude: "5.369780"
  },

  nearbyLocations: ["nice", "montpellier", "toulon", "aix-en-provence"]
};

export default marseilleAgency;
