import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import Safari from "@/components/ui/safari";
import Routes from "@/constants/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Balancer from "react-wrap-balancer";

const Featured: React.FC = () => {
  return (
    <header className="bg-gradient-to-t from-onruntime-magenta/10 to-transparent overflow-hidden">
      <div className="px-4 md:px-0 pt-16 flex flex-col justify-center items-center max-w-5xl mx-auto">
        <div className="relative max-w-xl flex flex-col items-center gap-6">
          <h1 className="font-semibold text-5xl md:text-6xl text-foreground text-center">
            <Balancer>
              {"Vous méritez "}
              <span className="text-onruntime-magenta inline">le meilleur</span>
              {" pour votre projet."}
            </Balancer>
          </h1>

          <h2 className="text-center text-muted-foreground">
            Parce que le meilleur c’est nous, <strong>onRuntime Studio</strong>,
            votre allié pour réaliser cet objectif grâce à nos équipes de
            passionnés.
          </h2>

          <div className="flex gap-3">
            <Link href={Routes.contact}>
              <Button>Réserver une prestation</Button>
            </Link>

            <Link href={Routes.projects}>
              <Button variant={"outline"}>Voir notre travail</Button>
            </Link>
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

        <Safari
          url="tonightpass.com"
          imageSrc="/static/images/projects/tonightpass/showcase.jpg"
          className="relative bottom-[-10px] mt-12 max-h-[510px] size-full rounded-t-md rounded-b-none"
        />
      </div>
    </header>
  );
};

export default Featured;
