import type { NextConfig } from "next";

import createMDX from "@next/mdx";

import "./env.mjs";

const nextConfig: NextConfig = {
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	reactStrictMode: process.env.NODE_ENV === "development",
  transpilePackages: ["next-mdx-remote"],
	env: {
		NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	experimental: {
		turbo: {
			rules: {
				"*.svg": {
					loaders: ["@svgr/webpack"],
					as: "*.js",
				},
			},
		},
	},
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
