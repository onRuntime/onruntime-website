import PageSwitcher from "@/components/marketing/landing/page-switcher";
import type React from "react";

const LandingLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="w-full relative pt-16">
      {children}

      <PageSwitcher />
    </main>
  );
};

export default LandingLayout;
