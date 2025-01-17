import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { OnRuntimeWordMark } from "@/logos/components";
import React from "react";

const Partners: React.FC = () => {
  return (
    <div className="mt-12">
      <p className="text-center">Ces entreprises nous font confiance</p>

      <div className="mt-14 overflow-hidden">
        <div className="flex space-x-8">
          <OnRuntimeWordMark height={24} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
