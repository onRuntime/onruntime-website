import { constructMetadata } from "@/lib/utils/metadata";
import ProjectsPage from "@/screens/marketing/projects";

export async function generateMetadata() {
  return constructMetadata({
    title: "Portfolio de projets | Web, Mobile et Design par onRuntime Studio",
    description: "Découvrez notre portfolio de projets en développement web, mobile et design. Des réalisations pour des clients variés et nos projets internes innovants.",
  });
}

export default ProjectsPage;
