const Routes = {
  unknown: "#",

  landing: {
    visitor: "/",
    customer: "/customer",
  },

  npo: "/npo",
  team: "/team",
  contact: "/contact",
  services: "/services",
  projects: "/projects",

  service: {
    design: {
      root: "/services/design",
      moodboard: "/services/design/moodboard",
      wireframes: "/services/design/wireframes",
      ui: "/services/design/ui",
      branding: "/services/design/branding",
      audit: "/services/design/audit",
    },
    
    integration: {
      root: "/services/integration",
      shopify: "/services/integration/shopify",
      wordpress: "/services/integration/wordpress",
      webflow: "/services/integration/webflow",
      squarespace: "/services/integration/squarespace",
      prestashop: "/services/integration/prestashop",
      strapi: "/services/integration/strapi",
    },
    
    frontend: {
      root: "/services/frontend",
      web: "/services/frontend/web",
      mobile: "/services/frontend/mobile",
      desktop: "/services/frontend/desktop",
      pwa: "/services/frontend/pwa",
    },
    
    backend: {
      root: "/services/backend",
      api: "/services/backend/api",
      database: "/services/backend/database",
      bots: "/services/backend/bots",
      microservices: "/services/backend/microservices",
      cloud: "/services/backend/cloud",
    },
  },

	legals: {
		company: "/company",
		terms: "/terms",
		privacy: "/privacy",
	},

	project: (id: string) => `/projects/${id}`,

	socials: {
    discord: "https://discord.gg/ucX9c5yXmX",
    instagram: "https://www.instagram.com/onruntime/",
		linkedin: "https://www.linkedin.com/company/onruntime",
		github: "https://github.com/onruntime",
    x: "https://x.com/onruntime",
	}
};

export default Routes;