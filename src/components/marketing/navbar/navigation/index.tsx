import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Projects from "@/constants/projects";
import Routes from "@/constants/routes";
import { cn } from "@/lib/utils";
import { OnRuntimeLogo } from "@/logos/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavigationServices from "./services";
import NavigationProjects from "./projects";

const Navigation: React.FC = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationServices />

        <NavigationProjects />

        <Link href={Routes.unknown} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Le studio
          </NavigationMenuLink>
        </Link>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
