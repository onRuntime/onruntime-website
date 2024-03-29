import NextLink from "next/link";
import React from "react";

interface Props {
  href: string;
  as?: string;
  className?: string;
  locale?: string;
  children: React.ReactNode;
}

const Link: React.FC<Props> = ({
  href,
  as,
  className,
  locale,
  children,
}: Props) => {
  const internal = /^\/(?!\/)/.test(href);

  if (internal) {
    return (
      <NextLink href={href} as={as} locale={locale}>
        <a className={className}>{children}</a>
      </NextLink>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      {children}
    </a>
  );
};

export default Link;
