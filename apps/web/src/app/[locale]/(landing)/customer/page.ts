import { constructMetadata } from "@/lib/utils/metadata";
import { getTranslation } from "@/lib/translations.server";
import CustomerLanding from "@/screens/marketing/landing/customer";

export async function generateMetadata() {
  const { t } = await getTranslation("app/landing/customer/page");
  return constructMetadata({
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default CustomerLanding;
