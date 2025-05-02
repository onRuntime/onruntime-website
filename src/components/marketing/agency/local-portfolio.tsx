'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Routes from '@/constants/routes';
import { Tag } from '@/types/project';
import Projects from '@/constants/projects';

// City-specific portfolio data
const portfolioData = {
  paris: {
    title: "Nos réalisations à Paris",
    description: "Découvrez quelques-uns de nos projets réalisés pour des entreprises parisiennes. Notre expertise en fintech, fashion tech et adtech a permis de créer des solutions innovantes pour des acteurs majeurs de la French Tech.",
    customCaseStudy: {
      title: "FinanceFast - Dashboard fintech",
      description: "Application de gestion financière pour une startup fintech parisienne avec visualisation de données en temps réel, authentification multi-facteurs et conformité RGPD. Développée avec React, Node.js et des graphiques D3.js optimisés.",
      image: "/static/images/projects/custom-paris.jpg"
    }
  },
  marseille: {
    title: "Nos réalisations à Marseille",
    description: "Découvrez nos projets développés pour le marché marseillais. Notre expertise en technologies maritimes et logistiques a permis de créer des solutions innovantes pour le port et les acteurs méditerranéens.",
    customCaseStudy: {
      title: "MedLogistics - Suivi portuaire",
      description: "Plateforme de suivi logistique pour les opérations portuaires de Marseille avec traçabilité des conteneurs, API connectée aux systèmes douaniers et interface multilingue. Réalisée avec React, Node.js et MongoDB.",
      image: "/static/images/projects/custom-marseille.jpg"
    }
  },
  lyon: {
    title: "Nos réalisations à Lyon",
    description: "Découvrez nos projets réalisés pour des entreprises lyonnaises. Notre expertise dans les domaines de l'industrie 4.0, la cleantech et la healthtech a permis de développer des solutions sur mesure pour le marché rhônalpin.",
    customCaseStudy: {
      title: "IndustriaConnect - Plateforme IoT",
      description: "Solution IoT industrielle pour un leader lyonnais de la chimie avec monitoring temps réel des machines, analyses prédictives et interface responsive. Développée avec Angular, Python et technologies cloud AWS.",
      image: "/static/images/projects/custom-lyon.jpg"
    }
  },
  toulouse: {
    title: "Nos réalisations à Toulouse",
    description: "Découvrez nos projets développés pour le secteur aérospatial toulousain. Notre expertise en systèmes critiques et solutions IoT a permis de créer des applications innovantes pour Airbus et ses sous-traitants.",
    customCaseStudy: {
      title: "AeroTrack - Suivi de maintenance",
      description: "Application de suivi de maintenance pour équipements aéronautiques avec workflow sécurisé, historique complet et conformité aux normes aéronautiques. Réalisée avec React Native, Node.js et PostgreSQL.",
      image: "/static/images/projects/custom-toulouse.jpg"
    }
  },
  nice: {
    title: "Nos réalisations à Nice",
    description: "Découvrez nos projets réalisés sur la Côte d'Azur. Notre expertise en smart city, tourisme digital et proptech a permis de créer des solutions innovantes adaptées à la clientèle internationale de la région.",
    customCaseStudy: {
      title: "LuxStay - Plateforme de réservation premium",
      description: "Application de réservation d'hébergements de luxe avec expérience utilisateur hautement personnalisée, intégration de paiements sécurisés et interface multilingue. Réalisée avec Next.js, Node.js et Stripe.",
      image: "/static/images/projects/custom-nice.jpg"
    }
  },
  nantes: {
    title: "Nos réalisations à Nantes",
    description: "Découvrez nos projets développés dans la région nantaise. Notre expertise en green tech, e-commerce et solutions créatives a permis de créer des applications innovantes et éco-responsables.",
    customCaseStudy: {
      title: "EcoShop - E-commerce responsable",
      description: "Plateforme d'e-commerce éco-responsable pour une coopérative nantaise avec calcul d'empreinte carbone des produits, options de livraison verte et interface optimisée. Développée avec Next.js, Node.js et PostgreSQL.",
      image: "/static/images/projects/custom-nantes.jpg"
    }
  },
  montpellier: {
    title: "Nos réalisations à Montpellier",
    description: "Découvrez nos projets réalisés pour le marché montpelliérain. Notre expertise en medtech, agritech et gaming a permis de développer des solutions sur mesure pour l'écosystème local en pleine croissance.",
    customCaseStudy: {
      title: "MedVision - Télémédecine innovante",
      description: "Application de télémédecine pour un laboratoire montpelliérain avec vidéoconsultation sécurisée, suivi de patients et conformité aux normes de santé. Réalisée avec React, Node.js et MongoDB.",
      image: "/static/images/projects/custom-montpellier.jpg"
    }
  },
  strasbourg: {
    title: "Nos réalisations à Strasbourg",
    description: "Découvrez nos projets réalisés dans la région strasbourgeoise. Notre expertise en solutions transfrontalières, edtech et fintech a permis de créer des applications multilingues adaptées au contexte européen.",
    customCaseStudy: {
      title: "EuroLearn - Plateforme éducative",
      description: "Plateforme éducative trilingue (français, allemand, anglais) pour une institution européenne avec modules interactifs, tracking des progrès et interface responsive. Développée avec Vue.js, Laravel et MySQL.",
      image: "/static/images/projects/custom-strasbourg.jpg"
    }
  },
  bordeaux: {
    title: "Nos réalisations à Bordeaux",
    description: "Découvrez nos projets réalisés pour le marché bordelais. Notre expertise en winetech, tourisme et mobilité a permis de développer des solutions innovantes parfaitement adaptées à l'identité de la région.",
    customCaseStudy: {
      title: "VinTrack - Traçabilité viticole",
      description: "Application de traçabilité pour domaines viticoles bordelais avec QR codes, historique de production et interface client personnalisée. Réalisée avec React Native, Node.js et une blockchain privée.",
      image: "/static/images/projects/custom-bordeaux.jpg"
    }
  },
  lille: {
    title: "Nos réalisations à Lille",
    description: "Découvrez nos projets développés pour la métropole lilloise. Notre expertise en retail tech, cybersécurité et e-commerce transfrontalier a permis de créer des solutions innovantes pour les leaders de la distribution.",
    customCaseStudy: {
      title: "RetailPro - Dashboard omnicanal",
      description: "Solution omnicanale pour une enseigne lilloise avec synchronisation inventaire, analyse client et interface vendeur mobile. Développée avec React, Node.js et intégration aux principaux ERP retail.",
      image: "/static/images/projects/custom-lille.jpg"
    }
  },
  rouen: {
    title: "Nos réalisations à Rouen",
    description: "Découvrez nos projets réalisés en Normandie. Notre expertise en industrie connectée, logistique fluviale et agritech a permis de développer des solutions sur mesure pour accompagner la transformation numérique des entreprises régionales.",
    customCaseStudy: {
      title: "AgriConnect - Gestion agricole",
      description: "Plateforme de gestion agricole pour coopératives normandes avec suivi des cultures, optimisation logistique et interface simplifiée. Réalisée avec React, Node.js et bases de données géospatiales.",
      image: "/static/images/projects/custom-rouen.jpg"
    }
  }
};

interface LocalPortfolioProps {
  city: string;
}

const LocalPortfolio: React.FC<LocalPortfolioProps> = ({ city }) => {
  // Get portfolio data for this city, or use Paris as default
  const portfolio = portfolioData[city as keyof typeof portfolioData] || portfolioData.paris;
  
  // Get featured projects - in a real app, you would filter by city
  const featuredProjects = Projects.filter(project => 
    project.tags.includes(Tag.FEATURED)
  ).slice(0, 1);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          {portfolio.title}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {portfolio.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Custom case study specific to this city */}
        <div className="flex flex-col h-full">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
            <Image 
              src={portfolio.customCaseStudy.image}
              alt={portfolio.customCaseStudy.title}
              className="object-cover"
              fill
              // Handle errors in client component
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/static/images/projects/placeholder.jpg";
              }}
            />
          </div>
          <h3 className="text-xl font-medium">{portfolio.customCaseStudy.title}</h3>
          <p className="mt-2 mb-4 text-muted-foreground">{portfolio.customCaseStudy.description}</p>
          <div className="mt-auto">
            <Button variant="outline" className="w-full">
              Demander une étude de cas similaire
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* One of our featured projects */}
        {featuredProjects.map((project) => (
          <div key={project.id} className="flex flex-col h-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
              <Image 
                src={project.showcaseUrl} 
                alt={project.name}
                className="object-cover"
                fill
                // Handle errors in client component
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/static/images/projects/placeholder.jpg";
                }}
              />
            </div>
            <h3 className="text-xl font-medium">{project.name}</h3>
            <p className="mt-2 mb-4 text-muted-foreground line-clamp-2">{project.description}</p>
            <div className="mt-auto">
              <Link href={Routes.project(project.id)}>
                <Button variant="outline" className="w-full">
                  Voir le projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href={Routes.projects}>
          <Button>
            Voir tous nos projets
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LocalPortfolio;