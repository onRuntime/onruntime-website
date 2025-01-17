import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Partners from "./partners";

const Featured: React.FC = () => {
  return (
    <header className="bg-gradient-to-t from-onruntime-blue/10 to-transparent">
      <div className="px-4 md:px-0 py-16 flex flex-col justify-center items-center max-w-5xl mx-auto">
        <div className="relative max-w-xl flex flex-col items-center gap-6">
          <h1 className="font-medium text-5xl md:text-6xl text-foreground text-center">
            La machine à rêves,{" "}
            <span className="text-onruntime-blue inline">onRuntime Studio</span>
            .
          </h1>

          <h2 className="text-center text-muted-foreground">
            onRuntime Studio cartonne grâce à nos groupes de créateurs :
            Développeurs, designers et artistes de tous horizons
          </h2>

          <div className="flex gap-3">
            <Button>Réserver une prestation</Button>

            <Button variant={"outline"}>Voir notre travail</Button>
          </div>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "z-[-1]",
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        <Image
          src={"/static/images/onruntime-team.jpg"}
          alt={"Équipe onRuntime Studio"}
          width={6000}
          height={4000}
          className="mt-12 max-h-[510px] rounded-sm object-cover"
        />

        <Partners />
      </div>
    </header>
  );
};

export default Featured;
