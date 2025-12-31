import { Project, Tag } from "@/types/project";
import { Blocks, BookOpen, Code, FileCode, FileText, Paintbrush, Palette, Smartphone } from "lucide-react";

export const kitchnProject: Project = {
  id: "kitchn",
  name: "Kitchn",
  tags: [Tag.OPEN_SOURCE],
  iconUrl: "/static/images/projects/kitchn/icon.svg",
  showcaseUrl: "/static/images/projects/kitchn/showcase.jpg",
  thumbnailUrl: "/static/images/projects/kitchn/thumbnail.webp",
  website: "https://kitchn.tonightpass.com",
  repository: "https://github.com/tonightpass/kitchn",
  startDate: "2022-10",
  status: "active",

  features: [
    { key: "modular-architecture", icon: Blocks },
    { key: "flexible-themes", icon: Palette },
    { key: "cross-platform", icon: Smartphone },
    { key: "interactive-docs", icon: FileText },
  ],

  technologies: [
    { key: "styled-components", name: "Styled Components", icon: Paintbrush },
    { key: "react", name: "React", icon: Code },
    { key: "react-native", name: "React Native", icon: Smartphone },
    { key: "typescript", name: "TypeScript", icon: FileCode },
    { key: "storybook", name: "Storybook", icon: BookOpen },
  ],

  metrics: [
    { key: "components", value: "35+" },
    { key: "downloads", value: "20k+" },
    { key: "github-stars", value: "50+" },
  ],

  team: [
    { ref: "lucas-bodin", role: "Lead Designer" },
    { ref: "maceo-vaz-da-mota", role: "Designer" },
    { ref: "antoine-kingue", role: "Lead Developer" },
    { ref: "jeremy-baudrin", role: "Developer" },
    { ref: "younes-bessa", role: "Developer" },
    { ref: "alexis-mouchon", role: "Developer" },
    { ref: "alexis-lecourt", role: "Developer" },
    { ref: "ines-ferreira", role: "Developer" },
  ],

  screenshots: [
    { key: "responsive", url: "/static/images/projects/kitchn/screenshots/responsive.jpg" },
    { key: "themable", url: "/static/images/projects/kitchn/screenshots/themable.jpg" },
  ],

  challenges: [
    "visual-consistency",
    "bundle-optimization",
    "react-compatibility",
    "backward-compatibility",
  ],

  learnings: [
    "clear-documentation",
    "modular-architecture",
    "automated-testing",
    "developer-experience",
  ],

  futurePlans: [
    "component-library-expansion",
    "performance-optimization",
    "framework-compatibility",
  ],
};
