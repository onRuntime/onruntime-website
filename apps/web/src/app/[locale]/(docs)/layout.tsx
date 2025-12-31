import type { ReactNode } from "react";

import "@/styles/docs.css";

type DocsLayoutProps = {
  children: ReactNode;
};

export default function DocsLayout({ children }: DocsLayoutProps) {
  return <>{children}</>;
}
