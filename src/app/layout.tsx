import "reflect-metadata";
import "@/styles/reset.css";
import "@/styles/globals.css";

import localFont from "next/font/local";
import type React from "react";
import { cn } from "@/lib/utils/cn";
import Navbar from "@/components/marketing/navbar";

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
		<body className={"font-sans flex flex-col min-h-screen items-center"}>
			<Navbar />

			{children}
		</body>
	</html>
);

export default RootLayout;
