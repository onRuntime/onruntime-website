import { NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { joinClient } from "@/services/join";
import { formatEmploymentType } from "@/lib/utils/careers";

const getCachedJobs = unstable_cache(
  async () => {
    const jobs = await joinClient.jobs();

    return jobs.map((job) => ({
      id: job.id,
      title: job.title,
      department: job.department?.name || "Non spécifié",
      location: job.location?.name || "Remote",
      employmentType: formatEmploymentType(job.employmentType) || "Temps plein",
      datePosted: job.publishedAt || new Date().toISOString(),
      applyUrl:
        job.applyUrl || `https://join.com/companies/onruntime/jobs/${job.id}`,
      seniority: job.seniority?.name || null,
      remote: job.remote || false,
      shortDescription: job.shortDescription || "",
    }));
  },
  ["join-jobs"],
  {
    revalidate: 300,
    tags: ["careers"],
  }
);

export async function GET() {
  try {
    const jobs = await getCachedJobs();
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
