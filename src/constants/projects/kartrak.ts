import { Project, Tag } from "@/types/project";
import { Activity, BarChart, Chrome, Code, FileCode, Lightbulb, Server, Target } from "lucide-react";

export const kartrakProject: Project = {
  id: "kartrak",
  name: "Kartrak",
  tags: [Tag.OPEN_SOURCE],
  shortDescription:
    "Le suivi d'activité tourné vers l'écologie. Surveillez votre empreinte en ligne de façon ludique.",
  description:
    "Une extension de navigateur qui vous aide à comprendre et réduire votre impact environnemental en ligne.",
  longDescription: `Kartrak est une extension de navigateur innovante qui sensibilise les utilisateurs à leur empreinte carbone numérique. En surveillant votre activité en ligne, Kartrak fournit des insights détaillés sur votre consommation internet et son impact environnemental.

L'extension utilise des algorithmes avancés basés sur l'Écoindex pour calculer l'empreinte carbone de votre navigation, tout en proposant des suggestions personnalisées pour réduire votre impact. L'Écoindex est une méthodologie reconnue qui évalue l'impact environnemental des sites web en analysant leur complexité technique, leur poids et leur efficacité énergétique.

Avec une approche ludique et éducative, Kartrak rend la conscience environnementale accessible et engageante.`,
  iconUrl: "/static/images/projects/kartrak/icon.svg",
  showcaseUrl: "/static/images/projects/kartrak/showcase.jpg",
  thumbnailUrl: "/static/images/projects/kartrak/thumbnail.jpg",
  website:
    "https://chromewebstore.google.com/detail/kartrak/bheoaeahkgfmogmgkfldoecmnlbhlibf",
  repository: "https://github.com/onruntime/kartrak",
  startDate: "2023-10",
  status: "active",

  features: [
    {
      title: "Suivi en temps réel",
      description:
        "Visualisez votre empreinte carbone numérique en temps réel",
      icon: Activity,
    },
    {
      title: "Suggestions personnalisées",
      description: "Recevez des conseils adaptés pour réduire votre impact",
      icon: Lightbulb,
    },
    {
      title: "Statistiques détaillées",
      description: "Analysez vos habitudes de navigation et leur impact",
      icon: BarChart,
    },
    {
      title: "Objectifs écologiques",
      description: "Fixez-vous des objectifs et suivez vos progrès",
      icon: Target,
    },
  ],

  technologies: [
    {
      name: "TypeScript",
      description: "Extension navigateur",
      icon: FileCode,
    },
    {
      name: "React",
      description: "Interface utilisateur",
      icon: Code,
    },
    {
      name: "Node.js",
      description: "Backend et API",
      icon: Server,
    },
    {
      name: "Chrome API",
      description: "Intégration avec le navigateur",
      icon: Chrome,
    },
  ],

  metrics: [
    {
      label: "Sites analysés",
      value: "∞",
      description: "Compatible avec tous les sites web",
    },
    {
      label: "Open Source",
      value: "100%",
      description: "Code source public",
    },
    {
      label: "Confidentiel",
      value: "100%",
      description: "Aucune donnée utilisateur collectée",
    },
  ],

  team: [
    {
      ref: "lucas-bodin",
      role: "Product Manager",
    },
    {
      ref: "antoine-kingue",
      role: "Lead Developer",
    },
    {
      ref: "jeremy-baudrin",
      role: "Developer",
    },
  ],

  screenshots: [
    {
      url: "/static/images/projects/kartrak/screenshots/dashboard.jpg",
      caption: "Dashboard principal",
    },
    {
      url: "/static/images/projects/kartrak/screenshots/stats.jpg",
      caption: "Statistiques détaillées",
    },
  ],

  challenges: [
    "Calcul précis de l'empreinte carbone",
    "Protection de la vie privée des utilisateurs",
    "Performance de l'extension en arrière-plan",
    "Précision des données environnementales",
  ],

  learnings: [
    "Complexité du calcul d'impact environnemental",
    "Importance de l'engagement utilisateur",
    "Équilibre entre précision et performance",
    "UX adaptée aux habitudes de navigation",
  ],

  futurePlans: [
    "Support de plus de navigateurs",
    "Intégration avec d'autres outils écologiques",
    "Fonctionnalités communautaires",
    "Rapports détaillés personnalisés",
    "Fermeture automatique des onglets inutilisés",
  ],
};