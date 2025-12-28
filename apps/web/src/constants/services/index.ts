import designCategory from "./design";
import integrationCategory from "./integration";
import frontendCategory from "./frontend";
import backendCategory from "./backend";
import { ServiceCategoryData } from "@/types/service";

const Services: ServiceCategoryData[] = [
  designCategory,
  integrationCategory,
  frontendCategory,
  backendCategory
];

export default Services;