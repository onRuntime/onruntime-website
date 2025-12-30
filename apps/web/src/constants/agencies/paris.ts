import { Agency } from "@/types/agency";
import { Building, Code, Rocket, Landmark, Globe } from "lucide-react";
import Routes from "@/constants/routes";

const parisAgency: Agency = {
  id: "paris",
  name: "Paris",
  region: "Île-de-France",

  keyBusinessSectors: ["startups-tech", "finance", "luxury", "media-communication"],
  localChallenges: [
    "digital-competition",
    "agile-tools-startups",
    "financial-digitalization",
    "luxury-digital-experiences",
    "corporate-transformation"
  ],
  benefits: [
    "startup-expertise",
    "premium-solutions",
    "luxury-finance-understanding",
    "agility-responsiveness",
    "tech-trends-knowledge"
  ],

  accentColor: "magenta",
  primaryStat: {
    key: "innovation",
    icon: Rocket,
    value: "Innovation"
  },

  strengths: [
    { key: "startup-solutions", icon: Rocket },
    { key: "luxury-experiences", icon: Landmark },
    { key: "finance-fintech", icon: Building },
    { key: "international", icon: Globe }
  ],

  focusedServices: [
    { key: "saas-applications", link: Routes.service.frontend.web, icon: Rocket },
    { key: "premium-ecommerce", link: Routes.service.integration.shopify, icon: Landmark },
    { key: "innovative-design", link: Routes.service.design.ui, icon: Code }
  ],

  testimonials: [],

  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "paris@onruntime.com"
  },

  stats: [
    { key: "startups", value: "30+" },
    { key: "luxury-clients", value: "15+" },
    { key: "average-roi", value: "250%" }
  ],

  geo: {
    latitude: "48.856614",
    longitude: "2.3522219"
  },

  nearbyLocations: ["boulogne-billancourt", "nanterre", "saint-denis", "versailles"]
};

export default parisAgency;
