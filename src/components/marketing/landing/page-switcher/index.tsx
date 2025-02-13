"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Routes from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PageSwitcher: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-full fixed bottom-6 select-none">
      <Tabs
        defaultValue=""
        value={pathname.replace("/", "")}
        className="w-fit mx-auto"
      >
        <TabsList className="grid w-full grid-cols-2 bg-background/50 shadow-xs backdrop-blur-2xl">
          <Link href={Routes.landing.customer} scroll={false}>
            <TabsTrigger value="customer">
              Je suis un potentiel client
            </TabsTrigger>
          </Link>

          <Link href={Routes.landing.visitor} scroll={false}>
            <TabsTrigger value="">Je suis un simple visiteur</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PageSwitcher;
