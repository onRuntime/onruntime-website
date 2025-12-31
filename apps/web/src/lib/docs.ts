import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";

import type { DocsProject } from "@/components/docs/docs-config";

export interface DocsPage {
  slug: string;
  slugs: string[];
  title: string;
  description?: string;
  content: string;
  data: Record<string, unknown>;
  lastModified?: string;
  project: DocsProject;
}

export interface DocsSection {
  title: string;
  pages: {
    slug: string;
    title: string;
    description?: string;
    icon?: string;
  }[];
}

export interface DocsMetadata {
  title: string;
  description?: string;
  sections: DocsSection[];
}

export const DOCS_PROJECTS: DocsProject[] = ["gitmoji", "translations", "next-sitemap"];

const getDocsDirectory = (locale: string = "en") => {
  return path.join(process.cwd(), "src/content", locale, "docs");
};

const getProjectDirectory = (project: DocsProject, locale: string = "en") => {
  return path.join(getDocsDirectory(locale), project);
};

const getProjectMetaPath = (project: DocsProject, locale: string = "en") => {
  return path.join(getProjectDirectory(project, locale), "meta.json");
};

export const getAllDocsPages = cache((locale: string = "en"): DocsPage[] => {
  try {
    const docsDirectory = getDocsDirectory(locale);

    if (!fs.existsSync(docsDirectory)) {
      return [];
    }

    const pages: DocsPage[] = [];

    for (const project of DOCS_PROJECTS) {
      const projectDir = path.join(docsDirectory, project);
      if (!fs.existsSync(projectDir)) continue;

      const projectPages = getAllProjectPages(project, locale);
      pages.push(...projectPages);
    }

    return pages;
  } catch (error) {
    console.error("Error reading docs pages:", error);
    return [];
  }
});

export const getAllProjectPages = cache((project: DocsProject, locale: string = "en"): DocsPage[] => {
  try {
    const projectDir = getProjectDirectory(project, locale);

    if (!fs.existsSync(projectDir)) {
      return [];
    }

    const getAllMdxFiles = (dir: string, basePath: string[] = []): DocsPage[] => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      const pages: DocsPage[] = [];

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          pages.push(...getAllMdxFiles(fullPath, [...basePath, entry.name]));
        } else if (entry.name.endsWith(".mdx")) {
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data, content } = matter(fileContents);
          const stats = fs.statSync(fullPath);
          const fileName = entry.name.replace(/\.mdx$/, "");

          // For index.mdx, use basePath; otherwise append filename
          const slugParts = fileName === "index" ? basePath : [...basePath, fileName];
          // Full slug includes project prefix
          const fullSlug = [project, ...slugParts].join("/");

          pages.push({
            slug: fullSlug,
            slugs: [project, ...slugParts],
            title: data.title || fileName,
            description: data.description,
            content,
            data,
            lastModified: stats.mtime.toISOString(),
            project,
          });
        }
      }

      return pages;
    };

    return getAllMdxFiles(projectDir);
  } catch (error) {
    console.error(`Error reading docs pages for project ${project}:`, error);
    return [];
  }
});

export const getDocsPageBySlug = cache(
  async (slug: string, locale: string = "en"): Promise<DocsPage | null> => {
    try {
      const slugParts = slug.split("/").filter(Boolean);

      if (slugParts.length === 0) return null;

      const project = slugParts[0] as DocsProject;
      if (!DOCS_PROJECTS.includes(project)) return null;

      const restSlug = slugParts.slice(1);
      const projectDir = getProjectDirectory(project, locale);

      // Try different possible paths
      const possiblePaths = restSlug.length === 0
        ? [path.join(projectDir, "index.mdx")]
        : [
            path.join(projectDir, ...restSlug) + ".mdx",
            path.join(projectDir, ...restSlug, "index.mdx"),
          ];

      let filePath: string | null = null;
      for (const p of possiblePaths) {
        if (fs.existsSync(p)) {
          filePath = p;
          break;
        }
      }

      if (!filePath) {
        return null;
      }

      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = fs.statSync(filePath);

      return {
        slug,
        slugs: slugParts,
        title: data.title || slug,
        description: data.description,
        content,
        data,
        lastModified: stats.mtime.toISOString(),
        project,
      };
    } catch (error) {
      console.error("Error reading docs page:", error);
      return null;
    }
  }
);

export const getDocsPageBySlugs = cache(
  async (slugs: string[], locale: string = "en"): Promise<DocsPage | null> => {
    const slug = slugs.join("/");
    return getDocsPageBySlug(slug, locale);
  }
);

export const getProjectMetadata = cache((project: DocsProject, locale: string = "en"): DocsMetadata | null => {
  try {
    const metaPath = getProjectMetaPath(project, locale);

    if (!fs.existsSync(metaPath)) {
      // Generate metadata from files if meta.json doesn't exist
      const pages = getAllProjectPages(project, locale);

      if (pages.length === 0) {
        return null;
      }

      return {
        title: project,
        sections: [
          {
            title: "Pages",
            pages: pages.map((page) => ({
              slug: page.slug,
              title: page.title,
              description: page.description,
            })),
          },
        ],
      };
    }

    const metaContents = fs.readFileSync(metaPath, "utf8");
    const meta = JSON.parse(metaContents);

    // Prepend project to all slugs in sections
    return {
      ...meta,
      sections: meta.sections.map((section: DocsSection) => ({
        ...section,
        pages: section.pages.map((page: DocsSection["pages"][0]) => ({
          ...page,
          slug: page.slug.startsWith(project) ? page.slug : `${project}/${page.slug}`,
        })),
      })),
    };
  } catch (error) {
    console.error(`Error reading docs metadata for project ${project}:`, error);
    return null;
  }
});

export const getAllDocsSlugs = cache((locale: string = "en"): string[][] => {
  const pages = getAllDocsPages(locale);
  return pages.map((page) => page.slugs);
});

export const getDocsBreadcrumbs = cache(
  (slugs: string[], locale: string = "en"): { title: string; href: string }[] => {
    const breadcrumbs: { title: string; href: string }[] = [
      { title: "Docs", href: "/docs" },
    ];

    if (slugs.length === 0) return breadcrumbs;

    let currentPath = "/docs";

    for (let i = 0; i < slugs.length; i++) {
      const slug = slugs[i];
      currentPath = `${currentPath}/${slug}`;

      // First segment is the project
      if (i === 0 && DOCS_PROJECTS.includes(slug as DocsProject)) {
        const metadata = getProjectMetadata(slug as DocsProject, locale);
        breadcrumbs.push({
          title: metadata?.title || slug,
          href: currentPath,
        });
        continue;
      }

      const currentSlugs = slugs.slice(0, i + 1);
      const page = getAllDocsPages(locale).find(
        (p) => p.slugs.join("/") === currentSlugs.join("/")
      );

      breadcrumbs.push({
        title: page?.title || slug,
        href: currentPath,
      });
    }

    return breadcrumbs;
  }
);
