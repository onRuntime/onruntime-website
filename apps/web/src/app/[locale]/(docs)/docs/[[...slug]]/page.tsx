import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";
import { Clock } from "lucide-react";

import { localeCodes } from "@/lib/translations";
import {
  getAllDocsSlugs,
  getDocsPageBySlugs,
  getProjectMetadata,
  getDocsBreadcrumbs,
  DOCS_PROJECTS,
} from "@/lib/docs";
import { processMDX } from "@/lib/mdx-processor";
import {
  DocsSidebar,
  TableOfContents,
  PageNavigation,
  DocsBreadcrumb,
  getProjectFromSlug,
  projects,
} from "@/components/docs";
import type { DocsProject } from "@/components/docs";

interface DocsPageProps {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
}

export async function generateStaticParams() {
  const params: { locale: string; slug?: string[] }[] = [];

  for (const locale of localeCodes) {
    // Add index page (redirects to default project)
    params.push({ locale, slug: undefined });

    // Add all doc pages
    const slugs = getAllDocsSlugs(locale);
    for (const slug of slugs) {
      if (slug.length > 0) {
        params.push({ locale, slug });
      }
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: DocsPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!slug || slug.length === 0) {
    return {
      title: "Documentation | onRuntime Studio",
      description:
        "Explore our documentation for guides, conventions, and package references.",
    };
  }

  const page = await getDocsPageBySlugs(slug, locale);

  if (!page) {
    return {
      title: "Documentation | onRuntime Studio",
    };
  }

  const project = projects.find((p) => p.id === page.project);

  return {
    title: `${page.title} | ${project?.label || "Docs"} | onRuntime Studio`,
    description: page.description,
  };
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { locale, slug } = await params;

  // If no slug, redirect to default project (gitmoji)
  if (!slug || slug.length === 0) {
    redirect(`/${locale}/docs/gitmoji`);
  }

  // Get current project from slug
  const currentProject = getProjectFromSlug(slug);

  // Validate project exists
  if (!DOCS_PROJECTS.includes(currentProject)) {
    notFound();
  }

  const metadata = getProjectMetadata(currentProject, locale);

  // Project index page (e.g., /docs/gitmoji)
  if (slug.length === 1 && DOCS_PROJECTS.includes(slug[0] as DocsProject)) {
    const project = projects.find((p) => p.id === currentProject);

    return (
      <div className="flex w-full" data-docs-page>
        <DocsSidebar metadata={metadata} currentProject={currentProject} />

        <main className="flex-1 min-w-0 px-6 py-8 md:px-12">
          <DocsBreadcrumb
            items={[
              { title: "Docs", href: "/docs" },
              { title: project?.label || currentProject, href: `/docs/${currentProject}` },
            ]}
            className="mb-6"
          />

          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              {project?.label || currentProject}
            </h1>
            <p className="text-lg text-muted-foreground">
              {project?.description}
            </p>
          </header>

          {metadata?.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {section.title}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {section.pages.map((page, pageIndex) => (
                  <a
                    key={pageIndex}
                    href={`/docs/${page.slug}`}
                    className="group block p-4 rounded-lg border bg-card hover:border-primary transition-colors"
                  >
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                      {page.title}
                    </h3>
                    {page.description && (
                      <p className="text-sm text-muted-foreground">
                        {page.description}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    );
  }

  // Doc page
  const page = await getDocsPageBySlugs(slug, locale);

  if (!page) {
    notFound();
  }

  const { content, readingTime } = await processMDX(page.content, locale);
  const breadcrumbs = getDocsBreadcrumbs(slug, locale);

  return (
    <div className="flex w-full" data-docs-page>
      <DocsSidebar metadata={metadata} currentProject={currentProject} />

      <main className="flex-1 min-w-0 px-6 py-8 md:px-12">
        <DocsBreadcrumb items={breadcrumbs} className="mb-6" />

        <article>
          {/* Header */}
          <header className="pb-6 mb-8 border-b">
            <h1 className="mb-4 text-4xl font-bold text-foreground">{page.title}</h1>

            {page.description && (
              <p className="mb-4 text-lg text-muted-foreground">
                {page.description}
              </p>
            )}

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="size-4" />
                <span>{readingTime.text}</span>
              </div>
              <span>•</span>
              <span>{readingTime.words} words</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">{content}</div>

          {/* Footer Navigation */}
          <PageNavigation
            metadata={metadata}
            currentSlug={page.slug}
            lastModified={page.lastModified}
          />
        </article>
      </main>

      {/* Table of Contents */}
      <aside className="hidden xl:block w-64 shrink-0 px-6 py-8">
        <TableOfContents />
      </aside>
    </div>
  );
}
