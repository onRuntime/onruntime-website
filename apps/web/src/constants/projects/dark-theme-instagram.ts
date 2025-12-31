import { type Project, Tag } from "@/types/project";
import { Chrome, Code, Paintbrush, Shield, Smartphone } from "lucide-react";

export const darkThemeForInstagram: Project = {
  id: "dark-theme-instagram",
  name: "Dark Theme for Instagram",
  tags: [Tag.OPEN_SOURCE],
  iconUrl: "/static/images/projects/dark-theme-instagram/icon.png",
  showcaseUrl: "/static/images/projects/dark-theme-instagram/showcase.jpg",
  thumbnailUrl: "/static/images/projects/dark-theme-instagram/thumbnail.webp",
  website: "https://chromewebstore.google.com/detail/hhpaefgagkcciebgfdmoljlebdmpfcfb",
  repository: "https://github.com/onRuntime/instagram-dark-extension",
  startDate: "2020-07",
  status: "archived",

  features: [
    { key: "auto-dark-mode", icon: Chrome },
    { key: "multi-browser", icon: Smartphone },
    { key: "open-source", icon: Shield },
  ],

  technologies: [
    { key: "javascript", name: "JavaScript", icon: Code },
    { key: "chrome-api", name: "Chrome API", icon: Chrome },
    { key: "css", name: "CSS", icon: Paintbrush },
  ],

  metrics: [
    { key: "users", value: "52k+" },
    { key: "installs", value: "82k+" },
    { key: "open-source", value: "100%" },
  ],

  team: [
    { ref: "lucas-bodin", role: "Lead Designer" },
    { ref: "antoine-kingue", role: "Lead Developer" },
    { ref: "jeremy-baudrin", role: "Developer" },
    { ref: "johann-six", role: "Developer" },
  ],

  screenshots: [
    { key: "dark-interface", url: "/static/images/projects/dark-theme-instagram/showcase.jpg" },
  ],

  challenges: [
    "instagram-updates-compatibility",
    "cross-browser-consistency",
    "browser-performance",
  ],

  learnings: [
    "dynamic-interface-modification",
    "cross-browser-compatibility",
    "platform-updates-management",
  ],

  futurePlans: [
    "more-customization",
    "instagram-versions-compatibility",
  ],
};
