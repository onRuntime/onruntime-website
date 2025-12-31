"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Code,
  FileText,
  Globe,
  Lightbulb,
  MapPin,
  Palette,
  Search,
  Users,
} from "lucide-react";
import { Link } from "@onruntime/translations/next";
import { useTranslation, useLocale } from "@onruntime/translations/react";
import Routes from "@/constants/routes";
import JobList from "./job-list";
import { JobPosting } from "@/types/job";

const CareersPage: React.FC = () => {
  const { t } = useTranslation("screens/marketing/careers");
  const { locale } = useLocale();
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null,
  );
  const [departments, setDepartments] = useState<string[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/careers?locale=${locale}`);

        if (!response.ok) {
          throw new Error("Failed to fetch job postings");
        }

        const data = await response.json();
        setJobs(data.jobs || []);

        const uniqueDepartments = Array.from(
          new Set(data.jobs.map((job: JobPosting) => job.department)),
        ).filter(Boolean) as string[];

        setDepartments(uniqueDepartments);
        setError(null);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError(t("error"));
        setJobs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [locale, t]);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (job.description &&
        job.description.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDepartment =
      !selectedDepartment || job.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-24">
        <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
          <h1 className="font-medium text-4xl md:text-5xl text-foreground">
            {t("hero.title")}
          </h1>

          <p className="text-muted-foreground">{t("hero.description")}</p>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "z-[-1]",
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
          />
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t("why-join.title")}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t("why-join.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                {t("why-join.cards.creativity.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("why-join.cards.creativity.description")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                {t("why-join.cards.team.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("why-join.cards.team.description")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                {t("why-join.cards.impact.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("why-join.cards.impact.description")}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t("opportunities.title")}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t("opportunities.description")}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto md:flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder={t("opportunities.search-placeholder")}
                className="w-full pl-10 py-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <Button
                variant={selectedDepartment === null ? "default" : "outline"}
                onClick={() => setSelectedDepartment(null)}
                className="whitespace-nowrap"
              >
                {t("opportunities.all")}
              </Button>
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  onClick={() => setSelectedDepartment(dept)}
                  className="whitespace-nowrap"
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>

          <JobList jobs={filteredJobs} isLoading={isLoading} error={error} />
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-card p-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              {t("spontaneous.title")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t("spontaneous.description")}
            </p>
            <Link href={Routes.contact}>
              <Button>
                {t("spontaneous.cta")}
                <FileText className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-onruntime-blue/10 to-transparent" />
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t("teams.title")}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t("teams.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  {t("teams.development.title")}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {t("teams.development.description")}
              </p>
            </div>

            <div className="p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  {t("teams.design.title")}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {t("teams.design.description")}
              </p>
            </div>

            <div className="p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  {t("teams.project.title")}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {t("teams.project.description")}
              </p>
            </div>

            <div className="p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  {t("teams.marketing.title")}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {t("teams.marketing.description")}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-medium text-foreground mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("cta.description")}
          </p>
          <Button
            size="lg"
            onClick={() => {
              const jobsSection = document.getElementById("job-listings");
              if (jobsSection) {
                jobsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {t("cta.button")}
            <Briefcase className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default CareersPage;
