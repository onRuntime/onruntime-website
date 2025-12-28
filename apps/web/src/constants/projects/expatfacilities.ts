import { Project, Tag } from "@/types/project";
import { Building2, Globe, Plane, Shield, Users, CreditCard, Smartphone } from "lucide-react";

export const expatFacilitiesProject: Project = {
  id: "expatfacilities",
  name: "Expat Facilities",
  tags: [Tag.CUSTOMER],
  iconUrl: "/static/images/projects/expatfacilities/icon.webp",
  showcaseUrl: "/static/images/projects/expatfacilities/showcase.webp",
  thumbnailUrl: "/static/images/projects/expatfacilities/thumbnail.webp",
  website: "https://www.linkedin.com/company/expatfacilities",
  repository: undefined,
  startDate: "2020-07",
  status: "completed",

  features: [
    { key: "housing-platform", icon: Building2 },
    { key: "ambassador-network", icon: Users },
    { key: "visa-services", icon: Shield },
    { key: "transport-logistics", icon: Plane },
    { key: "expat-insurance", icon: Shield },
    { key: "advanced-tracking", icon: Smartphone },
  ],

  technologies: [
    { key: "nextjs", name: "Next.js", icon: Globe },
    { key: "nestjs", name: "NestJS", icon: Globe },
    { key: "mongodb", name: "MongoDB", icon: Globe },
    { key: "graphql", name: "GraphQL", icon: Globe },
    { key: "google-cloud", name: "Google Cloud", icon: Globe },
    { key: "stripe", name: "Stripe", icon: CreditCard },
    { key: "typescript", name: "TypeScript", icon: Globe },
    { key: "styled-components", name: "Styled Components", icon: Globe },
  ],

  metrics: [
    { key: "countries", value: "70+" },
    { key: "ambassadors", value: "300+" },
    { key: "users", value: "2000+" },
  ],

  team: [
    { ref: "antoine-kingue", role: "Lead Developer" },
    { ref: "lucas-bodin", role: "Lead Designer" },
    { ref: "younes-bessa", role: "Lead Frontend Developer" },
    { ref: "jeremy-baudrin", role: "Lead Backend Developer" },
    { ref: "mareh-mannaa", role: "Marketing & Communication" },
    { ref: "alexis-mouchon", role: "Backend Developer" },
    { ref: "johann-six", role: "Frontend Developer" },
  ],

  screenshots: [
    { key: "redesign", url: "/static/images/projects/expatfacilities/screenshots/redesign.png" },
    { key: "testimonials", url: "/static/images/projects/expatfacilities/screenshots/testimonials.png" },
    { key: "flyer-bank", url: "/static/images/projects/expatfacilities/screenshots/flyer-banque.jpg" },
    { key: "about-team", url: "/static/images/projects/expatfacilities/screenshots/about-team-and-cta.jpg" },
    { key: "housing-hero", url: "/static/images/projects/expatfacilities/screenshots/housing-hero.jpg" },
    { key: "housing-cta", url: "/static/images/projects/expatfacilities/screenshots/housing-cta.jpg" },
    { key: "services-hero", url: "/static/images/projects/expatfacilities/screenshots/services-hero.jpg" },
    { key: "insurance-hero", url: "/static/images/projects/expatfacilities/screenshots/assurance-hero.jpg" },
    { key: "insurance-plans", url: "/static/images/projects/expatfacilities/screenshots/assurance-formules.jpg" },
    { key: "insurance-benefits", url: "/static/images/projects/expatfacilities/screenshots/assurance-avantages.jpg" },
    { key: "contact-success", url: "/static/images/projects/expatfacilities/screenshots/formulaire-contact-success.jpg" },
  ],

  challenges: [
    "third-party-api-integration",
    "international-payments",
    "student-ambassador-matching",
    "scalable-architecture",
    "real-time-availability",
    "multilingual-interface",
  ],

  learnings: [
    "api-orchestration-complexity",
    "multi-partner-error-handling",
    "internationalization-challenges",
    "microservices-architecture",
    "complex-ux-simplification",
    "partner-relations",
  ],

  futurePlans: [
    "other-expat-types",
    "ai-matching",
    "ambassador-mobile-app",
    "ambassador-training",
  ],
};
