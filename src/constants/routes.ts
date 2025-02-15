const Routes = {
	unknown: "#",

	landing: {
		visitor: "/",
		customer: "/customer",
	},

	team: "/team",
	contact: "/contact",

	legal: {
		company: "/company",
		terms: "/terms",
		privacy: "/privacy",
	},

	project: (id: string) => `/projects/${id}`,
};

export default Routes;
