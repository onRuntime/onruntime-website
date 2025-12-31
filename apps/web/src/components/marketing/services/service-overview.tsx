"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "@onruntime/translations/next";
import { useTranslation } from "@onruntime/translations/react";
import Routes from "@/constants/routes";
import { Badge } from '@/components/ui/badge';
import ProcessTimeline from './process-timeline';
import { ServiceBenefit, SubService } from '@/types/service';
import Services from '@/constants/services';

interface BenefitItemProps {
  categoryId: string;
  benefit: ServiceBenefit;
  accentColor?: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ categoryId, benefit, accentColor = "onruntime-blue" }) => {
  const { t } = useTranslation(`constants/services/${categoryId}`);
  const BenefitIcon = benefit.icon;

  return (
    <div className="flex gap-4">
      <div className={`p-2 rounded-md bg-${accentColor}/10 text-${accentColor} h-fit`}>
        <BenefitIcon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-medium text-foreground mb-2">{t(`benefits.${benefit.key}.title`)}</h3>
        <p className="text-sm text-muted-foreground">{t(`benefits.${benefit.key}.description`)}</p>
      </div>
    </div>
  );
};

interface BenefitBadgeProps {
  categoryId: string;
  benefit: ServiceBenefit;
  accentColor?: string;
}

const BenefitBadge: React.FC<BenefitBadgeProps> = ({ categoryId, benefit, accentColor = "onruntime-blue" }) => {
  const { t } = useTranslation(`constants/services/${categoryId}`);
  const BenefitIcon = benefit.icon;

  return (
    <div className="flex items-center gap-2">
      <BenefitIcon className={`w-5 h-5 text-${accentColor}`} />
      <span className="text-sm">{t(`benefits.${benefit.key}.title`)}</span>
    </div>
  );
};

interface SubServiceCardProps {
  categoryId: string;
  subService: SubService;
  accentColor?: string;
}

const SubServiceCard: React.FC<SubServiceCardProps> = ({ categoryId, subService, accentColor = "onruntime-blue" }) => {
  const { t } = useTranslation(`constants/services/${categoryId}/${subService.id}`);
  const { t: tOverview } = useTranslation("components/marketing/services/service-overview");

  return (
    <Link href={subService.route} className="group">
      <div className="h-full flex flex-col gap-6 p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors">
        <div className="flex items-center gap-4">
          {subService.icon && (
            <div className={`p-3 rounded-md bg-${accentColor}/10 text-${accentColor} group-hover:bg-${accentColor}/20 transition-colors`}>
              <subService.icon className="w-6 h-6" />
            </div>
          )}
          <div>
            <h3 className="text-xl font-medium text-foreground mb-2">{t("name")}</h3>
            <p className="text-sm text-muted-foreground">{t("description")}</p>
          </div>
        </div>
        <div className="mt-auto pt-4 flex justify-between items-center border-t">
          <span className="text-sm text-muted-foreground">{tOverview("services.learn-more")}</span>
          <ArrowRight className={`w-4 h-4 text-muted-foreground group-hover:text-${accentColor} transition-colors`} />
        </div>
      </div>
    </Link>
  );
};

interface SubServiceBubbleProps {
  categoryId: string;
  subService: SubService;
  accentColor?: string;
  style: React.CSSProperties;
}

const SubServiceBubble: React.FC<SubServiceBubbleProps> = ({ categoryId, subService, accentColor = "onruntime-blue", style }) => {
  const { t } = useTranslation(`constants/services/${categoryId}/${subService.id}`);

  return (
    <div
      className="absolute bg-background/80 backdrop-blur-xs p-3 rounded-lg border border-border shadow-xs transform hover:scale-105 transition-transform"
      style={style}
    >
      {subService.icon && React.createElement(
        subService.icon,
        { className: `w-5 h-5 text-${accentColor} mb-2` }
      )}
      <p className="text-xs font-medium truncate">{t("name")}</p>
    </div>
  );
};

interface ServiceOverviewPageProps {
  categoryId: string;
  name: string;
  description: string;
  accentColor?: string;
}

const ServiceOverviewPage: React.FC<ServiceOverviewPageProps> = ({
  categoryId,
  name,
  description,
  accentColor = "onruntime-blue",
}) => {
  const { t } = useTranslation("components/marketing/services/service-overview");
  const { t: tCategory } = useTranslation(`constants/services/${categoryId}`);

  const categoryData = Services.find(s => s.id === categoryId);
  const ServiceIcon = categoryData?.icon;
  const benefits = categoryData?.benefits || [];
  const processList = categoryData?.processList || [];
  const subServices = categoryData?.subServices || [];

  const translatedProcessList = processList.map((step) => ({
    title: tCategory(`process.${step.key}.title`),
    description: tCategory(`process.${step.key}.description`),
    services: step.serviceKeys?.map((sk) => tCategory(`process.${step.key}.services.${sk}`)),
  }));

  return (
    <main className="min-h-screen pt-32 pb-16 w-full">
      <div className="px-4 md:px-0 max-w-5xl mx-auto">

        <div className="relative overflow-hidden rounded-xl border border-border bg-card mb-24">
          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-8 md:p-12 flex flex-col items-start gap-6 relative z-10">
              <h1 className="font-medium text-4xl md:text-5xl text-foreground">
                {name}
              </h1>

              <p className="text-muted-foreground text-lg">
                {description}
              </p>

              <Link href={Routes.contact}>
                <Button size="lg">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative hidden md:flex items-center justify-center p-8 overflow-hidden">
              <div className="relative z-10 w-full max-w-xs aspect-square">
                <div className={`absolute inset-0 rounded-full bg-${accentColor}/5 backdrop-blur-xs border border-${accentColor}/10 flex items-center justify-center`}>
                  {ServiceIcon && <ServiceIcon className={`w-24 h-24 text-${accentColor} opacity-30`} />}
                </div>

                {subServices.slice(0, 4).map((subService, index) => {
                  const angle = (index * (360 / Math.min(subServices.length, 4))) * (Math.PI / 180);
                  const radius = 130;
                  const leftPos = 50 + Math.cos(angle) * radius;
                  const topPos = 50 + Math.sin(angle) * radius;

                  return (
                    <SubServiceBubble
                      key={subService.id}
                      categoryId={categoryId}
                      subService={subService}
                      accentColor={accentColor}
                      style={{
                        left: `calc(${leftPos}% - 60px)`,
                        top: `calc(${topPos}% - 30px)`,
                        maxWidth: '120px'
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className={`absolute inset-0 z-0 opacity-10 overflow-hidden`}>
            <div className={`absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-${accentColor} blur-3xl`}></div>
            <div className={`absolute -left-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-${accentColor} blur-3xl`}></div>
          </div>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "absolute inset-0 z-0",
              "mask-[radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-medium text-foreground">
              {t("expertise.title", { service: name })}
            </h2>
            <p className="text-muted-foreground">
              {t("expertise.description", { service: name })}
            </p>
            <div className="flex flex-wrap gap-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <BenefitBadge
                  key={index}
                  categoryId={categoryId}
                  benefit={benefit}
                  accentColor={accentColor}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 relative w-full aspect-video rounded-xl border border-border bg-card overflow-hidden">
            <div className={`absolute inset-0 z-0 opacity-20 overflow-hidden`}>
              <div className={`absolute -right-20 -top-20 w-[300px] h-[300px] rounded-full bg-${accentColor} blur-3xl`}></div>
              <div className={`absolute -left-20 -bottom-20 w-[250px] h-[250px] rounded-full bg-${accentColor} blur-3xl`}></div>
            </div>

            <div className="absolute inset-0 z-10 flex items-center justify-center">
              {ServiceIcon && <ServiceIcon className={`w-32 h-32 text-${accentColor} opacity-10`} />}
            </div>
          </div>
        </div>

        <div className="relative mb-24">
          <div className="text-center mb-12">
            <Badge className="mb-4">{t("services.badge")}</Badge>
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t("services.title", { service: name })}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("services.description", { service: name })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {subServices.map((subService) => (
              <SubServiceCard
                key={subService.id}
                categoryId={categoryId}
                subService={subService}
                accentColor={accentColor}
              />
            ))}
          </div>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "absolute inset-0 -z-10",
              "mask-[radial-gradient(white,transparent)]"
            )}
          />
        </div>

        {benefits.length > 0 && (
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <Badge className="mb-4">{t("benefits.badge")}</Badge>
              <h2 className="text-3xl font-medium text-foreground mb-6">
                {t("benefits.title", { service: name })}
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <BenefitItem
                    key={i}
                    categoryId={categoryId}
                    benefit={benefit}
                    accentColor={accentColor}
                  />
                ))}
              </div>
            </div>

            <div className="relative aspect-square rounded-xl border border-border bg-card overflow-hidden">
              <div className={`absolute inset-0 z-0 opacity-20 overflow-hidden`}>
                <div className={`absolute -left-20 -top-20 w-[300px] h-[300px] rounded-full bg-${accentColor} blur-3xl`}></div>
                <div className={`absolute -right-20 -bottom-20 w-[250px] h-[250px] rounded-full bg-${accentColor} blur-3xl`}></div>
              </div>

              <div className="absolute inset-0 z-10 grid grid-cols-2 grid-rows-2 p-12">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center">
                    {React.createElement(
                      benefit.icon,
                      { className: `w-20 h-20 text-${accentColor} opacity-10` }
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {processList && processList.length > 0 && (
          <div className="mb-24">
            <div className="text-center mb-12">
              <Badge className="mb-4">{t("process.badge")}</Badge>
              <h2 className="text-3xl font-medium text-foreground mb-4">
                {t("process.title")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("process.description")}
              </p>
            </div>

            <ProcessTimeline steps={translatedProcessList} />
          </div>
        )}

        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-12">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-medium text-foreground mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t("cta.description")}
            </p>
            <Link href={Routes.contact}>
              <Button size="lg">
                {t("cta.button")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className={`absolute inset-0 z-0 opacity-10 overflow-hidden`}>
            <div className={`absolute right-0 top-0 w-full h-full bg-gradient-to-bl from-${accentColor} to-transparent`}></div>
          </div>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "absolute inset-0 z-0",
              "mask-[radial-gradient(ellipse_at_bottom_right,black_30%,transparent_70%)]"
            )}
          />
        </div>
      </div>
    </main>
  );
};

export default ServiceOverviewPage;
