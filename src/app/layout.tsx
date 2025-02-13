import "reflect-metadata";
import "@/styles/reset.css";
import "@/styles/globals.css";

import localFont from "next/font/local";
import type React from "react";
import { cn } from "@/lib/utils/cn";
import Navbar from "@/components/marketing/navbar";
import { Provider } from "react-wrap-balancer";
import Footer from "@/components/layout/footer/footer";
import Script from "next/script";

export const googleSans = localFont({
  src: [
    {
      path: "../fonts/ProductSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ProductSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ProductSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-google-sans",
});

const RootLayout = async ({ children }: React.PropsWithChildren) => (
  <html lang={"fr"} className={cn(googleSans.variable)}>
    <body
      className={
        "flex flex-col min-h-screen items-center bg-muted text-sm md:text-lg"
      }
    >
      <Provider>
        <Navbar />

        {children}

        <Footer />
      </Provider>
    </body>
    <Script defer src="https://cloud.umami.is/script.js" data-website-id="a1dcf9f4-44a8-4deb-afeb-cf8465c41f72"/>
  </html>
);

export default RootLayout;
