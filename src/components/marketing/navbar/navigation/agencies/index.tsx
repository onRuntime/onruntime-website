// src/components/marketing/navbar/navigation/agencies/index.tsx

import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu";
  import Routes from "@/constants/routes";
  import { cities } from "@/constants/cities";
  import { MapPin } from "lucide-react";
  import React from "react";
  import Link from "next/link";
  import { cn } from "@/lib/utils";
  
  // Groupe les villes par région pour l'affichage
  const citiesByRegion = cities.reduce((acc, city) => {
    if (!acc[city.region]) {
      acc[city.region] = [];
    }
    acc[city.region].push(city);
    return acc;
  }, {} as Record<string, typeof cities>);
  
  // Sélectionne quelques villes majeures pour la navigation
  const featuredCities = ['paris', 'lyon', 'marseille', 'bordeaux', 'lille'];
  const majorCities = cities.filter(city => featuredCities.includes(city.id));
  
  const NavigationAgencies: React.FC = () => {
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
                      Découvrez notre réseau d'agences et notre expertise locale dans toute la France
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {majorCities.slice(0, 3).map(city => (
                      <div key={city.id} className="flex items-center gap-2 text-xs">
                        <MapPin className="h-3.5 w-3.5 text-onruntime-blue" />
                        <span>Agence {city.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </NavigationMenuLink>
            
            {/* Regional listing */}
            <div className="grid gap-6">
              {/* Highlight Major Cities */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Principales agences</h4>
                <div className="grid grid-cols-2 gap-2">
                  {majorCities.map(city => (
                    <Link
                      key={city.id}
                      href={Routes.agency.city(city.id)}
                      className={cn(
                        "flex items-center gap-2 rounded-md p-2 text-sm transition-colors",
                        "hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <MapPin className="h-4 w-4 text-onruntime-blue" />
                      <div className="text-sm">{city.name}</div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* All regions and cities - shown on large screens */}
              <div className="hidden lg:block">
                <h4 className="text-sm font-medium mb-2">Toutes nos agences par région</h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(citiesByRegion).slice(0, 4).map(([region, regionCities]) => (
                    <div key={region} className="space-y-2">
                      <h5 className="text-xs font-medium text-muted-foreground">{region}</h5>
                      {regionCities.slice(0, 3).map(city => (
                        <Link
                          key={city.id}
                          href={Routes.agency.city(city.id)}
                          className="block text-xs hover:text-foreground transition-colors py-1"
                        >
                          {city.name}
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