import { constructMetadata } from "@/lib/utils/metadata.server";
import { getTranslation } from "@/lib/translations.server";
import ContactPage from "@/screens/marketing/contact";

export async function generateMetadata() {
  const { t } = await getTranslation("app/contact/page");
  return constructMetadata({
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default ContactPage;
