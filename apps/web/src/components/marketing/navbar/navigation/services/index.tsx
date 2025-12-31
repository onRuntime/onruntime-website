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
import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "@onruntime/translations/next";
import { useTranslation } from "@onruntime/translations/react";
import { ServiceCategoryData, SubService } from "@/types/service";

const SubServiceLink: React.FC<{ categoryId: string; subService: SubService }> = ({
  categoryId,
  subService
}) => {
  const { t } = useTranslation(`constants/services/${categoryId}/${subService.id}`);

  return (
    <Link
      href={subService.route}
      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
    >
      {t("name")}
    </Link>
  );
};

const ServiceCategoryPreview: React.FC<{ service: ServiceCategoryData }> = ({ service }) => {
  const { t } = useTranslation(`constants/services/${service.id}`);

  return (
    <div className="flex items-center gap-2 text-xs">
      <service.icon className="h-3.5 w-3.5 text-onruntime-blue" />
      <span>{t("name")}</span>
    </div>
  );
};

const ServiceCategoryCard: React.FC<{ service: ServiceCategoryData }> = ({ service }) => {
  const { t } = useTranslation(`constants/services/${service.id}`);

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={Routes.service[service.id].root}
          className={cn(
            "flex flex-col gap-2 h-full select-none rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          )}
        >
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-md bg-muted">
              <service.icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="text-sm font-medium">{t("name")}</span>
          </div>

          <p className="mb-2 text-xs text-muted-foreground">
            {t("description")}
          </p>

          <div className="grid gap-1">
            {service.subServices.map((subService) => (
              <SubServiceLink
                key={subService.id}
                categoryId={service.id}
                subService={subService}
              />
            ))}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const NavigationServices: React.FC = () => {
  const { t } = useTranslation("layout/navbar");

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
              className="group h-full select-none rounded-md bg-muted p-4 no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground"
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
                  {Services.slice(0, 3).map((service) => (
                    <ServiceCategoryPreview key={service.id} service={service} />
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
            {Services.map((service) => (
              <ServiceCategoryCard key={service.id} service={service} />
            ))}
          </ul>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavigationServices;
