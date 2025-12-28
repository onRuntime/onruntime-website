import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/utils/metadata";
import JobDetailPage from "@/screens/marketing/careers/job-details";
import { JobPosting } from "@/types/job";
import { Metadata } from "next";
import { env } from "env";

async function getJobById(id: string): Promise<JobPosting | null> {
  try {
    const baseUrl =env.NEXT_PUBLIC_APP_URL;
    
    const res = await fetch(
      `${baseUrl}/api/careers/${id}`,
      {
        cache: "no-cache",
      },
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.job;
  } catch (error) {
    console.error("Error fetching job:", error);
    return null;
  }
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const id = params.id;
  const job = await getJobById(id);

  if (!job) {
    return constructMetadata({
      title: "Offre d'emploi non trouvée | onRuntime Studio",
      description:
        "Cette offre d'emploi n'existe pas ou n'est plus disponible.",
    });
  }

  return constructMetadata({
    title: `${job.title} | Carrières | onRuntime Studio`,
    description:
      job.shortDescription ||
      `Rejoignez onRuntime Studio en tant que ${job.title}. Découvrez cette opportunité de carrière et postulez dès maintenant.`,
  });
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const job = await getJobById(id);

  if (!job) {
    notFound();
  }

  return <JobDetailPage job={job} />;
}
