"use client";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Routes from "@/constants/routes";
import { getMajorAgencies } from "@/constants/agencies";
import { ArrowRight, MapPin } from "lucide-react";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { useTranslation } from "@onruntime/translations/react";

const NavigationAgencies: React.FC = () => {
  const { t } = useTranslation("layout/navbar");
  
  const majorAgencies = getMajorAgencies();

  const agenciesByRegion = majorAgencies.reduce((acc, agency) => {
    if (!acc[agency.region]) {
      acc[agency.region] = [];
    }
    acc[agency.region].push(agency);
    return acc;
  }, {} as Record<string, typeof majorAgencies>);

  return (
    <NavigationMenuItem>
      <Link href={Routes.agency.root}>
        <NavigationMenuTrigger>{t("links.agencies")}</NavigationMenuTrigger>
      </Link>

      <NavigationMenuContent>
        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-[200px_1fr] lg:w-[800px] lg:grid-cols-[250px_1fr]">
          
          <NavigationMenuLink asChild className="block">
            <Link 
              href={Routes.agency.root}
              className="group h-full select-none rounded-md bg-muted p-4 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium mb-2">{t("agencies.title")}</h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    {t("agencies.description")}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {majorAgencies.slice(0, 3).map(agency => (
                    <div key={agency.id} className="flex items-center gap-2 text-xs">
                      <MapPin className="h-3.5 w-3.5 text-onruntime-blue" />
                      <span>{t("agencies.agency", { name: agency.name })}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </NavigationMenuLink>

          <div className="grid gap-6">
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium">{t("agencies.main")}</h4>
              <div className="grid grid-cols-2 gap-2">
                {majorAgencies.map(agency => (
                  <NavigationMenuLink asChild key={agency.id}>
                    <Link
                      href={Routes.agency.city(agency.id)}
                      className={cn(
                        "flex items-center gap-2 rounded-md p-2 text-sm transition-colors",
                        "hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <MapPin className="h-4 w-4 text-onruntime-blue" />
                      <div className="text-sm">{agency.name}</div>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <h4 className="text-sm font-medium mb-2">{t("agencies.by-region")}</h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(agenciesByRegion).slice(0, 4).map(([region, regionAgencies]) => (
                  <div key={region} className="space-y-2">
                    <h5 className="text-xs font-medium text-muted-foreground">{region}</h5>
                    {regionAgencies.slice(0, 3).map(agency => (
                      <NavigationMenuLink asChild key={agency.id}>
                        <Link
                          href={Routes.agency.city(agency.id)}
                          className="block text-xs hover:text-foreground transition-colors py-1"
                        >
                          {agency.name}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-xs text-muted-foreground pt-2 border-t">
              <NavigationMenuLink asChild>
                <Link 
                  href={Routes.agency.root} 
                  className="flex justify-between items-center hover:text-accent-foreground transition-colors"
                >
                  <span>{t("agencies.cta")}</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </NavigationMenuLink>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavigationAgencies;