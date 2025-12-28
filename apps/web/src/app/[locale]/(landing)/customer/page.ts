import { constructMetadata } from "@/lib/utils/metadata";
import CustomerLanding from "@/screens/marketing/landing/customer";

export async function generateMetadata() {
  return constructMetadata({
    title: "Solutions digitales professionnelles pour votre entreprise",
    description: "Votre partenaire digital pour le développement web, mobile et design UI/UX. Notre agence crée des solutions sur mesure qui répondent à vos objectifs commerciaux.",
  });
}

export default CustomerLanding;
