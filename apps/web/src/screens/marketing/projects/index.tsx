"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle,
  Code,
  Gem,
  Globe,
  Palette,
  Rocket,
  Star,
  Users,
} from "lucide-react";
import Routes from "@/constants/routes";
import {
  FeaturedProjects,
  StudioProjects,
  CustomerProjects,
} from "@/components/marketing/projects/sections";
import { Link } from "@onruntime/translations/next";
import { useTranslation } from "@onruntime/translations/react";

const ProjectsPage = () => {
  const { t } = useTranslation("screens/marketing/projects");

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-24">
        <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
          <h1 className="font-medium text-4xl md:text-5xl text-foreground">
            {t("hero.title")}
          </h1>

          <p className="text-lg text-muted-foreground">
            {t("hero.description")}
          </p>

          <p className="text-muted-foreground">{t("hero.subdescription")}</p>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "z-[-1]",
              "mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t("expertise.title")}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t("expertise.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                {t("expertise.cards.development.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("expertise.cards.development.description")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                {t("expertise.cards.design.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("expertise.cards.design.description")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                {t("expertise.cards.performance.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("expertise.cards.performance.description")}
              </p>
            </div>
          </div>
        </div>

        <FeaturedProjects />

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t("process.title")}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t("process.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-onruntime-blue/10 text-onruntime-blue mb-4">
                1
              </div>
              <h3 className="font-medium text-foreground mb-2">
                {t("process.steps.discovery.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("process.steps.discovery.description")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-onruntime-blue/10 text-onruntime-blue mb-4">
                2
              </div>
              <h3 className="font-medium text-foreground mb-2">
                {t("process.steps.conception.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("process.steps.conception.description")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-onruntime-blue/10 text-onruntime-blue mb-4">
                3
              </div>
              <h3 className="font-medium text-foreground mb-2">
                {t("process.steps.development.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("process.steps.development.description")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-onruntime-blue/10 text-onruntime-blue mb-4">
                4
              </div>
              <h3 className="font-medium text-foreground mb-2">
                {t("process.steps.deployment.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("process.steps.deployment.description")}
              </p>
            </div>
          </div>
        </div>

        <StudioProjects />

        <CustomerProjects />

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              {t("industries.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("industries.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 text-center">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mx-auto mb-3 w-fit">
                <BriefcaseBusiness className="w-5 h-5" />
              </div>
              <h3 className="font-medium">{t("industries.items.ecommerce")}</h3>
            </div>
            <div className="p-4 text-center">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mx-auto mb-3 w-fit">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-medium">{t("industries.items.startups")}</h3>
            </div>
            <div className="p-4 text-center">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mx-auto mb-3 w-fit">
                <Gem className="w-5 h-5" />
              </div>
              <h3 className="font-medium">{t("industries.items.luxury")}</h3>
            </div>
            <div className="p-4 text-center">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mx-auto mb-3 w-fit">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-medium">
                {t("industries.items.institutions")}
              </h3>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              {t("why-us.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("why-us.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 p-4">
              <CheckCircle className="w-5 h-5 text-onruntime-blue shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  {t("why-us.items.expertise.title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("why-us.items.expertise.description")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4">
              <CheckCircle className="w-5 h-5 text-onruntime-blue shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  {t("why-us.items.custom.title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("why-us.items.custom.description")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4">
              <CheckCircle className="w-5 h-5 text-onruntime-blue shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  {t("why-us.items.support.title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("why-us.items.support.description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-card p-12">
          <Star className="absolute right-8 top-8 text-onruntime-blue/20 w-24 h-24 rotate-12" />
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("cta.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={Routes.contact}>
                <Button size="lg">
                  {t("cta.buttons.start")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href={Routes.services}>
                <Button variant="outline" size="lg">
                  {t("cta.buttons.services")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
