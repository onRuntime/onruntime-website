import { Button } from "@/components/ui/button";
import Routes from "@/constants/routes";
import Link from "next/link";
import React from "react";
import TeamGrid from "./grid";

const Team: React.FC = () => {
  const points = [
    {
      label: "Années d'expérience",
      value: "10+",
    },
    {
      label: "Projets réalisés",
      value: "7+",
    },
    {
      label: "Clients satisfaits",
      value: "100%",
    },
  ];

  return (
    <section className="px-4 md:px-0 max-w-5xl py-16 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8">
        <div className="w-full lg:w-1/2">
          <TeamGrid />
        </div>

        <div className="flex flex-col gap-6 lg:w-1/2">
          <h2 className="text-4xl font-medium">
            Une équipe de créatifs passionnés pour briller.
          </h2>

          <p className="leading-6">
            Composée de talents variés, allant de développeurs à des designers
            passionnés. Chacun apporte sa touche unique à nos projets. Ensemble,
            nous formons un collectif où l&apos;innovation est au cœur de tout ce que
            nous entreprenons.
          </p>

          <div className="flex flex-row flex-wrap gap-x-16 gap-y-6">
            {points.map((point) => (
              <div key={point.label} className="flex flex-col">
                <span className="text-foreground text-3xl font-medium">
                  {point.value}
                </span>

                <span className="text-muted-foreground text-xs">
                  {point.label}
                </span>
              </div>
            ))}
          </div>

          <Link href={Routes.team}>
            <Button>En savoir plus</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;