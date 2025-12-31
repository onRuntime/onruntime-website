"use client";

import { ChevronsUpDown, Sparkles, Globe, Map } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

import { cn } from "@/lib/utils";
import type { DocsProject, ProjectInfo } from "./docs-config";
import { projects as projectsData } from "./docs-config";

// Extend project info with icons (client-only)
interface ProjectWithIcon extends ProjectInfo {
  icon: React.ComponentType<{ className?: string }>;
}

const projectIcons: Record<DocsProject, React.ComponentType<{ className?: string }>> = {
  gitmoji: Sparkles,
  translations: Globe,
  "next-sitemap": Map,
};

const projects: ProjectWithIcon[] = projectsData.map((p) => ({
  ...p,
  icon: projectIcons[p.id],
}));

interface DocsSwitcherProps {
  currentProject: DocsProject;
}

export function DocsSwitcher({ currentProject }: DocsSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedProject = projects.find((p) => p.id === currentProject) || projects[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleProjectChange = (projectId: DocsProject) => {
    // Extract locale from pathname
    const localeMatch = pathname.match(/^\/([a-z]{2})\//);
    const locale = localeMatch ? localeMatch[1] : "en";

    // Navigate to the new project's index
    router.push(`/${locale}/docs/${projectId}`);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 rounded-lg p-2 border bg-secondary/50 text-start text-secondary-foreground transition-colors hover:bg-accent w-full",
          isOpen && "bg-accent text-accent-foreground",
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="size-9 shrink-0 md:size-5">
          <div
            className="[&_svg]:size-full rounded-lg size-full max-md:bg-current/10 max-md:border max-md:p-1.5"
            style={{ color: selectedProject.color }}
          >
            <selectedProject.icon />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{selectedProject.label}</p>
          <p className="text-[13px] text-muted-foreground empty:hidden md:hidden truncate">
            {selectedProject.description}
          </p>
        </div>
        <ChevronsUpDown className="shrink-0 ms-auto size-4 text-muted-foreground" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 z-20 rounded-lg border bg-background p-1 shadow-lg space-y-1">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleProjectChange(project.id)}
              className={cn(
                "flex items-center gap-2 rounded-lg p-2 text-start transition-colors hover:bg-accent hover:text-accent-foreground w-full",
                currentProject === project.id && "bg-accent text-accent-foreground",
              )}
            >
              <div className="size-5 shrink-0">
                <div
                  className="[&_svg]:size-full rounded-lg size-full"
                  style={{ color: project.color }}
                >
                  <project.icon />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{project.label}</p>
                <p className="text-[13px] text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
