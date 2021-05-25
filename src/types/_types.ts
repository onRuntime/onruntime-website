import type { RouteProps as RouterRouteProps } from "react-router-dom";

export type RouteProps = RouterRouteProps & {
    available?: boolean;
};