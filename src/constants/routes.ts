const Routes = {
	unknown: "#",

	landing: {
		visitor: "/",
		customer: "/customer",
	},

	team: "/team",
	contact: "/contact",

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
