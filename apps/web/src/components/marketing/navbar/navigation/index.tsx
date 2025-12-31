"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Routes from "@/constants/routes";
import { Link } from "@onruntime/translations/next";
import React from "react";

import { useTranslation } from "@onruntime/translations/react";

import NavigationServices from "./services";
import NavigationProjects from "./projects";
import NavigationAgencies from "./agencies";

const Navigation: React.FC = () => {
  const { t } = useTranslation("layout/navbar");

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationServices />

        <NavigationProjects />

        <NavigationAgencies />

        <NavigationMenuItem>
          <Link href={Routes.npo} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("links.npo")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href={Routes.docs} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t("links.docs")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
