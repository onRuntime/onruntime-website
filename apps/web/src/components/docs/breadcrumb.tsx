import { Link } from "@onruntime/translations/next";
import { ChevronRight, Home } from "lucide-react";

import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  title: string;
  href: string;
}

interface DocsBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function DocsBreadcrumb({ items, className }: DocsBreadcrumbProps) {
  return (
    <nav className={cn("flex items-center gap-1 text-sm", className)}>
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Home className="size-4" />
      </Link>

      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-1">
          <ChevronRight className="size-4 text-muted-foreground" />
          {index === items.length - 1 ? (
            <span className="text-foreground font-medium">{item.title}</span>
          ) : (
            <Link
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
