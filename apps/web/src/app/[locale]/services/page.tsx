import { constructMetadata } from "@/lib/utils/metadata.server";
import ServicesPage from "@/screens/marketing/services";

export async function generateMetadata() {
  return constructMetadata({
    title: "Agence de services digitaux : web, mobile et design UI/UX",
    description: "Services complets de développement web, mobile, design UI/UX et intégration CMS. Notre agence crée des solutions sur mesure qui répondent à vos objectifs.",
  });
}

export default ServicesPage;
