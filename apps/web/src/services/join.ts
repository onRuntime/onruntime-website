import { z } from "zod";
import { env } from "env.mjs";

const JOIN_API_BASE_URL = "https://api.join.com/v2";

const joinJobSchema = z.object({
  id: z.union([z.string(), z.number()]).transform((val) => String(val)),
  title: z.string(),
  department: z.object({ name: z.string() }).optional(),
  location: z.object({ name: z.string() }).optional(),
  employmentType: z.string().optional(),
  publishedAt: z.string().optional(),
  applyUrl: z.string().optional(),
  seniority: z.object({ name: z.string() }).optional(),
  remote: z.boolean().optional(),
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

async function request(path: string): Promise<Response> {
  const apiKey = env.JOIN_API_KEY;
  if (!apiKey) {
    throw new Error("JOIN_API_KEY is not configured");
  }

  return fetch(`${JOIN_API_BASE_URL}${path}`, {
    headers: {
      Authorization: apiKey,
      Accept: "application/json",
    },
  });
}

export const joinClient = {
  async jobs(): Promise<JoinJob[]> {
    const response = await request("/jobs");

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

  async job(jobId: string): Promise<JoinJob | null> {
    const response = await request(`/jobs/${jobId}`);

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
