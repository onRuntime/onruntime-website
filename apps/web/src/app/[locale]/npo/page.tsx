import { constructMetadata } from "@/lib/utils/metadata";
import { getTranslation } from "@/lib/translations.server";
import NPOPage from "@/screens/marketing/npo";

export async function generateMetadata() {
  const { t } = await getTranslation("app/npo/page");
  return constructMetadata({
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default NPOPage;
