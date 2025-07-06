import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Projects from "@/constants/projects";
import Routes from "@/constants/routes";
import { ArrowRight, Code, Eye, Github, Rocket } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tag } from "@/types/project";

const NavigationProjects: React.FC = () => {
  
  const featuredProjects = Projects.filter(project => 
    project.tags.includes(Tag.FEATURED)
  ).slice(0, 2);

  const remainingProjects = Projects.filter(project => 
    !project.tags.includes(Tag.FEATURED)
  ).slice(0, 4 - featuredProjects.length);

  const displayProjects = [...featuredProjects, ...remainingProjects].slice(0, 4);

  return (
    <NavigationMenuItem>
      <Link href={Routes.projects}>
        <NavigationMenuTrigger>Nos projets</NavigationMenuTrigger>
      </Link>

      <NavigationMenuContent>
        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-[200px_1fr] lg:w-[600px]">
          
          <NavigationMenuLink asChild className="block">
            <Link 
              href={Routes.projects}
              className="group h-full select-none rounded-md bg-muted p-4 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium mb-2">Notre portfolio</h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    Découvrez tous nos projets et réalisations pour divers secteurs
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs">
                    <Rocket className="h-3.5 w-3.5 text-onruntime-blue" />
                    <span>Applications Web & Mobile</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Code className="h-3.5 w-3.5 text-onruntime-blue" />
                    <span>Projets Open Source</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Eye className="h-3.5 w-3.5 text-onruntime-blue" />
                    <span>Design UI/UX</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-accent-foreground/80 mt-4">
                    Voir tous les projets
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          </NavigationMenuLink>
          
          <div className="grid gap-3">
            
            {displayProjects.length > 0 && (
              <NavigationMenuLink asChild className="block">
                <Link
                  href={Routes.project(displayProjects[0].id)}
                  className="group flex p-3 gap-4 select-none rounded-md no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="relative h-12 w-12 overflow-hidden rounded-md">
                    <Image
                      src={displayProjects[0].iconUrl}
                      alt={displayProjects[0].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold leading-none mb-1">{displayProjects[0].name}</div>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                      {displayProjects[0].shortDescription}
                    </p>
                  </div>
                </Link>
              </NavigationMenuLink>
            )}

            <div className="grid gap-2">
              {displayProjects.slice(1).map((project) => (
                <NavigationMenuLink asChild key={project.id}>
                  <Link
                    href={Routes.project(project.id)}
                    className="block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium leading-none">{project.name}</div>
                      {project.tags.includes(Tag.OPEN_SOURCE) && (
                        <Github className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                    </div>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                      {project.shortDescription}
                    </p>
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavigationProjects;