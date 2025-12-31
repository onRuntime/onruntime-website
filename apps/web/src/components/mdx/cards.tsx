import { Link } from "@onruntime/translations/next";
import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Cards(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn("grid grid-cols-2 gap-3 @container", props.className)}
    >
      {props.children}
    </div>
  );
}

export type CardProps = Omit<HTMLAttributes<HTMLElement>, "title"> & {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  href?: string;
  external?: boolean;
};

export function Card({ icon, title, description, href, external, ...props }: CardProps) {
  const className = cn(
    "block rounded-xl border bg-card p-4 text-card-foreground transition-colors @max-lg:col-span-full",
    href && "hover:bg-accent/80",
    props.className,
  );

  const content = (
    <>
      {icon ? (
        <div
          className="not-prose mb-2 w-fit shadow-md rounded-lg border bg-muted p-1.5 text-muted-foreground [&_svg]:size-4"
        >
          {icon}
        </div>
      ) : null}
      <h3 className="not-prose mb-1 text-sm font-medium text-foreground">{title}</h3>
      {description ? (
        <p className="!my-0 text-sm text-muted-foreground">{description}</p>
      ) : null}
      <div
        className="text-sm text-muted-foreground [&>:first-child]:mt-0 [&>:last-child]:mb-0 [&>*]:!text-sm empty:hidden"
      >
        {props.children}
      </div>
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props} data-card className={className}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} {...props} data-card className={className}>
        {content}
      </Link>
    );
  }

  return (
    <div {...props} data-card className={className}>
      {content}
    </div>
  );
}
