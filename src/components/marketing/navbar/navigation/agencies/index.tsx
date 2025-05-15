import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Routes from "@/constants/routes";
import { getMajorAgencies } from "@/constants/agencies";
import { MapPin } from "lucide-react";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavigationAgencies: React.FC = () => {
  // Get major agencies to feature in navigation
  const majorAgencies = getMajorAgencies();
  
  // Group agencies by region for better organization
  const agenciesByRegion = majorAgencies.reduce((acc, agency) => {
    if (!acc[agency.region]) {
      acc[agency.region] = [];
    }
    acc[agency.region].push(agency);
    return acc;
  }, {} as Record<string, typeof majorAgencies>);

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Nos agences</NavigationMenuTrigger>

      <NavigationMenuContent>
        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-[200px_1fr] lg:w-[800px] lg:grid-cols-[250px_1fr]">
          {/* Left sidebar */}
          <NavigationMenuLink asChild className="block">
            <Link 
              href={Routes.agency.root}
              className="group h-full select-none rounded-md bg-muted p-4 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium mb-2">Nos agences en France</h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    Découvrez notre réseau d&apos;agences et notre expertise locale dans toute la France
                  </p>
                </div>
                
                <div className="space-y-3">
                  {majorAgencies.slice(0, 3).map(agency => (
                    <div key={agency.id} className="flex items-center gap-2 text-xs">
                      <MapPin className="h-3.5 w-3.5 text-onruntime-blue" />
                      <span>Agence {agency.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </NavigationMenuLink>
          
          {/* Regional listing */}
          <div className="grid gap-6">
            {/* Highlight Major Agencies */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Principales agences</h4>
              <div className="grid grid-cols-2 gap-2">
                {majorAgencies.map(agency => (
                  <Link
                    key={agency.id}
                    href={Routes.agency.city(agency.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-md p-2 text-sm transition-colors",
                      "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <MapPin className="h-4 w-4 text-onruntime-blue" />
                    <div className="text-sm">{agency.name}</div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* All regions and cities - shown on large screens */}
            <div className="hidden lg:block">
              <h4 className="text-sm font-medium mb-2">Toutes nos agences par région</h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(agenciesByRegion).slice(0, 4).map(([region, regionAgencies]) => (
                  <div key={region} className="space-y-2">
                    <h5 className="text-xs font-medium text-muted-foreground">{region}</h5>
                    {regionAgencies.slice(0, 3).map(agency => (
                      <Link
                        key={agency.id}
                        href={Routes.agency.city(agency.id)}
                        className="block text-xs hover:text-foreground transition-colors py-1"
                      >
                        {agency.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-xs text-muted-foreground hover:text-accent-foreground pt-2 border-t">
              <Link href={Routes.agency.root} className="flex justify-between items-center">
                <span>Voir toutes nos agences</span>
                <MapPin className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavigationAgencies;