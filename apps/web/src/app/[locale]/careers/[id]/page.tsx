import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/utils/metadata.server";
import { getTranslation } from "@/lib/translations.server";
import JobDetailPage from "@/screens/marketing/careers/job-details";
import { JobPosting } from "@/types/job";
import { Metadata } from "next";
import { env } from "env";

async function getJobById(id: string, locale: string): Promise<JobPosting | null> {
  try {
    const baseUrl = env.NEXT_PUBLIC_APP_URL;

    const res = await fetch(`${baseUrl}/api/careers/${id}?locale=${locale}`, {
      cache: "no-cache",
    });

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

export async function generateMetadata(props: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { id, locale } = params;
  const job = await getJobById(id, locale);
  const { t } = await getTranslation("app/careers/[id]/page");

  if (!job) {
    return constructMetadata({
      title: t("metadata.not-found.title"),
      description: t("metadata.not-found.description"),
    });
  }

  return constructMetadata({
    title: t("metadata.title", { jobTitle: job.title }),
    description:
      job.shortDescription ||
      t("metadata.description", { jobTitle: job.title }),
  });
}

export default async function Page(props: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const params = await props.params;
  const { id, locale } = params;
  const job = await getJobById(id, locale);

  if (!job) {
    notFound();
  }

  return <JobDetailPage job={job} />;
}
