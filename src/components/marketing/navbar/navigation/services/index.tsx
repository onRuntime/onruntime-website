import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Services from "@/constants/services";
import Routes from "@/constants/routes";
import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react";
import { OnRuntimeLogo } from "@/logos/components";
import Link from "next/link";

const NavigationServices: React.FC = () => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Nos services</NavigationMenuTrigger>

    <NavigationMenuContent>
      <div className="grid w-full md:w-[600px] lg:w-[800px] grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr] gap-3 p-4">
        <NavigationMenuLink asChild className="block">
          <Link 
            href={Routes.services}
            className="group h-full select-none rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-col gap-3">
                <OnRuntimeLogo className="w-32" />
                <h3 className="text-lg font-medium leading-none">
                  Nos services
                </h3>
                <p className="text-sm leading-snug text-muted-foreground">
                  Découvrez notre gamme complète de services de développement et de design pour donner vie à vos projets digitaux.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-accent-foreground/80">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </NavigationMenuLink>

        <ul className="grid grid-cols-2 gap-3">
          {Services.map((service) => (
            <ListItem
              key={service.id}
              title={service.name}
              href={Routes.service[service.id].root}
              icon={service.icon}
            >
              <p className="mb-2 text-xs text-muted-foreground">
                {service.description}
              </p>
              
              <div className="grid gap-1">
                {service.subServices.map((subService) => (
                  <Link 
                    key={subService.id} 
                    href={subService.route}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {subService.name}
                  </Link>
                ))}
              </div>
            </ListItem>
          ))}
        </ul>
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

interface ListItemProps {
  title: string;
  icon: LucideIcon;
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const ListItem = ({ className, title, children, icon: Icon, href }: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link 
          href={href} 
          className={cn(
            "flex flex-col gap-2 h-full select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-md bg-muted">
              <Icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="text-sm font-medium">{title}</span>
          </div>
          
          {children}
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default NavigationServices;