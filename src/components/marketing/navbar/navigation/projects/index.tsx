import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Projects from "@/constants/projects";
import Routes from "@/constants/routes";
import { cn } from "@/lib/utils";
import { OnRuntimeIcon } from "@/logos/components";
import React from "react";
import Link from "next/link";

const NavigationProjects: React.FC = () => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Nos projets</NavigationMenuTrigger>

    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
        {Projects.map((project) => (
          <ListItem
            key={project.id}
            title={project.name}
            iconUrl={project.iconUrl}
            href={Routes.project(project.id)}
            description={project.shortDescription}
          />
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

interface ListItemProps {
  title: string;
  iconUrl: string;
  href: string;
  description: string;
  className?: string;
}

const ListItem = ({ title, description, href, className }: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "flex items-start gap-2 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="flex items-center justify-center p-2 bg-muted rounded-md">
            <OnRuntimeIcon className="w-6 h-6" />
          </div>

          <div className="flex-1">
            <div className="text-sm font-semibold leading-none mb-1">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default NavigationProjects;