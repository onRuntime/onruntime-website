import { constructMetadata } from "@/lib/utils/metadata";
import { getTranslation } from "@/lib/translations.server";
import VisitorLanding from "@/screens/marketing/landing/visitor";

export async function generateMetadata() {
  const { t } = await getTranslation("app/landing/page");
  return constructMetadata({
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default VisitorLanding;
