const Routes = {
	unknown: "#",

	landing: {
		visitor: "/",
		customer: "/customer",
	},

	team: "/team",
	contact: "/contact",

	project: (id: string) => `/projects/${id}`,
};

export default Routes;
