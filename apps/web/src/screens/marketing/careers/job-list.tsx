"use client";

import React from "react";
import { JobPosting } from "@/types/job";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@onruntime/translations/next";
import { useTranslation } from "@onruntime/translations/react";
import { formatDate } from "@/lib/utils/date";

interface JobListProps {
  jobs: JobPosting[];
  isLoading: boolean;
  error: string | null;
}

const JobList: React.FC<JobListProps> = ({ jobs, isLoading, error }) => {
  const { t } = useTranslation("components/marketing/careers/job-list");

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

  if (isLoading) {
    return (
      <div id="job-listings" className="py-12">
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border rounded-lg p-6 animate-pulse bg-card"
            >
              <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/5 mb-4"></div>
              <div className="h-10 bg-muted rounded w-1/6 mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="job-listings" className="py-12">
        <div className="border border-red-300 bg-red-50 dark:bg-red-900/10 p-6 rounded-lg">
          <p className="text-red-600 dark:text-red-400">{error}</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            {t("retry")}
          </Button>
        </div>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div id="job-listings" className="py-12 text-center">
        <p className="text-muted-foreground">{t("no-results")}</p>
      </div>
    );
  }

  return (
    <div id="job-listings" className="space-y-6">
      <p className="text-sm text-muted-foreground">
        {jobs.length} {t("count")}
      </p>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-6 hover:border-onruntime-blue transition-colors bg-card"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-2">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    {job.employmentType && (
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {getEmploymentType(job.employmentType)}
                      </div>
                    )}
                    <div className="flex items-center text-muted-foreground text-sm">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {t("published")} {formatDate(job.datePosted)}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.department && (
                    <Badge variant="secondary">{job.department}</Badge>
                  )}
                  {job.seniority && (
                    <Badge variant="outline">{job.seniority}</Badge>
                  )}
                  {job.workplaceType && (
                    <Badge variant="outline">{getWorkplaceType(job.workplaceType)}</Badge>
                  )}
                  {job.tags?.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {job.shortDescription && (
                  <p className="text-muted-foreground">{job.shortDescription}</p>
                )}
              </div>

              <div className="flex-shrink-0">
                <Link href={`/careers/${job.id}`} passHref>
                  <Button>{t("view-offer")}</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
