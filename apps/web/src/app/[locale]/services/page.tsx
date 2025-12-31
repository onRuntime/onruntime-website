import { constructMetadata } from "@/lib/utils/metadata.server";
import { getTranslation } from "@/lib/translations.server";
import ServicesPage from "@/screens/marketing/services";

export async function generateMetadata() {
  const { t } = await getTranslation("app/services/page");

  return constructMetadata({
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default async function Page() {
  return <ServicesPage />;
}
