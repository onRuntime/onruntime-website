import { Button } from "@/components/ui/button";
import Routes from "@/constants/routes";
import { OnRuntimeWordMark } from "@/logos/components";
import Link from "next/link";
import React from "react";
import Navigation from "./navigation";

const Navbar: React.FC = () => {
  return (
    <nav className="px-4 md:px-0 z-50 fixed w-full max-w-4xl mt-2.5">
      <div className="flex justify-between items-center p-2.5 bg-background/50 rounded-lg shadow-xs backdrop-blur-2xl">
        <Link href={Routes.landing.visitor}>
          <OnRuntimeWordMark height={24} />
        </Link>

        <Navigation />

        <div className="flex gap-2">
          <Link href={Routes.contact}>
            <Button className={"hidden md:inline-flex"} variant={"outline"}>
              Nous contacter
            </Button>
          </Link>

          <Button className="inline-flex md:hidden" variant={"outline"}>
            ...
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
