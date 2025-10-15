import { type Project, Tag } from "@/types/project";
import { Chrome, Code, Paintbrush, Shield, Smartphone } from "lucide-react";

export const darkThemeForInstagram: Project = {
	id: "dark-theme-instagram",
	name: "Dark Theme for Instagram",
	tags: [Tag.OPEN_SOURCE],
	shortDescription: "Une extension qui passe Instagram en mode sombre, comme sur iOS.",
	description:
		"Changez le thème de Instagram.com en mode sombre lorsque le système est en mode sombre.",
	longDescription: `Dark Theme for Instagram™ est une extension de navigateur qui transforme l'expérience visuelle de Instagram.com en adoptant un thème sombre, similaire à l'apparence de l'application iOS.

L'extension offre une solution simple et élégante pour réduire la fatigue oculaire et améliorer l'expérience de navigation sur Instagram, tout en respectant les préférences du système d'exploitation.`,
	iconUrl: "/static/images/projects/dark-theme-instagram/icon.png",
	showcaseUrl: "/static/images/projects/dark-theme-instagram/showcase.jpg",
	thumbnailUrl: "/static/images/projects/dark-theme-instagram/thumbnail.webp",
	website:
		"https://chromewebstore.google.com/detail/hhpaefgagkcciebgfdmoljlebdmpfcfb",
	repository: "https://github.com/onRuntime/instagram-dark-extension",
	startDate: "2020-07",
	status: "archived",

	features: [
		{
			title: "Mode Sombre Automatique",
			description:
				"Activez automatiquement le thème sombre basé sur les paramètres système",
			icon: Chrome,
		},
		{
			title: "Compatible Multi-Navigateurs",
			description: "Disponible pour Firefox, Edge et Chrome",
			icon: Smartphone,
		},
		{
			title: "Open Source",
			description: "Code source librement accessible et vérifiable",
			icon: Shield,
		},
	],

	technologies: [
		{
			name: "JavaScript",
			description: "Développement de l'extension",
			icon: Code,
		},
		{
			name: "Chrome API",
			description: "Intégration navigateur",
			icon: Chrome,
		},
		{
			name: "CSS",
			description: "Personnalisation du thème",
			icon: Paintbrush,
		},
	],

	metrics: [
		{
			label: "Utilisateurs",
			value: "52k+",
			description: "Utilisateurs actifs",
		},
		{
			label: "Installations",
			value: "82k+",
			description: "Total d'installations",
		},
		{
			label: "Open Source",
			value: "100%",
			description: "Code source public",
		},
	],

	team: [
		{
			ref: "lucas-bodin",
			role: "Lead Designer",
		},
		{
			ref: "antoine-kingue",
			role: "Lead Developer",
		},
		{
			ref: "jeremy-baudrin",
			role: "Developer",
		},
		{
			ref: "johann-six",
			role: "Developer",
		},
	],

	screenshots: [
		{
			url: "/static/images/projects/dark-theme-instagram/showcase.jpg",
			caption: "Interface Instagram en mode sombre",
		},
	],

	challenges: [
		"Maintenir la compatibilité avec les mises à jour fréquentes d'Instagram",
		"Assurer un thème sombre cohérent sur différents navigateurs",
		"Minimiser l'impact sur les performances du navigateur",
	],

	learnings: [
		"Complexité de la modification dynamique des interfaces web",
		"Importance de la compatibilité cross-navigateurs",
		"Gestion des mises à jour fréquentes des plateformes web",
	],

	futurePlans: [
		"Ajout de plus d'options de personnalisation",
		"Amélioration de la compatibilité avec différentes versions d'Instagram",
	],
};
