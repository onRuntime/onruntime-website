'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Video, Calendar } from 'lucide-react';
import Routes from '@/constants/routes';

// City-specific CTA data
const ctaData = {
  paris: {
    title: "Développer votre projet digital à Paris",
    description: "Prêt à donner vie à votre projet avec notre expertise parisienne ? Nous collaborons à distance ou en visioconférence avec les entreprises de la région parisienne, offrant des solutions adaptées au marché dynamique de la capitale.",
    city: "Paris",
    meetingType: "Visioconférence ou réunion à votre convenance",
    appeal: "Expertise du marché parisien sans contraintes géographiques",
  },
  marseille: {
    title: "Lancer votre projet digital à Marseille",
    description: "Besoin d'un partenaire pour votre projet marseillais ? Notre équipe travaille en collaboration à distance avec les entreprises de PACA, offrant des solutions adaptées à l'écosystème méditerranéen et au marché local.",
    city: "Marseille",
    meetingType: "Consultation en ligne ou présentiel selon vos besoins",
    appeal: "Expertise locale, flexibilité maximale",
  },
  lyon: {
    title: "Concrétiser votre projet digital à Lyon",
    description: "Prêt à développer votre solution digitale avec notre expertise lyonnaise ? Nous accompagnons à distance les entreprises de la région Auvergne-Rhône-Alpes avec des solutions adaptées aux spécificités de l'écosystème local.",
    city: "Lyon",
    meetingType: "Consultation en ligne avec suivi personnalisé",
    appeal: "Connaissance du marché rhônalpin, service flexible",
  },
  toulouse: {
    title: "Réaliser votre projet digital à Toulouse",
    description: "Besoin d'un partenaire digital pour votre entreprise toulousaine ? Notre équipe collabore en ligne avec les acteurs locaux, proposant des solutions adaptées aux spécificités techniques du marché aérospatial et tech de la ville rose.",
    city: "Toulouse",
    meetingType: "Visioconférences sécurisées adaptées aux projets sensibles",
    appeal: "Expertise aérospatiale et digitale sans contraintes géographiques",
  },
  nice: {
    title: "Créer votre projet digital à Nice",
    description: "Prêt à lancer votre projet sur la Côte d'Azur ? Nous travaillons à distance avec les entreprises de la région, offrant des solutions digitales adaptées au marché international et touristique local.",
    city: "Nice",
    meetingType: "Consultations multilingues en ligne ou par téléphone",
    appeal: "Expertise du marché azuréen, service personnalisé",
  },
  nantes: {
    title: "Développer votre projet digital à Nantes",
    description: "Besoin d'un partenaire pour votre projet nantais ? Notre équipe accompagne à distance les entreprises de l'Ouest avec des solutions créatives et éco-responsables adaptées à l'écosystème local.",
    city: "Nantes",
    meetingType: "Consultation en ligne avec planning flexible",
    appeal: "Connaissance du marché nantais, approche collaborative",
  },
  montpellier: {
    title: "Lancer votre projet digital à Montpellier",
    description: "Prêt à développer votre solution digitale à Montpellier ? Nous collaborons à distance avec les entreprises occitanes, offrant des solutions adaptées aux secteurs medtech et agritech en pleine croissance.",
    city: "Montpellier",
    meetingType: "Visioconférences et suivi de projet en ligne",
    appeal: "Expertise locale, accompagnement personnalisé",
  },
  strasbourg: {
    title: "Réaliser votre projet digital à Strasbourg",
    description: "Besoin d'un partenaire digital transfrontalier ? Notre équipe accompagne à distance les entreprises strasbourgeoises avec des solutions multilingues adaptées au contexte européen régional.",
    city: "Strasbourg",
    meetingType: "Consultations en ligne en français, allemand ou anglais",
    appeal: "Expertise transfrontalière, service flexible",
  },
  bordeaux: {
    title: "Créer votre projet digital à Bordeaux",
    description: "Prêt à donner vie à votre projet bordelais ? Nous travaillons en collaboration à distance avec les entreprises de la région, développant des solutions adaptées aux secteurs du vin, du tourisme et de la mobilité.",
    city: "Bordeaux",
    meetingType: "Réunions virtuelles adaptées à votre emploi du temps",
    appeal: "Connaissance du marché girondin, accompagnement sur-mesure",
  },
  lille: {
    title: "Développer votre projet digital à Lille",
    description: "Besoin d'un partenaire pour votre projet lillois ? Notre équipe accompagne à distance les entreprises des Hauts-de-France, avec des solutions adaptées au retail et au commerce transfrontalier.",
    city: "Lille",
    meetingType: "Consultations en ligne avec partage de documents",
    appeal: "Expertise du marché nordiste et transfrontalier",
  },
  rouen: {
    title: "Concrétiser votre projet digital à Rouen",
    description: "Prêt à digitaliser votre entreprise normande ? Nous collaborons à distance avec les acteurs locaux, proposant des solutions adaptées à l'industrie, la logistique fluviale et l'agriculture en pleine transformation.",
    city: "Rouen",
    meetingType: "Visioconférences et suivi de projet régulier",
    appeal: "Connaissance du marché normand, accompagnement flexible",
  }
};

interface ContactCTAProps {
  city: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ city }) => {
  // Get CTA data for this city, or use Paris as default
  const data = ctaData[city as keyof typeof ctaData] || ctaData.paris;

  return (
    <div className="relative overflow-hidden rounded-lg border bg-card p-12">
      <Star className="absolute right-8 top-8 text-onruntime-blue/20 w-24 h-24 rotate-12" />
      <div className="max-w-2xl">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          {data.title}
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          {data.description}
        </p>
        
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Video className="h-5 w-5 text-onruntime-blue" />
            <span>{data.meetingType}</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-onruntime-blue" />
            <span>Planning adapté à vos besoins</span>
          </div>
          <div className="flex items-start gap-3">
            <Star className="h-5 w-5 text-onruntime-blue flex-shrink-0 mt-0.5" />
            <span>{data.appeal}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Link href={Routes.contact}>
            <Button size="lg">
              Discuter de votre projet à {data.city}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href={Routes.services}>
            <Button variant="outline" size="lg">
              Découvrir nos services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;