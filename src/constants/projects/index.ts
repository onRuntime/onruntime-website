import type { Project } from "@/types/project";
import { tonightpassProject } from "./tonightpass";
import { kitchnProject } from "./kitchn";
import { kartrakProject } from "./kartrak";
import { darkThemeForInstagram } from "./dark-theme-instagram";
import { shadowbonusProject } from "./shadowbonus";
import { expatFacilitiesProject } from "./expatfacilities";

const Projects: Project[] = [
	tonightpassProject,
	kitchnProject,
	kartrakProject,
	darkThemeForInstagram,
	shadowbonusProject,
	expatFacilitiesProject
];

export default Projects;
