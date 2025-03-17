import { constructMetadata } from "@/lib/utils/metadata";
import CareersPage from "@/screens/marketing/careers";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Rejoignez notre équipe | Opportunités de carrière | onRuntime Studio",
  description:
    "Découvrez les opportunités de carrière chez onRuntime Studio. Rejoignez notre équipe de développeurs, designers et experts passionnés par l'innovation digitale.",
});

export default CareersPage;
