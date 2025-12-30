import { Agency } from "@/types/agency";
import { Palmtree, Building, Hotel, ShoppingBag, HeartPulse } from "lucide-react";
import Routes from "@/constants/routes";

const niceAgency: Agency = {
  id: "nice",
  name: "Nice",
  region: "Provence-Alpes-Côte d'Azur",

  keyBusinessSectors: ["luxury-tourism", "real-estate", "events", "health-wellness"],
  localChallenges: [
    "luxury-tourism-digitalization",
    "innovative-real-estate-solutions",
    "events-digital-showcase",
    "health-wellness-transformation"
  ],
  benefits: [
    "international-clientele-solutions",
    "premium-interfaces-expertise",
    "azurean-market-knowledge",
    "multilingual-applications",
    "personalized-support"
  ],

  accentColor: "blue",
  primaryStat: {
    key: "primary-stat",
    icon: Palmtree
  },

  strengths: [
    { key: "premium-experience", icon: Hotel },
    { key: "digital-real-estate", icon: Building },
    { key: "event-platforms", icon: ShoppingBag },
    { key: "connected-wellness", icon: HeartPulse }
  ],

  focusedServices: [
    { key: "premium-websites", link: Routes.service.frontend.web, icon: Hotel },
    { key: "real-estate-applications", link: Routes.service.frontend.mobile, icon: Building },
    { key: "visual-identity", link: Routes.service.design.ui, icon: Palmtree }
  ],

  testimonials: [],

  contactInfo: {
    phone: "+33 7 56 90 93 75",
    email: "contact@onruntime.com"
  },

  stats: [
    { key: "expertise", value: "10+" },
    { key: "satisfaction", value: "99%" },
    { key: "average-time", value: "6-8" }
  ],

  geo: {
    latitude: "43.7102",
    longitude: "7.2620"
  },

  nearbyLocations: ["marseille", "cannes", "monaco", "antibes"]
};

export default niceAgency;
