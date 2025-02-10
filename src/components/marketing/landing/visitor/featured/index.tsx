import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Partners from "./partners";
import { OnRuntimeWordMark } from "@/logos/components";

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

        <div className="relative mt-12 rounded-sm overflow-hidden">
          <Image
            src={"/static/images/onruntime-team.jpg"}
            alt={"Équipe onRuntime Studio"}
            width={6000}
            height={4000}
            className="z-[-1] max-h-[510px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end items-center p-5 md:p-10 gap-5">
            <Image
              className="hidden md:block self-start"
              src={"/static/images/quotes.png"}
              alt={""}
              width={46}
              height={43}
            />

            <p className="hidden md:block text-background leading-5">
              À la base, nous sommes passionnés par le développement web et le
              développement en général depuis plus de 6 ans. Nous sommes très
              intéressés par les nouvelles technologies et le monde de la
              création (design, musique, etc.). À partir de là nous avons créé
              un Studio et une communauté autour de celui ci, nous adorons nous
              retrouver autour d'une tasse de café ☕️ pour discuter, jouer et
              surtout créer des projets.
            </p>

            <OnRuntimeWordMark fill="white" height={24} className="self-end" />
          </div>
        </div>

        <Partners />
      </div>
    </header>
  );
};

export default Featured;
