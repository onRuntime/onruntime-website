import type { RouteProps as RouterRouteProps } from "react-router-dom";

type RouteProps = RouterRouteProps & {
    available?: boolean;
};

export type { RouteProps };