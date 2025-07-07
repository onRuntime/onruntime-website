import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { unstable_cache } from "next/cache";

// Validation schema for individual job response
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

// Cached function to fetch individual job from join.com API
const getCachedJob = unstable_cache(
  async (jobId: string) => {
    const apiKey = process.env.JOIN_API_KEY;
    if (!apiKey) {
      throw new Error("JOIN_API_KEY is not configured");
    }

    const response = await fetch(`https://api.join.com/v2/jobs/${jobId}`, {
      headers: {
        Authorization: apiKey,
        Accept: "application/json",
      },
    });

    if (response.status === 404) {
      return null; // Job not found
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Join API error - Status: ${response.status}, Response: ${errorText}`);
      throw new Error(`Join API responded with status: ${response.status}`);
    }

    const jobData = await response.json();
    
    // Validate the response data
    const validationResult = joinJobSchema.safeParse(jobData);
    if (!validationResult.success) {
      console.error("Invalid job response from join.com API:", validationResult.error);
      throw new Error("Invalid job data format from join.com API");
    }

    const validatedJob = validationResult.data;
    return {
      id: validatedJob.id,
      title: validatedJob.title,
      department: validatedJob.department?.name || "Non spécifié",
      location: validatedJob.location?.name || "Remote",
      employmentType:
        formatEmploymentType(validatedJob.employmentType) || "Temps plein",
      datePosted: validatedJob.publishedAt || new Date().toISOString(),
      applyUrl:
        validatedJob.applyUrl ||
        `https://join.com/companies/onruntime/jobs/${validatedJob.id}`,
      seniority: validatedJob.seniority?.name || null,
      remote: validatedJob.remote || false,
      shortDescription: validatedJob.shortDescription || "",
      description: validatedJob.description || "",
      requirements: validatedJob.requirements || "",
      benefits: validatedJob.benefits || "",
      salary:
        formatSalary(
          validatedJob.salaryMin,
          validatedJob.salaryMax,
          validatedJob.salaryCurrency,
        ) || null,
      validThrough: validatedJob.validThrough || null,
      tags: extractTags(validatedJob),
    };
  },
  ['join-job'],
  {
    revalidate: 300, // 5 minutes cache
    tags: ['careers'],
  }
);

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;

    if (!id) {
      return NextResponse.json(
        { error: "Job ID is required" },
        { status: 400 },
      );
    }

    const job = await getCachedJob(id);
    
    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ job });
  } catch (error) {
    console.error("Error fetching job from Join API:", error);
    
    // Check if this is a network error or API error
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }

    return NextResponse.json(
      { error: "Failed to fetch job details" },
      { status: 500 },
    );
  }
}

function formatEmploymentType(type: string | null | undefined): string {
  if (!type) return "Temps plein";

  const typeMap: Record<string, string> = {
    FULL_TIME: "Temps plein",
    PART_TIME: "Temps partiel",
    CONTRACT: "Contrat",
    TEMPORARY: "Temporaire",
    INTERNSHIP: "Stage",
    APPRENTICESHIP: "Apprentissage",
  };

  return typeMap[type] || type;
}

function formatSalary(
  min?: number,
  max?: number,
  currency?: string,
): string | null {
  if (!min && !max) return null;

  const currencySymbol = currency === "EUR" ? "€" : currency || "";

  if (min && max) {
    return `${min.toLocaleString("fr-FR")} - ${max.toLocaleString(
      "fr-FR",
    )} ${currencySymbol}`;
  } else if (min) {
    return `À partir de ${min.toLocaleString("fr-FR")} ${currencySymbol}`;
  } else if (max) {
    return `Jusqu'à ${max.toLocaleString("fr-FR")} ${currencySymbol}`;
  }

  return null;
}

function extractTags(jobData: { skills?: { name: string }[] }): string[] {
  const tags: string[] = [];

  if (jobData.skills && Array.isArray(jobData.skills)) {
    jobData.skills.forEach((skill) => {
      if (skill.name) {
        tags.push(skill.name);
      }
    });
  }

  return tags;
}

