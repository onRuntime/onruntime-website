import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Routes from "@/constants/routes";
import { cn } from "@/lib/utils";
import { OnRuntimeLogo } from "@/logos/components";
import Link from "next/link";
import React from "react";

const NavigationServices: React.FC = () => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Nos services</NavigationMenuTrigger>

    <NavigationMenuContent>
      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        <li className="row-span-3">
          <NavigationMenuLink asChild>
            <Link
              href={Routes.services.root}
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-onruntime-magenta/5 to-muted p-6 no-underline outline-none focus:shadow-md"
            >
              <OnRuntimeLogo className="" />

              <div className="mb-2 mt-4 text-lg font-medium">Nos services</div>

              <p className="text-sm leading-tight text-muted-foreground">
                Chez onRuntime, nous vous accompagnons dans la réalisation de
                vos projets.
              </p>
            </Link>
          </NavigationMenuLink>
        </li>

        <ListItem href={Routes.services.digital} title="Digital">
          Adaptez les designs aux usages et concrétisez vos idées
        </ListItem>

        <ListItem href={Routes.services.branding} title="Branding">
          Faites vous rêver avec une nouvelle identité visuelle
        </ListItem>

        <ListItem href={Routes.services.production} title="Production">
          Souriez, vous êtes filmés !
        </ListItem>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavigationServices;
