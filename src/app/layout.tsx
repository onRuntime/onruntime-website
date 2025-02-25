import "reflect-metadata";
import "@/styles/reset.css";
import "@/styles/globals.css";

import type React from "react";
import { cn } from "@/lib/utils/cn";
import Navbar from "@/components/marketing/navbar";
import { Provider } from "react-wrap-balancer";
import Footer from "@/components/layout/footer/footer";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import { MaintenanceToast } from "@/components/maintenance-toast";
import { Figtree } from "next/font/google"
import { OrganizationSchema } from "@/components/json-ld/organization-schema";

export const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const RootLayout = async ({ children }: React.PropsWithChildren) => (
  <html lang={"fr"} className={cn(figtree.variable)}>
    <body
      className={
        "flex flex-col min-h-screen items-center bg-muted text-sm md:text-lg"
      }
    >
      <OrganizationSchema />

      <Provider>
        <Navbar />

        {children}

        <Footer />
      </Provider>

      <Toaster />
      <MaintenanceToast />
    </body>

    {process.env.NODE_ENV !== "development" && (
      <>
        {/* Umami Analytics */}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="a1dcf9f4-44a8-4deb-afeb-cf8465c41f72"
        />

        {/* Google Analytics */}
        <Script
          defer
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SGGDZ43QL4"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SGGDZ43QL4');
            `,
          }}
        />
      </>
    )}
  </html>
);

export default RootLayout;
