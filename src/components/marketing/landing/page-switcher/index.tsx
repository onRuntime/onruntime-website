"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Routes from "@/constants/routes";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const PageSwitcher: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleTabChange = (value: string) => {
    router.push(value === "customer"
      ? Routes.landing.customer
      : Routes.landing.visitor);
  };

  return (
    <div className="w-full fixed bottom-6 select-none">
      <Tabs
        defaultValue=""
        value={pathname.replace("/", "")}
        onValueChange={handleTabChange}
        className="w-fit mx-auto"
      >
        <TabsList className="grid grid-cols-2 bg-background/50 shadow-xs backdrop-blur-2xl">
          {/*
            Customer tab trigger:
            - value must match the TabsContent to show
            - id and aria-controls for accessibility
          */}
          <TabsTrigger value="customer" id="tab-trigger-customer" aria-controls="tab-content-customer">
            Je suis un potentiel client
          </TabsTrigger>

          <TabsTrigger value="" id="tab-trigger-visitor" aria-controls="tab-content-visitor">
            Je suis un simple visiteur
          </TabsTrigger>
        </TabsList>
        {/*
          Corresponding content panels for each tab.
          They are empty since actual content is rendered elsewhere.
        */}
        <TabsContent value="customer" id="tab-content-customer" />
        <TabsContent value="" id="tab-content-visitor" />
      </Tabs>
    </div>
  );
};

export default PageSwitcher;
