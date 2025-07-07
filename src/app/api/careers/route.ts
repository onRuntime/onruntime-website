import { NextResponse } from "next/server";
import { z } from "zod";

// Simple in-memory cache
interface CacheEntry {
  data: unknown;
  timestamp: number;
}

const cache = new Map<string, CacheEntry>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

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

function getCachedData(key: string): unknown | null {
  const entry = cache.get(key);
  if (!entry) return null;
  
  if (Date.now() - entry.timestamp > CACHE_TTL) {
    cache.delete(key);
    return null;
  }
  
  return entry.data;
}

function setCachedData(key: string, data: unknown): void {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
}

export async function GET() {
  try {
    const cacheKey = 'join-jobs-list';
    
    // Try to get cached data first
    const cachedJobs = getCachedData(cacheKey);
    if (cachedJobs) {
      return NextResponse.json({ 
        jobs: cachedJobs,
        isCached: true 
      });
    }

    const apiKey = process.env.JOIN_API_KEY;

    if (!apiKey) {
      console.error("JOIN_API_KEY is not defined in environment variables");
      return NextResponse.json(
        { error: "API configuration missing" },
        { status: 500 }
      );
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

    const jobs = validationResult.data.map((job) => ({
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

    // Cache the processed jobs
    setCachedData(cacheKey, jobs);

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

