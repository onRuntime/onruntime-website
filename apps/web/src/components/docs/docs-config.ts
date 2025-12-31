// Shared docs configuration - can be used in both server and client components

export type DocsProject = "gitmoji" | "translations" | "next-sitemap";

export interface ProjectInfo {
  id: DocsProject;
  label: string;
  description: string;
  color: string;
}

export const projects: ProjectInfo[] = [
  {
    id: "gitmoji",
    label: "Gitmoji Conventional Commits",
    description: "Commit conventions by onRuntime",
    color: "#f59e0b", // amber
  },
  {
    id: "translations",
    label: "@onruntime/translations",
    description: "i18n for React & Next.js",
    color: "#3b82f6", // blue
  },
  {
    id: "next-sitemap",
    label: "@onruntime/next-sitemap",
    description: "Sitemap generator for Next.js",
    color: "#10b981", // emerald
  },
];

export function getProjectFromSlug(slug: string[] | undefined): DocsProject {
  if (!slug || slug.length === 0) return "gitmoji";
  const firstSegment = slug[0];
  if (
    firstSegment === "translations" ||
    firstSegment === "next-sitemap" ||
    firstSegment === "gitmoji"
  ) {
    return firstSegment;
  }
  return "gitmoji";
}
