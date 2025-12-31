import { Project, Tag } from "@/types/project";
import { Activity, BarChart, Chrome, Code, FileCode, Lightbulb, Server, Target } from "lucide-react";

export const kartrakProject: Project = {
  id: "kartrak",
  name: "Kartrak",
  tags: [Tag.OPEN_SOURCE],
  iconUrl: "/static/images/projects/kartrak/icon.svg",
  showcaseUrl: "/static/images/projects/kartrak/showcase.jpg",
  thumbnailUrl: "/static/images/projects/kartrak/thumbnail.webp",
  website: "https://chromewebstore.google.com/detail/kartrak/bheoaeahkgfmogmgkfldoecmnlbhlibf",
  repository: "https://github.com/onruntime/kartrak",
  startDate: "2023-10",
  status: "active",

  features: [
    { key: "real-time-tracking", icon: Activity },
    { key: "personalized-suggestions", icon: Lightbulb },
    { key: "detailed-stats", icon: BarChart },
    { key: "ecological-goals", icon: Target },
  ],

  technologies: [
    { key: "typescript", name: "TypeScript", icon: FileCode },
    { key: "react", name: "React", icon: Code },
    { key: "nodejs", name: "Node.js", icon: Server },
    { key: "chrome-api", name: "Chrome API", icon: Chrome },
  ],

  metrics: [
    { key: "sites-analyzed", value: "∞" },
    { key: "open-source", value: "100%" },
    { key: "confidential", value: "100%" },
  ],

  team: [
    { ref: "lucas-bodin", role: "Product Manager" },
    { ref: "antoine-kingue", role: "Lead Developer" },
    { ref: "jeremy-baudrin", role: "Developer" },
  ],

  screenshots: [
    { key: "dashboard", url: "/static/images/projects/kartrak/screenshots/dashboard.jpg" },
    { key: "stats", url: "/static/images/projects/kartrak/screenshots/stats.jpg" },
  ],

  challenges: [
    "carbon-calculation",
    "privacy-protection",
    "background-performance",
    "environmental-data-accuracy",
  ],

  learnings: [
    "environmental-impact-complexity",
    "user-engagement",
    "accuracy-performance-balance",
    "navigation-ux",
  ],

  futurePlans: [
    "more-browsers",
    "eco-tools-integration",
    "community-features",
    "personalized-reports",
    "auto-close-tabs",
  ],
};
