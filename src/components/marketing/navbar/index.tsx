import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Routes from "@/constants/routes";
import { OnRuntimeWordMark } from "@/logos/components";
import Link from "next/link";
import type React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="z-50 fixed w-full max-w-4xl mt-2.5 flex justify-between items-center p-2.5 bg-background rounded-lg shadow-xs filter:backdrop-blur">
      <Link href={Routes.landing.visitor}>
        <OnRuntimeWordMark height={24} />
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Nos services</NavigationMenuTrigger>

            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Nos projets</NavigationMenuTrigger>

            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Le studio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex gap-2">
        <Button className={"hidden md:inline-flex"} variant={"outline"}>
          Nous contacter
        </Button>

        <Button className="inline-flex md:hidden" variant={"outline"}>
          ...
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
