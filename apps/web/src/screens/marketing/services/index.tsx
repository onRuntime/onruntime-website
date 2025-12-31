"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "@onruntime/translations/next";
import { useTranslation } from "@onruntime/translations/react";
import Routes from "@/constants/routes";
import ProjectTimeline from './timeline';
import { ConsultingSection, ExpertiseSection, TechnologiesSection, ValuePropositionSection } from '@/components/marketing/services/sections';
import { ServiceCategoryData, SubService } from '@/types/service';
import Services from '@/constants/services';

const SubServiceCard: React.FC<{ categoryId: string; subService: SubService }> = ({
  categoryId,
  subService
}) => {
  const { t } = useTranslation(`constants/services/${categoryId}/${subService.id}`);

  return (
    <Link
      href={subService.route}
      className="group flex items-start gap-3 p-4 rounded-lg border bg-background hover:border-onruntime-blue transition-colors"
    >
      {subService.icon && (
        <div className="p-2 rounded-md bg-muted text-muted-foreground group-hover:bg-onruntime-blue/10 group-hover:text-onruntime-blue transition-colors">
          <subService.icon className="w-4 h-4" />
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-sm font-medium text-foreground">{t("name")}</h3>
        <p className="text-xs text-muted-foreground mt-1">{t("description")}</p>
      </div>
    </Link>
  );
};

const ServiceCategoryCard: React.FC<{ service: ServiceCategoryData }> = ({ service }) => {
  const { t } = useTranslation(`constants/services/${service.id}`);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-onruntime-blue transition-colors">
        <Link
          href={Routes.service[service.id].root}
          className="absolute inset-0"
          aria-label={t("name")}
        />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
              <service.icon className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-medium text-foreground">{t("name")}</h2>
          </div>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 pl-4">
        {service.subServices.map((subService) => (
          <SubServiceCard
            key={subService.id}
            categoryId={service.id}
            subService={subService}
          />
        ))}
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const { t } = useTranslation("app/services/page");

  return (
    <main className="min-h-screen pt-32 pb-16 w-full">
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-32 w-full">

        <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
          <h1 className="font-medium text-4xl md:text-5xl text-foreground">
            {t("hero.title")}
          </h1>

          <p className="text-muted-foreground">
            {t("hero.description")}
          </p>

          <Link href={Routes.contact}>
            <Button size="lg">
              {t("hero.cta")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "z-[-1]",
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        <ValuePropositionSection />

        <div className="flex flex-col gap-16 w-full">
          {Services.map((service) => (
            <ServiceCategoryCard key={service.id} service={service} />
          ))}
        </div>

        <ExpertiseSection />

        <div className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t("technologies.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("technologies.description")}
            </p>
          </div>
          <TechnologiesSection />
        </div>

        <div className="bg-card rounded-lg p-8 border w-full">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t("process.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("process.description")}
            </p>
          </div>

          <ProjectTimeline />
        </div>

        <ConsultingSection />
      </div>
    </main>
  );
};

export default ServicesPage;
