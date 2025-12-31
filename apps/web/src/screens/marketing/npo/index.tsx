import React from "react";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import TeamMembers from "@/constants/team-members";
import {
  ArrowRight,
  Calendar,
  Clock,
  CreditCard,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  MessageSquare,
  Rocket,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Link } from "@onruntime/translations/next";
import Routes from "@/constants/routes";
import { OrganizationSchema } from "@/components/json-ld/organization-schema";
import { roleToDisplay, TeamRole } from "@/types/team-member";
import { TechnologiesSection } from "@/components/marketing/services/sections";
import Donations from "@/components/marketing/npo/donations";
import { getTranslation } from "@/lib/translations.server";

const coFounders = Object.entries(TeamMembers)
  .filter(([, member]) => member.roles.includes(TeamRole.CO_FOUNDER))
  .map(([id, member]) => ({
    id,
    ...member,
  }));

const values = [
  { key: "innovation", icon: Rocket },
  { key: "community", icon: Users },
  { key: "passion", icon: Heart },
  { key: "learning", icon: GraduationCap },
] as const;

const timelineYears = ["2015", "2020", "2021", "2022", "2023-2025"] as const;

const NPOPage: React.FC = async () => {
  const { t } = await getTranslation("screens/marketing/npo");

  return (
    <>
      <OrganizationSchema />

      <main className="min-h-screen pt-32 pb-16 w-full">
        <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-32 w-full">

          <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6 text-center mb-24">
            <h1 className="font-medium text-4xl md:text-5xl text-foreground">
              {t("hero.title")}
            </h1>

            <p className="text-muted-foreground">
              {t("hero.description")}
            </p>

            <div className="flex gap-3">
              <Link href="#adhesion">
                <Button>{t("cta.become-member")}</Button>
              </Link>

              <Link href={Routes.projects}>
                <Button variant="outline">{t("cta.our-projects")}</Button>
              </Link>
            </div>

            <DotPattern
              width={30}
              height={30}
              className={cn(
                "z-[-1]",
                "mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
              )}
            />
          </div>

          <section className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                {t("history.title")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("history.description")}
              </p>
            </div>

            <div className="relative">

              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

              <div className="space-y-12">
                {timelineYears.map((year, index) => (
                  <div
                    key={year}
                    className={`flex items-start relative ${
                      index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div className="w-1/2"></div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-background border-2 border-onruntime-blue rounded-full h-5 w-5 z-10"></div>

                    <div
                      className={`w-1/2 p-4 ${
                        index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                      }`}
                    >
                      <div className="mb-1 text-2xl font-semibold text-onruntime-blue">
                        {year}
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        {t(`history.timeline.${year}.title`)}
                      </h3>
                      <p className="text-muted-foreground">
                        {t(`history.timeline.${year}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-24" id="team">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                {t("founders.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("founders.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {coFounders.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center p-6 border rounded-lg bg-card text-center gap-4 hover:border-onruntime-blue transition-colors"
                >
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src={
                        member.avatar || "/static/images/placeholder-avatar.jpg"
                      }
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {roleToDisplay[member.roles[0]]}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-2">
                    {member.website && (
                      <Link
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <Globe className="w-4 h-4 mr-2" />
                          {t("founders.website")}
                        </Button>
                      </Link>
                    )}
                    {member.linkedin && (
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <svg
                            className="w-4 h-4 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          {t("founders.linkedin")}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                {t("values.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("values.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map(({ key, icon: Icon }) => (
                <div
                  key={key}
                  className="p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground">
                      {t(`values.items.${key}.title`)}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t(`values.items.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                {t("expertise.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("expertise.description")}
              </p>
            </div>

            <TechnologiesSection />
          </section>

          <section className="mb-24" id="adhesion">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                {t("membership.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("membership.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">
                    {t("membership.annual.title")}
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-semibold text-foreground mb-2">
                    {t("membership.annual.price")}
                    <span className="text-sm font-normal text-muted-foreground">
                      {t("membership.annual.period")}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {t("membership.annual.description")}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      {t("membership.annual.benefits.hours")}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      {t("membership.annual.benefits.projects")}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      {t("membership.annual.benefits.discord")}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      {t("membership.annual.benefits.mentoring")}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      {t("membership.annual.benefits.resources")}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Rocket className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      {t("membership.annual.benefits.autonomy")}
                    </p>
                  </div>
                </div>

                <Link href={Routes.contact}>
                  <Button className="w-full">
                    {t("membership.annual.cta")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <Donations />
            </div>
          </section>

          <section className="mb-24" id="initiatives">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                {t("initiatives.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("initiatives.description")}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-lg border bg-card p-8 mb-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-onruntime-blue/10 rounded-md">
                    <Calendar className="h-5 w-5 text-onruntime-blue" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">
                    {t("initiatives.mentoring.title")}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {t("initiatives.mentoring.description")}
                </p>

                <div className="flex items-center gap-2 mt-8">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-muted-foreground">
                    {t("initiatives.mentoring.status")}
                  </span>
                </div>
              </div>

              <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-onruntime-blue/10 blur-3xl"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-lg border bg-card p-6 hover:border-onruntime-blue transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-lg font-medium text-foreground">
                    {t("initiatives.workshops.title")}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {t("initiatives.workshops.description")}
                </p>

                <div className="flex items-center gap-2 mt-6">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span className="text-xs text-muted-foreground">
                    {t("initiatives.workshops.status")}
                  </span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg border bg-card p-6 hover:border-onruntime-blue transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-lg font-medium text-foreground">
                    {t("initiatives.hackathons.title")}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {t("initiatives.hackathons.description")}
                </p>

                <div className="flex items-center gap-2 mt-6">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-muted-foreground">
                    {t("initiatives.hackathons.status")}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                {t("initiatives.contribute")}
              </p>
              <Link href={Routes.contact}>
                <Button variant="outline">
                  {t("initiatives.contact")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          <section className="mb-4">
            <div className="relative overflow-hidden rounded-lg border bg-card p-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-medium text-foreground mb-4">
                  {t("discord.title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("discord.description")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href={Routes.socials.discord}>
                    <Button>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      {t("discord.cta")}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-linear-to-l from-onruntime-blue/10 to-transparent" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default NPOPage;
