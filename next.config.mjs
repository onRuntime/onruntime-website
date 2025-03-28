import createMDX from "@next/mdx";
import "./env.mjs";

/** @type {import('next').NextConfig} */ 
const nextConfig = {
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    reactStrictMode: process.env.NODE_ENV === "development",
    transpilePackages: ["next-seo"],
    i18n: {
        locales: ["fr"],
        defaultLocale: "fr",
    },
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
    async redirects() {
        return [
            {
                source: '/projects/instagram-dark/welcome',
                destination: '/projects/dark-theme-instagram',
                permanent: true,
            },
            {
                source: '/projects/instagram-dark',
                destination: '/projects/dark-theme-instagram',
                permanent: true,
            },
            {
                source: '/about',
                destination: '/npo',
                permanent: false,
            },
        ];
    },
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
