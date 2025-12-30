import { Agency } from "@/types/agency";
import { Plane, School, Store, Rocket } from "lucide-react";
import Routes from "@/constants/routes";

const toulouseAgency: Agency = {
  id: "toulouse",
  name: "Toulouse",
  region: "Occitanie",

  keyBusinessSectors: ["aeronautics", "space", "tech", "education"],
  localChallenges: [
    "aerospace-transformation",
    "startup-platforms",
    "elearning-development",
    "local-commerce-adaptation"
  ],
  benefits: [
    "high-tech-solutions",
    "complex-interfaces-expertise",
    "startup-ecosystem-knowledge",
    "agile-approach",
    "personalized-support"
  ],

  accentColor: "blue",
  primaryStat: {
    key: "innovation",
    icon: Rocket,
    value: "Innovation"
  },

  strengths: [
    { key: "aeronautics-solutions", icon: Plane },
    { key: "startup-platforms", icon: Rocket },
    { key: "elearning", icon: School },
    { key: "local-commerce", icon: Store }
  ],

  focusedServices: [
    { key: "business-applications", link: Routes.service.frontend.desktop, icon: Plane },
    { key: "innovative-websites", link: Routes.service.frontend.web, icon: Rocket },
    { key: "ecommerce-platforms", link: Routes.service.integration.shopify, icon: Store }
  ],

  testimonials: [],

  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "contact@onruntime.com"
  },

  stats: [
    { key: "expertise", value: "10+" },
    { key: "satisfaction", value: "98%" },
    { key: "average-time", value: "5-7" }
  ],

  geo: {
    latitude: "43.604652",
    longitude: "1.444209"
  },

  nearbyLocations: ["bordeaux", "montpellier", "pau", "carcassonne"]
};

export default toulouseAgency;
