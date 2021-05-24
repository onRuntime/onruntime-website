import Home from "./Home";

import type { RouteProps } from "../types/_types";
import * as ROUTES from "constants/routes";

const screens: RouteProps[] = [
    { path: ROUTES.HOME, exact: true, component: Home, available: true },
];

export default screens;