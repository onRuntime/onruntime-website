// src/constants/routes.ts
const Routes = {
  unknown: "#",

  landing: {
    visitor: "/",
    customer: "/customer",
  },

  team: "/team",
  contact: "/contact",
  services: "/services",

  // Routes détaillées des services
  service: {
    // Design UI/UX
    design: {
      root: "/services/design",
      moodboard: "/services/design/moodboard",
      wireframes: "/services/design/wireframes",
      ui: "/services/design/ui",
      branding: "/services/design/branding",
      audit: "/services/design/audit",
    },
    
    // Intégration
    integration: {
      root: "/services/integration",
      shopify: "/services/integration/shopify",
      wordpress: "/services/integration/wordpress",
      webflow: "/services/integration/webflow",
      squarespace: "/services/integration/squarespace",
      prestashop: "/services/integration/prestashop",
      strapi: "/services/integration/strapi",
    },
    
    // Développement Frontend
    frontend: {
      root: "/services/frontend",
      web: "/services/frontend/web",
      mobile: "/services/frontend/mobile",
      desktop: "/services/frontend/desktop",
      pwa: "/services/frontend/pwa",
    },
    
    // Développement Backend
    backend: {
      root: "/services/backend",
      api: "/services/backend/api",
      database: "/services/backend/database",
      bots: "/services/backend/bots",
      microservices: "/services/backend/microservices",
      cloud: "/services/backend/cloud",
    },
  },

  project: (id: string) => `/projects/${id}`,
};

export default Routes;