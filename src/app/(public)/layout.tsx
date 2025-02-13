import type React from "react";

const PublicLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="w-full relative pt-16">
      {children}
    </main>
  );
};

export default PublicLayout;
