import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Routes from "@/constants/routes";
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

        <Link href={Routes.npo} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {"L'association"}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
