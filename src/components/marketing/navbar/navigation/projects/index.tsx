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

const NavigationProjects: React.FC = () => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Nos projets</NavigationMenuTrigger>

    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
        {Projects.map((project) => (
          <ListItem
            key={project.id}
            title={project.name}
            iconUrl={project.iconUrl}
            href={Routes.project(project.id)}
          >
            {project.shortDescription}
          </ListItem>
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    iconUrl: string;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex items-start gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center justify-center p-2 bg-muted rounded-md">
            <OnRuntimeIcon height={24} />
          </div>

          <div className="flex-1">
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavigationProjects;
