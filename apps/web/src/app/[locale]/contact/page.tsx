import { constructMetadata } from "@/lib/utils/metadata";
import ContactPage from "@/screens/marketing/contact";

export async function generateMetadata() {
  return constructMetadata({
    title: "Contactez notre agence web pour votre projet digital",
    description: "Besoin d'une agence web pour votre projet ? Contactez notre équipe d'experts en développement et design pour transformer votre vision en réalité digitale.",
  });
}

export default ContactPage;
