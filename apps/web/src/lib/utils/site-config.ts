import { env } from "env";

export const siteConfig = {
  name: "onRuntime Studio",
  description: "Agence digitale spécialisée en développement web, mobile et design UI/UX. Notre équipe d'experts transforme vos idées en solutions digitales performantes.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: "/og.jpg",
  links: {
    discord: "https://discord.gg/ucX9c5yXmX",
    instagram: "https://www.instagram.com/onruntime/",
    linkedin: "https://www.linkedin.com/company/onruntime",
    github: "https://github.com/onruntime",
    twitter: "https://twitter.com/onruntime",
  },
};
