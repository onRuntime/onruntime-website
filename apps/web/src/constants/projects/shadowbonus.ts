import { Project, Tag } from "@/types/project";
import { Cloud, Code, ExternalLink, Globe, Target, Users } from "lucide-react";

export const shadowbonusProject: Project = {
  id: "shadowbonus",
  name: "ShadowBonus",
  tags: [Tag.CUSTOMER],
  iconUrl: "/static/images/projects/shadowbonus/icon.jpg",
  showcaseUrl: "/static/images/projects/shadowbonus/showcase.webp",
  thumbnailUrl: "/static/images/projects/shadowbonus/thumbnail.webp",
  website: "https://shadowbonus.com",
  repository: undefined,
  startDate: "2021-05",
  status: "completed",

  features: [
    { key: "partner-showcase", icon: Users },
    { key: "bonus-comparison", icon: Target },
    { key: "affiliate-redirect", icon: ExternalLink },
    { key: "responsive-interface", icon: Globe },
  ],

  technologies: [
    { key: "react", name: "React", icon: Code },
    { key: "styled-components", name: "Styled Components", icon: Code },
    { key: "cloudflare", name: "Cloudflare Pages", icon: Cloud },
  ],

  metrics: [
    { key: "weekly-visits", value: "1500+" },
    { key: "dev-time", value: "2" },
    { key: "team-size", value: "3" },
  ],

  team: [
    { ref: "antoine-kingue", role: "Lead Developer" },
    { ref: "jeremy-baudrin", role: "Frontend Developer" },
    { ref: "lucas-bodin", role: "Designer" },
  ],

  screenshots: [
    { key: "homepage", url: "/static/images/projects/shadowbonus/screenshots/homepage.webp" },
    { key: "partners", url: "/static/images/projects/shadowbonus/screenshots/partners.webp" },
  ],

  challenges: [
    "attractive-interface",
    "conversion-optimization",
    "simple-react-solution",
    "cross-device-experience",
  ],

  learnings: [
    "affiliate-simplicity",
    "streamer-conversion",
    "react-styled-components",
    "gaming-streaming-needs",
  ],

  futurePlans: [
    "client-transfer",
    "streamer-evolutions",
  ],
};
