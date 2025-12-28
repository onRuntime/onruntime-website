import { NextRequest, NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { joinClient } from "@/services/join";
import {
  formatEmploymentType,
  formatSalary,
  extractTags,
} from "@/lib/utils/careers";

const getCachedJob = unstable_cache(
  async (jobId: string) => {
    const job = await joinClient.job(jobId);

    if (!job) {
      return null;
    }

    return {
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
      description: job.description || "",
      requirements: job.requirements || "",
      benefits: job.benefits || "",
      salary:
        formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency) || null,
      validThrough: job.validThrough || null,
      tags: extractTags(job),
    };
  },
  ["join-job"],
  {
    revalidate: 300,
    tags: ["careers"],
  }
);

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Job ID is required" },
        { status: 400 }
      );
    }

    const job = await getCachedJob(id);

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ job });
  } catch (error) {
    console.error("Error fetching job from Join API:", error);

    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }

    return NextResponse.json(
      { error: "Failed to fetch job details" },
      { status: 500 }
    );
  }
}
