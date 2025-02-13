import PageSwitcher from "@/components/marketing/landing/page-switcher";
import type React from "react";

const LandingLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      {children}

      <PageSwitcher />
    </>
  );
};

export default LandingLayout;
