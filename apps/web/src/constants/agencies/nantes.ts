import { Agency } from "@/types/agency";
import { Ship, Laptop, Leaf, Wind, Building } from "lucide-react";
import Routes from "@/constants/routes";

const nantesAgency: Agency = {
  id: "nantes",
  name: "Nantes",
  region: "Pays de la Loire",

  keyBusinessSectors: ["tech-digital", "ecological-transition", "creative-industries", "agrifood"],
  localChallenges: [
    "digital-ecosystem-competition",
    "startup-scaleup-needs",
    "ecological-transition-digitalization",
    "traditional-industries-transformation"
  ],
  benefits: [
    "nantes-ecosystem-solutions",
    "innovative-eco-technologies",
    "agile-approach",
    "digital-transition-knowledge",
    "personalized-support"
  ],

  accentColor: "blue",
  primaryStat: {
    key: "tech",
    icon: Laptop,
    value: "Tech"
  },

  strengths: [
    { key: "innovative-tech", icon: Laptop },
    { key: "eco-design", icon: Leaf },
    { key: "maritime-industry", icon: Ship },
    { key: "renewable-energy", icon: Wind }
  ],

  focusedServices: [
    { key: "web-applications", link: Routes.service.frontend.web, icon: Laptop },
    { key: "eco-designed-websites", link: Routes.service.frontend.web, icon: Leaf },
    { key: "business-platforms", link: Routes.service.backend.api, icon: Building }
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
    latitude: "47.2184",
    longitude: "-1.5536"
  },

  nearbyLocations: ["rennes", "angers", "la-rochelle", "saint-nazaire"]
};

export default nantesAgency;
