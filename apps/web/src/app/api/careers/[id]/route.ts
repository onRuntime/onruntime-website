import { NextRequest, NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { joinClient } from "@/services/join";
import { formatSalary, extractTags } from "@/lib/utils/careers";

const getCachedJob = (locale: string) =>
  unstable_cache(
    async (jobId: string) => {
      const job = await joinClient.job(jobId, locale);

      if (!job) {
        return null;
      }

      return {
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
        description: job.description || "",
        requirements: job.requirements || "",
        benefits: job.benefits || "",
        salary: formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency),
        validThrough: job.validThrough || null,
        tags: extractTags(job),
      };
    },
    ["join-job", locale],
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
    const locale = request.nextUrl.searchParams.get("locale") || "fr";

    if (!id) {
      return NextResponse.json(
        { error: "Job ID is required" },
        { status: 400 }
      );
    }

    const job = await getCachedJob(locale)(id);

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
