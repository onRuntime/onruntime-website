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
import Projects from "@/constants/projects";
import Routes from "@/constants/routes";
import { cn } from "@/lib/utils";
import { OnRuntimeLogo, OnRuntimeWordMark } from "@/logos/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./navigation";

const Navbar: React.FC = () => {
  return (
    <nav className="z-50 fixed w-full max-w-4xl mt-2.5 flex justify-between items-center p-2.5 bg-background/50 rounded-lg shadow-xs backdrop-blur-2xl">
      <Link href={Routes.landing.visitor}>
        <OnRuntimeWordMark height={24} />
      </Link>

      <Navigation />

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
