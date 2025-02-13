const Routes = {
	unknown: "#",

	landing: {
		visitor: "/",
		customer: "/customer",
	},

	// - Services
	services: {
		root: "/services",
		digital: "/services/digital",
		branding: "/services/branding",
		production: "/services/production",
	},

	team: "/team",

	project: (id: string) => `/projects/${id}`,
};

export default Routes;
