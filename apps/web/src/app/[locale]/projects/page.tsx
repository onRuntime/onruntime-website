import { constructMetadata } from "@/lib/utils/metadata.server";
import { getTranslation } from "@/lib/translations.server";
import ProjectsPage from "@/screens/marketing/projects";

export async function generateMetadata() {
  const { t } = await getTranslation("app/projects/page");

  return constructMetadata({
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default ProjectsPage;
