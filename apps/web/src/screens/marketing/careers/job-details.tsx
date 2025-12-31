"use client";

import React from "react";
import { JobPosting } from "@/types/job";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Briefcase,
  Building,
  CalendarDays,
  Clock,
  FileText,
  Globe,
  MapPin,
  Share2,
} from "lucide-react";
import { Link } from "@onruntime/translations/next";
import { useTranslation } from "@onruntime/translations/react";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import JobContent from "@/components/ui/job-content";
import { formatDate } from "@/lib/utils/date";

interface JobDetailPageProps {
  job: JobPosting;
}

const JobDetailPage: React.FC<JobDetailPageProps> = ({ job }) => {
  const { t } = useTranslation("components/marketing/careers/job-details");

  const getEmploymentType = (type: string | null | undefined) => {
    if (!type) return null;
    const key = type.toLowerCase().replace(/_/g, "-");
    const translated = t(`employment-type.${key}`);
    return translated !== `employment-type.${key}` ? translated : type;
  };

  const getWorkplaceType = (type: string | null | undefined) => {
    if (!type) return null;
    const key = type.toLowerCase().replace(/_/g, "-");
    const translated = t(`workplace-type.${key}`);
    return translated !== `workplace-type.${key}` ? translated : type;
  };

  const formatSalary = (salary: JobPosting["salary"]) => {
    if (!salary) return null;
    const { min, max, currency } = salary;
    const symbol = currency === "EUR" ? "€" : currency;

    if (min && max) {
      return `${min.toLocaleString()} ${t("salary-format.range")} ${max.toLocaleString()} ${symbol}`;
    } else if (min) {
      return `${t("salary-format.from")} ${min.toLocaleString()} ${symbol}`;
    } else if (max) {
      return `${t("salary-format.up-to")} ${max.toLocaleString()} ${symbol}`;
    }
    return null;
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: job.title,
          text: t("share.text", { jobTitle: job.title }),
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t("share.copied"));
    }
  };

  const handleApplyClick = () => {
    if (job.applyUrl) {
      window.open(job.applyUrl, "_blank");
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-12">
        <div>
          <Link href="/careers">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t("back")}
            </Button>
          </Link>
        </div>

        <div className="relative border rounded-lg p-8 bg-card">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {job.department && <Badge>{job.department}</Badge>}
              {job.seniority && (
                <Badge variant="outline">{job.seniority}</Badge>
              )}
              {job.workplaceType && (
                <Badge variant="outline">{getWorkplaceType(job.workplaceType)}</Badge>
              )}
            </div>

            <h1 className="font-medium text-3xl md:text-4xl text-foreground mb-4">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                {job.location}
              </div>
              {job.employmentType && (
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  {getEmploymentType(job.employmentType)}
                </div>
              )}
              <div className="flex items-center text-muted-foreground">
                <CalendarDays className="w-4 h-4 mr-2" />
                {t("published")} {formatDate(job.datePosted)}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={handleApplyClick}>
                {t("apply")}
                <Briefcase className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={handleShareClick}>
                {t("share.button")}
                <Share2 className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "absolute z-[-1] top-0 right-0 w-1/3 h-full",
              "[mask-image:linear-gradient(to_left,white,transparent)]",
            )}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-medium mb-4">
                {t("sections.description")}
              </h2>
              {job.description ? (
                <JobContent content={job.description} />
              ) : (
                <p className="text-muted-foreground">
                  {job.shortDescription || t("sections.no-description")}
                </p>
              )}
            </div>

            {job.requirements && (
              <div>
                <h2 className="text-2xl font-medium mb-4">
                  {t("sections.requirements")}
                </h2>
                <JobContent content={job.requirements} />
              </div>
            )}

            {job.benefits && (
              <div>
                <h2 className="text-2xl font-medium mb-4">
                  {t("sections.benefits")}
                </h2>
                <JobContent content={job.benefits} />
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-lg font-medium mb-4">
                {t("details.title")}
              </h3>

              <div className="space-y-4">
                {job.department && (
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground font-medium">
                        {t("details.department")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {job.department}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">
                      {t("details.location")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {job.location}
                    </p>
                  </div>
                </div>

                {job.employmentType && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground font-medium">
                        {t("details.contract")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {getEmploymentType(job.employmentType)}
                      </p>
                    </div>
                  </div>
                )}

                {job.workplaceType && (
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground font-medium">
                        {t("details.workplace")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {getWorkplaceType(job.workplaceType)}
                      </p>
                    </div>
                  </div>
                )}

                {job.salary && formatSalary(job.salary) && (
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground font-medium">
                        {t("details.salary")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formatSalary(job.salary)}
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>
            <div className="border rounded-lg p-6 bg-card text-center">
              <h3 className="text-lg font-medium mb-4">
                {t("interested.title")}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t("interested.description")}
              </p>
              <Button onClick={handleApplyClick} className="w-full">
                {t("apply")}
              </Button>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-8 bg-card">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-medium mb-4">
              {t("culture.title")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t("culture.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-medium text-foreground mb-2">
                  {t("culture.training.title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("culture.training.description")}
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                  <Building className="w-5 h-5" />
                </div>
                <h3 className="font-medium text-foreground mb-2">
                  {t("culture.flexible.title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("culture.flexible.description")}
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-medium text-foreground mb-2">
                  {t("culture.projects.title")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("culture.projects.description")}
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/npo">
                <Button variant="outline">
                  {t("culture.learn-more")}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-8 bg-card text-center">
          <h2 className="text-2xl font-medium mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            {t("cta.description")}
          </p>
          <Button size="lg" onClick={handleApplyClick}>
            {t("apply")}
            <Briefcase className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default JobDetailPage;
