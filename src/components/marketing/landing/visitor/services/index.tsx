'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const colorSets = [
  {
    text: 'text-black',
    button: 'bg-black text-white',
  },
  {
    text: 'text-[#652599]',
    button: 'bg-[#652599] text-white',
  },
  {
    text: 'text-[#23cd82]',
    button: 'bg-[#23cd82] text-white',
  },
  {
    text: 'text-[#ee2400]',
    button: 'bg-[#ee2400] text-white',
  },
];

const services = [
  {
    color: '#652599',
    title: 'Design UX UI/Branding',
    description:
      'Moodboard, maquettage UI complet, prototypage et identité graphique faite maison.',
  },
  {
    color: '#23cd82',
    title: 'Développement Front & Back End',
    description:
      'Développement from-scratch côté front (web, app) et back (API, bots).',
  },
  {
    color: '#ee2400',
    title: 'Intégrations Web',
    description:
      'Création ou adaptation de projets avec Wordpress, Shopify, Webflow, etc.',
  },
];

const Services: React.FC = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY;
      const earlyOffset = 25; 
      const relativeY = scrollY - containerTop + earlyOffset;

      const sectionHeight = 300; 
      let index = Math.floor(relativeY / sectionHeight);
      index = Math.max(0, Math.min(index, colorSets.length - 1));

      setColorIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = colorSets[colorIndex];

  return (
    <div className="mt-8 flex justify-center gap-24 px-4" ref={containerRef}>
      {/* Bloc gauche (texte + bouton) */}
      <div className="flex flex-col gap-4 sticky top-24 self-start transition-all duration-500">
        <h2
          className={`font-semibold text-3xl transition-colors duration-1000 ease-out ${colors.text}`}
        >
          Un studio qui combine <br />
          les savoirs-faire créatifs
        </h2>
        <p>
          Nous sommes experts dans nos domaines : <br />
          développement web, design d&apos;interface, audits ...
        </p>
        <Link href="/">
          <button
            className={`mt-8 px-6 py-2 rounded-md shadow hover:opacity-80 transition-all duration-500 ${colors.button}`}
          >
            En savoir plus
          </button>
        </Link>
      </div>

      {/* Bloc droite (services) */}
      <div className="mt-44 w-[400px]">
        <p className="mb-8">
          Nos projets allient nos compétences afin qu’ils soient resplendissants sur le web.
        </p>

        {services.map((service, index) => (
          <div key={index} style={{ minHeight: '300px' }}>
            <div
              className="mb-4 p-6 rounded-xl h-[200px]"
              style={{ backgroundColor: service.color }}
            ></div>
            <h3 className="font-semibold text-2xl">{service.title}</h3>
            <p className="mb-8">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
