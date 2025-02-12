const Routes = {
	unknown: "#",

	landing: {
		visitor: "/",
		customer: "/customer",
	},

	team: "/team",

	project: (id: string) => `/projects/${id}`,
};

export default Routes;
