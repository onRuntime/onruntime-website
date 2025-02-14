import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import {
  Zap,
  MessageSquare,
  Settings,
  Command,
  Bell,
  Users,
  Shield,
  LineChart,
  Heart,
  BarChart,
  Clock
} from 'lucide-react';

export const metadata = {
  title: "Développement de Bots Discord & Slack | onRuntime Studio",
  description: "Créez des bots intelligents et des automatisations pour Discord, Slack et autres plateformes. Notre expertise vous garantit des bots performants et fiables.",
};

const BotsServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Bots & Automatisations"
      heroDescription="Développez des bots intelligents et des automatisations pour améliorer l'engagement et la productivité de votre communauté. Notre expertise vous garantit des bots fiables et performants pour Discord, Slack et autres plateformes."
      heroImage="/static/images/services/bots-hero.jpg"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence en développement de bots"
        description="Notre expertise en développement de bots vous garantit des solutions intelligentes et performantes."
        features={[
          {
            title: "Discord & Slack",
            description: "Bots personnalisés pour les principales plateformes de communication.",
            icon: MessageSquare
          },
          {
            title: "Commandes avancées",
            description: "Interface intuitive avec commandes personnalisables.",
            icon: Command
          },
          {
            title: "Performance optimale",
            description: "Architecture optimisée pour une réactivité maximale.",
            icon: Zap
          },
          {
            title: "Intégrations",
            description: "Connection avec vos outils et services existants.",
            icon: Settings
          }
        ]}
        image="/static/images/services/bots-features.jpg"
      />

      {/* Avantages des bots modernes */}
      <FeatureSection
        title="Bots intelligents et réactifs"
        description="Découvrez les avantages des bots modernes pour votre communauté."
        features={[
          {
            title: "Modération intelligente",
            description: "Gestion automatisée de votre communauté et modération.",
            icon: Shield
          },
          {
            title: "Notifications",
            description: "Alertes personnalisées et mises à jour automatiques.",
            icon: Bell
          },
          {
            title: "Engagement",
            description: "Fonctionnalités interactives pour animer votre communauté.",
            icon: Users
          },
          {
            title: "Statistiques",
            description: "Suivi détaillé de l'activité et des interactions.",
            icon: LineChart
          }
        ]}
        image="/static/images/services/bots-benefits.jpg"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs bots"
        testimonials={[
          {
            content: "Notre bot Discord a transformé la gestion de notre communauté gaming.",
            author: {
              name: "Lucas Bernard",
              role: "Community Manager",
              company: "GamersWorld",
              image: "/static/images/testimonials/lucas-bernard.jpg"
            }
          },
          {
            content: "L'automatisation Slack a boosté la productivité de notre équipe.",
            author: {
              name: "Marie Dubois",
              role: "Product Owner",
              company: "TechFlow",
              image: "/static/images/testimonials/marie-dubois.jpg"
            }
          },
          {
            content: "Un bot fiable qui gère parfaitement notre support client 24/7.",
            author: {
              name: "Antoine Martin",
              role: "Support Lead",
              company: "CustomerFirst",
              image: "/static/images/testimonials/antoine-martin.jpg"
            }
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de développement de bots"
        items={[
          {
            question: "Quels types de bots pouvez-vous développer ?",
            answer: "Nous développons des bots pour diverses plateformes (Discord, Slack, Telegram) avec différentes fonctionnalités : modération, support client, automatisation de tâches, statistiques, jeux et animations communautaires. Chaque bot est personnalisé selon vos besoins spécifiques."
          },
          {
            question: "Comment assurez-vous la fiabilité des bots ?",
            answer: "Nous implémentons plusieurs mécanismes : monitoring 24/7, redémarrage automatique en cas de problème, logs détaillés, et alertes en temps réel. Nous effectuons également des tests approfondis avant chaque déploiement."
          },
          {
            question: "Peut-on personnaliser les commandes et fonctionnalités ?",
            answer: "Oui, tous nos bots sont entièrement personnalisables : commandes, réponses, permissions, intégrations. Nous adaptons chaque fonctionnalité à vos besoins et votre charte de modération."
          },
          {
            question: "Comment gérez-vous la sécurité ?",
            answer: "La sécurité est une priorité : authentification sécurisée, permissions granulaires, validation des entrées, protection contre le spam et les abus. Nous suivons les meilleures pratiques de chaque plateforme."
          },
          {
            question: "Proposez-vous un support après le déploiement ?",
            answer: "Oui, nous proposons plusieurs formules de maintenance incluant : surveillance 24/7, mises à jour régulières, support technique, et évolutions fonctionnelles selon vos besoins."
          }
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre bot avec nos services additionnels"
        features={[
          {
            title: "Analytics",
            description: "Suivi détaillé de l'utilisation et des interactions.",
            icon: BarChart
          },
          {
            title: "Support 24/7",
            description: "Surveillance continue et intervention rapide.",
            icon: Clock
          },
          {
            title: "Évolutions",
            description: "Ajout régulier de nouvelles fonctionnalités.",
            icon: Heart
          }
        ]}
      />
    </ServiceLayout>
  );
};

export default BotsServicePage;