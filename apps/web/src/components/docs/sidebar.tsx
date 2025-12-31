"use client";

import { Link } from "@onruntime/translations/next";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { DocsSwitcher } from "./docs-switcher";
import type { DocsProject } from "./docs-config";

import { cn } from "@/lib/utils";
import type { DocsMetadata } from "@/lib/docs";
import { OnRuntimeWordMark } from "@/logos/components";

interface DocsSidebarProps {
  metadata: DocsMetadata | null;
  currentProject: DocsProject;
  className?: string;
  isMobileOpen?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
}

export function DocsSidebar({
  metadata,
  currentProject,
  className,
  isMobileOpen = false,
  setIsMobileOpen,
}: DocsSidebarProps) {
  const pathname = usePathname();
  const [internalMobileOpen, setInternalMobileOpen] = useState(false);

  const mobileOpen = setIsMobileOpen ? isMobileOpen : internalMobileOpen;
  const setMobileOpen = setIsMobileOpen || setInternalMobileOpen;

  const isActivePage = (slug: string) => {
    const docsPath = pathname.split("/docs/")[1] || "";
    return docsPath === slug || docsPath === `${slug}/`;
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 bg-background/95 backdrop-blur p-4 space-y-3 z-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <OnRuntimeWordMark className="h-5" height={20} />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 transition-colors rounded-md hover:bg-muted md:hidden"
          >
            <X size={16} />
          </button>
        </div>

        <DocsSwitcher currentProject={currentProject} />
      </div>

      <nav className="flex-1 px-4 py-2 overflow-y-auto">
        <div className="space-y-4">
          {metadata?.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <p className="inline-flex items-center gap-2 mb-1.5 px-2 text-sm font-medium text-foreground">
                {section.title}
              </p>

              <div className="space-y-0.5">
                {section.pages.map((page, pageIndex) => (
                  <Link
                    key={pageIndex}
                    href={`/docs/${page.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center rounded-md px-2 py-1.5 text-sm transition-colors",
                      isActivePage(page.slug)
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={cn(
          "hidden md:flex flex-col border-r bg-background/95 backdrop-blur md:w-[268px] lg:w-72 sticky top-0 h-screen",
          className,
        )}
      >
        <SidebarContent />
      </aside>

      <aside
        className={cn(
          "md:hidden fixed left-0 top-0 h-full w-72 bg-background border-r z-50 transform transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
