import { Link } from "@onruntime/translations/next";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { DocsMetadata } from "@/lib/docs";

interface PageNavigationProps {
  metadata: DocsMetadata | null;
  currentSlug: string;
  className?: string;
  lastModified?: string;
}

export function PageNavigation({
  metadata,
  currentSlug,
  className,
  lastModified,
}: PageNavigationProps) {
  if (!metadata?.sections) {
    return null;
  }

  // Flatten all pages from all sections
  const allPages = metadata.sections.flatMap((section) => section.pages);

  const currentIndex = allPages.findIndex((page) => page.slug === currentSlug);

  const previousPage = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const nextPage =
    currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(date);
  };

  if (!previousPage && !nextPage && !lastModified) {
    return null;
  }

  return (
    <div className={cn("mt-12", className)}>
      {lastModified && (
        <div className="text-xs text-muted-foreground mb-4">
          Last updated on {formatDate(new Date(lastModified))}
        </div>
      )}
      {(previousPage || nextPage) && (
        <nav className="grid grid-cols-2 gap-4 pt-8 border-t">
          {previousPage ? (
            <Link
              href={`/docs/${previousPage.slug}`}
              className="group flex items-center gap-2 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <ChevronLeft
                size={16}
                className="text-muted-foreground group-hover:text-foreground"
              />
              <div className="min-w-0">
                <div className="text-sm text-muted-foreground">Previous</div>
                <div className="font-medium truncate group-hover:text-primary transition-colors">
                  {previousPage.title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextPage && (
            <Link
              href={`/docs/${nextPage.slug}`}
              className="group flex items-center justify-end gap-2 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div className="min-w-0 text-right">
                <div className="text-sm text-muted-foreground">Next</div>
                <div className="font-medium truncate group-hover:text-primary transition-colors">
                  {nextPage.title}
                </div>
              </div>
              <ChevronRight
                size={16}
                className="text-muted-foreground group-hover:text-foreground"
              />
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
