"use client";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Services from "@/constants/services";
import Routes from "@/constants/routes";
import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon } from "lucide-react";
import React from "react";
import { Link } from "@onruntime/translations/next";

import { useTranslation } from "@onruntime/translations/react";

interface NavigationService {
  title: string;
  description: string;
  icon: LucideIcon;
  route: string;
  subServices?: {
    title: string;
    description: string;
    route: string;
    icon?: LucideIcon;
  }[];
}

const NavigationServices: React.FC = () => {
  const { t } = useTranslation("layout/navbar");

  const navServices: NavigationService[] = Services.map((service) => ({
    title: service.name,
    description: service.description,
    icon: service.icon,
    route: `/services/${service.id}`,
    subServices: service.subServices.map((subService) => ({
      title: subService.name,
      description: subService.description,
      route: `/services/${service.id}/${subService.id}`,
      icon: subService.icon,
    })),
  }));

  return (
    <NavigationMenuItem>
      <Link href={Routes.services}>
        <NavigationMenuTrigger>{t("links.services")}</NavigationMenuTrigger>
      </Link>

      <NavigationMenuContent>
        <div className="grid w-full md:w-[600px] lg:w-[800px] grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[200px_1fr] gap-3 p-4">
          <NavigationMenuLink asChild className="block">
            <Link
              href={Routes.services}
              className="group h-full select-none rounded-md bg-muted p-4 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium mb-2">
                    {t("services.title")}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    {t("services.description")}
                  </p>
                </div>

                <div className="space-y-3">
                  {navServices.slice(0, 3).map((service, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs">
                      <service.icon className="h-3.5 w-3.5 text-onruntime-blue" />
                      <span>{service.title}</span>
                    </div>
                  ))}

                  <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-accent-foreground/80 mt-4">
                    {t("services.cta")}
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          </NavigationMenuLink>

          <ul className="grid grid-cols-2 gap-3">
            {navServices.map((service) => (
              <ListItem
                key={service.title}
                title={service.title}
                href={service.route}
                icon={service.icon}
              >
                <p className="mb-2 text-xs text-muted-foreground">
                  {service.description}
                </p>

                <div className="grid gap-1">
                  {service.subServices?.map((subService) => (
                    <Link
                      key={subService.title}
                      href={subService.route}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {subService.title}
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
};

interface ListItemProps {
  title: string;
  icon: LucideIcon;
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const ListItem = ({
  className,
  title,
  children,
  icon: Icon,
  href,
}: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "flex flex-col gap-2 h-full select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
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
