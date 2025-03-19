/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/utils/metadata";
import JobDetailPage from "@/screens/marketing/careers/job-details";
import { JobPosting } from "@/types/job";
import { Metadata } from "next";

async function getJobById(id: string): Promise<JobPosting | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/careers/${id}`,
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

export async function generateMetadata(props: any): Promise<Metadata> {
  const id = props.params.id;
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

export default async function Page(props: any) {
  const id = props.params.id;
  const job = await getJobById(id);

  if (!job) {
    notFound();
  }

  return <JobDetailPage job={job} />;
}
