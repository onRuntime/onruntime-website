import { NextRequest, NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { joinClient } from "@/services/join";

const getCachedJobs = (locale: string) =>
  unstable_cache(
    async () => {
      const jobs = await joinClient.jobs(locale);

      return jobs.map((job) => ({
        id: job.id,
        title: job.title,
        department: job.department?.name || null,
        location: job.office?.city || "Remote",
        employmentType: job.employmentType || null,
        workplaceType: job.workplaceType || null,
        datePosted: job.publishedAt || job.createdAt || new Date().toISOString(),
        applyUrl:
          job.applyUrl || `https://join.com/companies/onruntime/jobs/${job.id}`,
        seniority: job.seniority?.name || null,
        remote: job.remote || job.workplaceType === "REMOTE",
        shortDescription: job.shortDescription || "",
      }));
    },
    ["join-jobs", locale],
    {
      revalidate: 300,
      tags: ["careers"],
    }
  );

export async function GET(request: NextRequest) {
  try {
    const locale = request.nextUrl.searchParams.get("locale") || "fr";
    const jobs = await getCachedJobs(locale)();
    return NextResponse.json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs from Join API:", error);

    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }

    return NextResponse.json(
      { error: "Failed to fetch job postings" },
      { status: 500 }
    );
  }
}
