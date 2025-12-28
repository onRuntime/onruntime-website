"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Routes from "@/constants/routes";
import { Link, usePathname } from "@onruntime/translations/next";
import React from "react";

const PageSwitcher: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-full fixed bottom-6 select-none pointer-events-none">
      <Tabs
        defaultValue={Routes.landing.visitor}
        value={pathname}
        className="w-fit mx-auto"
      >
        <TabsList className="grid w-full grid-cols-2 bg-background/50 shadow-xs backdrop-blur-2xl pointer-events-auto">
          <TabsTrigger value={Routes.landing.customer} className="w-full" asChild>
            <Link href={Routes.landing.customer} scroll={false}>
              Je suis un potentiel client
            </Link>
          </TabsTrigger>

          <TabsTrigger value={Routes.landing.visitor} className="w-full" asChild>
            <Link href={Routes.landing.visitor} scroll={false}>
              Je suis un simple visiteur
            </Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PageSwitcher;
