import { z } from "zod";
import { env } from "env";

const JOIN_API_BASE_URL = "https://api.join.com/v2";

const joinJobSchema = z.object({
  id: z.union([z.string(), z.number()]).transform((val) => String(val)),
  title: z.string(),
  createdAt: z.string().optional(),
  lastUpdatedAt: z.string().optional(),
  status: z.string().optional(),
  remote: z.boolean().optional(),
  office: z.object({
    id: z.union([z.string(), z.number(), z.null()]).optional(),
    name: z.string().nullable().optional(),
    city: z.string().nullable().optional(),
    countryIso: z.string().nullable().optional(),
  }).optional(),
  workplaceType: z.string().nullable().optional(), // HYBRID, REMOTE, ON_SITE
  remoteType: z.string().nullable().optional(),
  // Fields from single job endpoint
  department: z.object({ name: z.string() }).optional(),
  employmentType: z.string().nullable().optional(),
  publishedAt: z.string().optional(),
  applyUrl: z.string().optional(),
  seniority: z.object({ name: z.string() }).optional(),
  shortDescription: z.string().optional(),
  description: z.string().optional(),
  requirements: z.string().optional(),
  benefits: z.string().optional(),
  salaryMin: z.number().optional(),
  salaryMax: z.number().optional(),
  salaryCurrency: z.string().optional(),
  validThrough: z.string().optional(),
  skills: z.array(z.object({ name: z.string() })).optional(),
});

export type JoinJob = z.output<typeof joinJobSchema>;

async function request(path: string, locale?: string): Promise<Response> {
  const apiKey = env.JOIN_API_KEY;
  if (!apiKey) {
    throw new Error("JOIN_API_KEY is not configured");
  }

  const headers: HeadersInit = {
    Authorization: apiKey,
    Accept: "application/json",
  };

  if (locale) {
    headers["Accept-Language"] = locale;
  }

  return fetch(`${JOIN_API_BASE_URL}${path}`, { headers });
}

export const joinClient = {
  async jobs(locale?: string): Promise<JoinJob[]> {
    const response = await request("/jobs", locale);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Join API error - Status: ${response.status}, Response: ${errorText}`);
      throw new Error(`Join API responded with status: ${response.status}`);
    }

    const data = await response.json();
    const result = z.array(joinJobSchema).safeParse(data);

    if (!result.success) {
      console.error("Invalid response from join.com API:", result.error);
      throw new Error("Invalid response format from join.com API");
    }

    return result.data;
  },

  async job(jobId: string, locale?: string): Promise<JoinJob | null> {
    const response = await request(`/jobs/${jobId}`, locale);

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Join API error - Status: ${response.status}, Response: ${errorText}`);
      throw new Error(`Join API responded with status: ${response.status}`);
    }

    const data = await response.json();
    const result = joinJobSchema.safeParse(data);

    if (!result.success) {
      console.error("Invalid response from join.com API:", result.error);
      throw new Error("Invalid response format from join.com API");
    }

    return result.data;
  },
};
