import { Button } from "@/components/ui/button";
import Routes from "@/constants/routes";
import { Link } from "@onruntime/translations/next";
import React from "react";
import TeamGrid from "./grid";
import { getTranslation } from "@/lib/translations.server";

const Team: React.FC = async () => {
  const { t } = await getTranslation("components/marketing/landing/visitor/team");

  const points = [
    {
      label: t("stats.experience"),
      value: "10+",
    },
    {
      label: t("stats.projects"),
      value: "7+",
    },
    {
      label: t("stats.clients"),
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
          <h2 className="text-4xl font-semibold">
            {t("title")}
          </h2>

          <p className="leading-6">
            {t("description")}
          </p>

          <div className="flex flex-row flex-wrap gap-x-16 gap-y-6">
            {points.map((point) => (
              <div key={point.label} className="flex flex-col">
                <span className="text-foreground text-3xl font-semibold">
                  {point.value}
                </span>

                <span className="text-muted-foreground text-xs">
                  {point.label}
                </span>
              </div>
            ))}
          </div>

          <Link href={Routes.npo}>
            <Button>{t("cta")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;