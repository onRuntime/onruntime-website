import { NextResponse } from "next/server";
import { z } from "zod";
import { unstable_cache } from "next/cache";
import { formatEmploymentType } from "@/lib/utils/careers";

// Validation schemas for join.com API responses
const joinJobSchema = z.object({
  id: z.union([z.string(), z.number()]).transform(val => String(val)),
  title: z.string(),
  department: z.object({
    name: z.string(),
  }).optional(),
  location: z.object({
    name: z.string(),
  }).optional(),
  employmentType: z.string().optional(),
  publishedAt: z.string().optional(),
  applyUrl: z.string().optional(),
  seniority: z.object({
    name: z.string(),
  }).optional(),
  remote: z.boolean().optional(),
  shortDescription: z.string().optional(),
  description: z.string().optional(),
  requirements: z.string().optional(),
  benefits: z.string().optional(),
  salaryMin: z.number().optional(),
  salaryMax: z.number().optional(),
  salaryCurrency: z.string().optional(),
  validThrough: z.string().optional(),
  skills: z.array(z.object({
    name: z.string(),
  })).optional(),
});

const joinJobsResponseSchema = z.array(joinJobSchema);

// Cached function to fetch jobs from join.com API
const getCachedJobs = unstable_cache(
  async () => {
    const apiKey = process.env.JOIN_API_KEY;
    if (!apiKey) {
      throw new Error("JOIN_API_KEY is not configured");
    }

    const response = await fetch("https://api.join.com/v2/jobs", {
      headers: {
        Authorization: apiKey,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Join API error - Status: ${response.status}, Response: ${errorText}`);
      throw new Error(`Join API responded with status: ${response.status}`);
    }

    const data = await response.json();

    // Validate the response data
    const validationResult = joinJobsResponseSchema.safeParse(data);
    if (!validationResult.success) {
      console.error("Invalid response from join.com API:", validationResult.error);
      throw new Error("Invalid response format from join.com API");
    }

    return validationResult.data.map((job) => ({
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
  ['join-jobs'],
  {
    revalidate: 300, // 5 minutes cache
    tags: ['careers'],
  }
);

export async function GET() {
  try {
    const jobs = await getCachedJobs();
    return NextResponse.json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs from Join API:", error);

    // Check if this is a network error or API error
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }

    return NextResponse.json(
      { error: "Failed to fetch job postings" },
      { status: 500 }
    );
  }
}


