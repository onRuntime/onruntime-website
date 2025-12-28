import { constructMetadata } from "@/lib/utils/metadata";
import { getTranslation } from "@/lib/translations.server";
import CareersPage from "@/screens/marketing/careers";

export async function generateMetadata() {
  const { t } = await getTranslation("app/careers/page");

  return constructMetadata({
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default CareersPage;
