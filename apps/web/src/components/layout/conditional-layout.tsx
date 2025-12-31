"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface ConditionalLayoutProps {
  children: ReactNode;
  hideOnDocs?: boolean;
}

export function ConditionalLayout({ children, hideOnDocs = false }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isDocsPage = pathname?.includes("/docs");

  if (hideOnDocs && isDocsPage) {
    return null;
  }

  return <>{children}</>;
}
