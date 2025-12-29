import { siteConfig } from "@/lib/utils/metadata";

export const ORGANIZATION_DATA = {
  name: "onRuntime Studio",
  legalName: "onRuntime Studio",
  url: siteConfig.url,
  logo: `${siteConfig.url}/android-chrome-512x512.png`,
  address: {
    streetAddress: "La Combe",
    addressLocality: "La Roche-de-Rame",
    addressRegion: "05310",
    postalCode: "05310",
    addressCountry: "FR",
  },
  contactPoint: {
    telephone: "+33 7 56 90 93 75",
    contactType: "customer service",
    email: "contact@onruntime.com",
    areaServed: "FR",
    availableLanguage: ["French"],
  },
  sameAs: [
    "https://www.linkedin.com/company/onruntime",
    "https://github.com/onruntime",
    "https://x.com/onruntime",
    "https://www.instagram.com/onruntime/",
    "https://discord.gg/ucX9c5yXmX",
  ],
};