'use client';

import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

// City-specific testimonials
const testimonialData = {
  paris: {
    title: "Ce que nos clients parisiens disent de nous",
    description: "Découvrez les témoignages de nos clients à Paris, des startups innovantes aux grandes entreprises du CAC 40.",
    testimonials: [
      {
        content: "L'équipe d'onRuntime Studio à Paris a transformé notre vision en une application fintech qui a séduit nos investisseurs. Leur expertise technique et leur compréhension du marché parisien ont fait toute la différence.",
        author: {
          name: "Alexandre Leroux",
          role: "CTO",
          company: "FinanceUp, Paris 2ème",
          image: "/static/images/testimonials/alexandre-leroux.jpg"
        }
      },
      {
        content: "Un partenaire qui comprend les exigences du marché parisien et les défis spécifiques des startups de la French Tech. Leur approche méthodique et leur réactivité ont été déterminantes pour notre succès.",
        author: {
          name: "Sophie Moreau",
          role: "Fondatrice",
          company: "FashionTech Paris, Paris 9ème",
          image: "/static/images/testimonials/sophie-moreau.jpg"
        }
      }
    ]
  },
  marseille: {
    title: "Ce que nos clients marseillais disent de nous",
    description: "Découvrez les témoignages de nos clients dans la cité phocéenne, des acteurs du port aux startups méditerranéennes.",
    testimonials: [
      {
        content: "onRuntime Studio a développé une solution logistique parfaitement adaptée aux spécificités du port de Marseille. Leur connaissance de l'écosystème maritime local a été un atout majeur pour notre projet.",
        author: {
          name: "Philippe Mariani",
          role: "Directeur Opérations",
          company: "MedLogistic, Marseille",
          image: "/static/images/testimonials/philippe-mariani.jpg"
        }
      },
      {
        content: "Leur compréhension des enjeux méditerranéens et leur expertise technique nous ont permis de développer une plateforme e-santé qui connecte la France et l'Afrique du Nord. Un partenaire stratégique pour notre croissance.",
        author: {
          name: "Leila Bennani",
          role: "CEO",
          company: "MedConnect, Euroméditerranée",
          image: "/static/images/testimonials/leila-bennani.jpg"
        }
      }
    ]
  },
  lyon: {
    title: "Ce que nos clients lyonnais disent de nous",
    description: "Découvrez les témoignages de nos clients à Lyon, des industriels en transformation digitale aux startups cleantech.",
    testimonials: [
      {
        content: "onRuntime Studio a conçu une plateforme IoT qui a révolutionné nos process industriels. Leur capacité à comprendre nos métiers et à implémenter des solutions techniques robustes est impressionnante.",
        author: {
          name: "Jean-Pierre Dumont",
          role: "Directeur Innovation",
          company: "ChimieRhône, Lyon",
          image: "/static/images/testimonials/jean-pierre-dumont.jpg"
        }
      },
      {
        content: "Une équipe qui allie expertise technique et compréhension des enjeux de l'industrie 4.0. Leur solution a transformé notre usine lyonnaise en modèle d'industrie connectée avec un ROI exceptionnel.",
        author: {
          name: "Marie Laurent",
          role: "COO",
          company: "TechIndustrie, Lyon Confluence",
          image: "/static/images/testimonials/marie-laurent.jpg"
        }
      }
    ]
  },
  toulouse: {
    title: "Ce que nos clients toulousains disent de nous",
    description: "Découvrez les témoignages de nos clients à Toulouse, des acteurs de l'aérospatiale aux startups en intelligence artificielle.",
    testimonials: [
      {
        content: "La solution de maintenance prédictive développée par onRuntime Studio répond parfaitement aux exigences de sécurité de l'industrie aéronautique tout en offrant une expérience utilisateur intuitive.",
        author: {
          name: "Thomas Girard",
          role: "Responsable Innovation",
          company: "AeroComponents, Toulouse",
          image: "/static/images/testimonials/thomas-girard.jpg"
        }
      },
      {
        content: "Leur expertise en systèmes critiques et en IoT a permis de créer une application qui économise 15% de nos coûts de maintenance. Une équipe qui comprend les enjeux spécifiques de l'industrie aérospatiale.",
        author: {
          name: "Caroline Blanc",
          role: "Directrice Technique",
          company: "SpaceTech, Toulouse",
          image: "/static/images/testimonials/caroline-blanc.jpg"
        }
      }
    ]
  },
  nice: {
    title: "Ce que nos clients niçois disent de nous",
    description: "Découvrez les témoignages de nos clients sur la Côte d'Azur, des acteurs du tourisme de luxe aux startups de Sophia Antipolis.",
    testimonials: [
      {
        content: "onRuntime Studio a créé une plateforme qui répond parfaitement aux attentes de notre clientèle internationale exigeante. Leur design élégant et leurs fonctionnalités premium ont transformé notre offre digitale.",
        author: {
          name: "Emmanuel Cartier",
          role: "Directeur",
          company: "LuxuryStay, Nice",
          image: "/static/images/testimonials/emmanuel-cartier.jpg"
        }
      },
      {
        content: "Une agence qui comprend les codes du luxe et de l'hospitalité haut de gamme. Leur solution multilingue et leur attention aux détails ont fait toute la différence pour notre clientèle internationale.",
        author: {
          name: "Isabelle Moreno",
          role: "Marketing Director",
          company: "AzurTech, Sophia Antipolis",
          image: "/static/images/testimonials/isabelle-moreno.jpg"
        }
      }
    ]
  },
  nantes: {
    title: "Ce que nos clients nantais disent de nous",
    description: "Découvrez les témoignages de nos clients à Nantes, des startups créatives aux entreprises engagées dans le développement durable.",
    testimonials: [
      {
        content: "onRuntime Studio a parfaitement intégré notre engagement écologique dans notre plateforme e-commerce. Leur approche créative et responsable correspond parfaitement à l'ADN nantais de notre marque.",
        author: {
          name: "Laurent Petit",
          role: "Fondateur",
          company: "GreenShop, Nantes",
          image: "/static/images/testimonials/laurent-petit.jpg"
        }
      },
      {
        content: "Une équipe qui comprend les enjeux du numérique responsable et de l'open source. Leur solution collaborative a transformé notre façon de travailler tout en respectant nos valeurs écologiques.",
        author: {
          name: "Émilie Rousseau",
          role: "Directrice Digitale",
          company: "CoopDigital, Île de Nantes",
          image: "/static/images/testimonials/emilie-rousseau.jpg"
        }
      }
    ]
  },
  montpellier: {
    title: "Ce que nos clients montpelliérains disent de nous",
    description: "Découvrez les témoignages de nos clients à Montpellier, des startups medtech aux entreprises agritech innovantes.",
    testimonials: [
      {
        content: "La plateforme de télémédecine développée par onRuntime Studio allie sécurité des données médicales et expérience utilisateur intuitive. Un partenaire clé pour notre croissance dans le secteur de la e-santé.",
        author: {
          name: "Marc Bertrand",
          role: "CEO",
          company: "MedSoft, Montpellier",
          image: "/static/images/testimonials/marc-bertrand.jpg"
        }
      },
      {
        content: "Leur compréhension de l'écosystème technologique montpelliérain nous a permis de développer une application gaming qui a conquis notre public cible. Une équipe créative et technique à la fois.",
        author: {
          name: "Claire Dupuis",
          role: "Creative Director",
          company: "GameStudio, Montpellier",
          image: "/static/images/testimonials/claire-dupuis.jpg"
        }
      }
    ]
  },
  strasbourg: {
    title: "Ce que nos clients strasbourgeois disent de nous",
    description: "Découvrez les témoignages de nos clients à Strasbourg, des acteurs transfrontaliers aux institutions européennes.",
    testimonials: [
      {
        content: "onRuntime Studio a développé une solution parfaitement adaptée à notre contexte transfrontalier. Leur capacité à gérer un projet trilingue et à comprendre les spécificités du marché allemand a été déterminante.",
        author: {
          name: "Stefan Müller",
          role: "Directeur Général",
          company: "RhinTech, Strasbourg",
          image: "/static/images/testimonials/stefan-muller.jpg"
        }
      },
      {
        content: "Une équipe qui maîtrise les enjeux européens et les exigences des institutions. Leur plateforme éducative multilingue est devenue une référence pour nos programmes transfrontaliers.",
        author: {
          name: "Anne Schneider",
          role: "Directrice Programmes",
          company: "EuroLearn, Strasbourg",
          image: "/static/images/testimonials/anne-schneider.jpg"
        }
      }
    ]
  },
  bordeaux: {
    title: "Ce que nos clients bordelais disent de nous",
    description: "Découvrez les témoignages de nos clients à Bordeaux, des domaines viticoles aux startups tourtech innovantes.",
    testimonials: [
      {
        content: "La solution de traçabilité développée par onRuntime Studio a transformé notre approche du marché international. Leur compréhension du secteur viticole bordelais et leur expertise technique ont fait toute la différence.",
        author: {
          name: "Pierre Lafont",
          role: "Propriétaire",
          company: "Château Digital, Bordeaux",
          image: "/static/images/testimonials/pierre-lafont.jpg"
        }
      },
      {
        content: "Une équipe qui allie créativité et technicité, parfaitement en phase avec l'identité bordelaise. Leur application d'œnotourisme a transformé l'expérience de nos visiteurs internationaux.",
        author: {
          name: "Sophie Martell",
          role: "Directrice Marketing",
          company: "WineTour, Bordeaux",
          image: "/static/images/testimonials/sophie-martell.jpg"
        }
      }
    ]
  },
  lille: {
    title: "Ce que nos clients lillois disent de nous",
    description: "Découvrez les témoignages de nos clients à Lille, des géants du retail aux startups e-commerce transfrontalières.",
    testimonials: [
      {
        content: "onRuntime Studio a développé une solution omnicanale qui a transformé notre relation client. Leur expertise en retail tech et leur compréhension du marché nordiste ont été des atouts clés.",
        author: {
          name: "Nicolas Lefevre",
          role: "Directeur Digital",
          company: "NordRetail, Lille",
          image: "/static/images/testimonials/nicolas-lefevre.jpg"
        }
      },
      {
        content: "Une équipe qui comprend les spécificités du marché transfrontalier et les défis du e-commerce international. Leur plateforme nous a permis d'accélérer notre développement sur le Benelux.",
        author: {
          name: "Julie Durand",
          role: "E-commerce Manager",
          company: "EuroShop, Euratechnologies Lille",
          image: "/static/images/testimonials/julie-durand.jpg"
        }
      }
    ]
  },
  rouen: {
    title: "Ce que nos clients normands disent de nous",
    description: "Découvrez les témoignages de nos clients à Rouen, des industries traditionnelles en transformation aux coopératives agricoles innovantes.",
    testimonials: [
      {
        content: "onRuntime Studio a accompagné notre transformation digitale avec une solution parfaitement adaptée à nos contraintes industrielles. Leur compréhension du tissu économique normand a été un véritable atout.",
        author: {
          name: "François Dubois",
          role: "Directeur Industriel",
          company: "NormandieIndustrie, Rouen",
          image: "/static/images/testimonials/francois-dubois.jpg"
        }
      },
      {
        content: "Leur application de gestion agricole a simplifié le quotidien de nos agriculteurs tout en optimisant notre logistique. Une équipe à l'écoute qui comprend les réalités du terrain normand.",
        author: {
          name: "Marie Leclerc",
          role: "Directrice Innovation",
          company: "AgriNormandie, Seine-Maritime",
          image: "/static/images/testimonials/marie-leclerc.jpg"
        }
      }
    ]
  }
};

interface LocalTestimonialsProps {
  city: string;
}

const LocalTestimonials: React.FC<LocalTestimonialsProps> = ({ city }) => {
  // Get testimonials for this city, or use Paris as default
  const data = testimonialData[city as keyof typeof testimonialData] || testimonialData.paris;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          {data.title}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {data.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {data.testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="flex flex-col gap-6 p-6 rounded-lg border bg-card"
          >
            <Quote className="w-8 h-8 text-onruntime-blue" />
            
            <p className="flex-1 text-foreground italic">
              &quot;{testimonial.content}&quot;
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  fill
                  className="object-cover"
                  // Handle errors in client component
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/static/images/testimonials/placeholder.jpg";
                  }}
                />
              </div>
              <div>
                <p className="font-medium text-foreground">{testimonial.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.author.role}, {testimonial.author.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalTestimonials;