import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Error from "./Error";

import type { RouteProps } from "../types/_types";
import * as ROUTES from "constants/routes";

const screens: RouteProps[] = [
    { path: ROUTES.PROJECTS, exact: true, component: Projects },
    { path: ROUTES.ABOUT, exact: true, component: About },
    { path: ROUTES.HOME, exact: true, component: Home },
    { path: "*", component: Error },
];

export default screens;