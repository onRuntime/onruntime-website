import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.JOIN_API_KEY;

    if (!apiKey) {
      console.error("JOIN_API_KEY is not defined in environment variables");
      return NextResponse.json({
        jobs: getMockJobs(),
      });
    }

    const response = await fetch("https://api.join.com/v2/jobs", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Join API responded with status: ${response.status}`);
    }

    const data = await response.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const jobs = data.map((job: any) => ({
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

    return NextResponse.json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs from Join API:", error);

    return NextResponse.json({
      jobs: getMockJobs(),
    });
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

function getMockJobs() {
  return [
    {
      id: "1",
      title: "Développeur Frontend React",
      department: "Développement",
      location: "Rouen, France",
      employmentType: "Temps plein",
      datePosted: "2025-03-01T10:00:00Z",
      applyUrl: "https://example.com/jobs/1",
      seniority: "Confirmé",
      remote: true,
      shortDescription:
        "Nous recherchons un développeur frontend React passionné pour rejoindre notre équipe et contribuer à des projets innovants.",
      tags: ["React", "TypeScript", "Next.js"],
    },
    {
      id: "2",
      title: "Designer UI/UX",
      department: "Design",
      location: "Paris, France",
      employmentType: "Temps plein",
      datePosted: "2025-03-05T10:00:00Z",
      applyUrl: "https://example.com/jobs/2",
      seniority: "Senior",
      remote: "Partiel",
      shortDescription:
        "Créez des interfaces utilisateur intuitives et esthétiques pour nos projets web et mobile.",
      tags: ["Figma", "UI", "UX"],
    },
    {
      id: "3",
      title: "Développeur Backend Node.js",
      department: "Développement",
      location: "Remote",
      employmentType: "Temps plein",
      datePosted: "2025-03-10T10:00:00Z",
      applyUrl: "https://example.com/jobs/3",
      seniority: "Junior",
      remote: true,
      shortDescription:
        "Rejoignez notre équipe pour développer des APIs robustes et évolutives avec Node.js.",
      tags: ["Node.js", "Express", "MongoDB"],
    },
  ];
}
