import type { ReactNode } from "react";

export const metadata = {
  title: "Next Sitemap Example",
  description: "Example app using @onruntime/next-sitemap",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
