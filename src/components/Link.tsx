import React from "react";
import { Link as InternalLink } from "react-router-dom";

interface LinkProps {
    href: string;
    as?: React.ComponentType<unknown>;
    className?: string;
    children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, as, className, children }: LinkProps) => {
    const internal = /^\/(?!\/)/.test(href);

    if (internal) {
        return (
            <InternalLink to={href} component={as} className={className}>{children}</InternalLink>
        );
    }

    return (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};

export default Link;