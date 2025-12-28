import { constructMetadata } from "@/lib/utils/metadata";
import CareersPage from "@/screens/marketing/careers";

export async function generateMetadata() {
  return constructMetadata({
    title: "Rejoignez notre équipe | Opportunités de carrière",
    description:
      "Découvrez les opportunités de carrière chez onRuntime Studio. Rejoignez notre équipe de développeurs, designers et experts passionnés par l'innovation digitale.",
  });
}

export default CareersPage;
