import type { Project } from "@/types/project";
import { tonightpassProject } from "./tonightpass";
import { kitchnProject } from "./kitchn";
import { kartrakProject } from "./kartrak";
import { darkThemeForInstagram } from "./dark-theme-instagram";

const Projects: Project[] = [
	tonightpassProject,
	kitchnProject,
	kartrakProject,
	darkThemeForInstagram,
];

export default Projects;
