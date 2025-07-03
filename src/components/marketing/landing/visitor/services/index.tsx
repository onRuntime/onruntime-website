"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const colorSets = [
  {
    text: "text-black",
    button: "bg-black text-white",
  },
  {
    text: "text-[#652599]",
    button: "bg-[#652599] text-white",
  },
  {
    text: "text-[#23cd82]",
    button: "bg-[#23cd82] text-white",
  },
  {
    text: "text-[#ee2400]",
    button: "bg-[#ee2400] text-white",
  },
];

const services = [
  {
    title: "Design UX UI/Branding",
    description:
      "Chacun de nos projets à son moodboard, et son maquettage UI complet et prototypé. Même leurs identités graphiques sont faites maisons.",
  },
  {
    title: "Développement Front & Back End",
    description:
      "Nous réalisons chacun de nos projets from-scratch avec un développement front (web, app, logiciel) ainsi qu'en profondeur avec le back (api, bots).",
  },
  {
    title: "Intégrations Web",
    description:
      "Selon les besoins de nos projets, nous pouvons les créer ou les modifier via des intégrations comme Wordpress, Shopify, Webflow, etc.",
  },
];

const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="128"
    height="128"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
  </svg>
);

const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="128"
    height="128"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m16 18 6-6-6-6"></path>
    <path d="m8 6-6 6 6 6"></path>
  </svg>
);

const LayersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="128"
    height="128"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
    <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
    <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
  </svg>
);

const Services: React.FC = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    const handleScroll = () => {
      if (!containerRef.current || isMobile) return;

      const windowHeight = window.innerHeight;
      const anticipationDistance = 50;

      let newColorIndex = 0;

      serviceRefs.current.forEach((serviceRef, index) => {
        if (serviceRef) {
          const rect = serviceRef.getBoundingClientRect();
          const serviceTop = rect.top;
          const triggerPoint = windowHeight / 2 + anticipationDistance;

          if (serviceTop <= triggerPoint && serviceTop > -rect.height) {
            newColorIndex = index + 1;
          }
        }
      });

      newColorIndex = Math.min(newColorIndex, colorSets.length - 1);
      setColorIndex(newColorIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("resize", updateIsMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const colors = isMobile ? colorSets[0] : colorSets[colorIndex];

  return (
    <div
      className="mt-32 flex flex-col md:flex-row justify-center gap-0 md:gap-24 px-4"
      ref={containerRef}
    >
      {/* Bloc gauche */}
      <div
        className={`
          flex flex-col gap-4
          md:sticky md:top-24 md:self-start
          transition-all duration-3000ms] md:w-1/3
          text-center md:text-left
          ${colors.text}
        `}
        style={{ position: isMobile ? "static" : undefined }}
      >
        <h2 className="font-semibold text-3xl transition-colors duration-[3000ms] ease-out">
          Un studio qui combine <br />
          les savoirs-faire créatifs
        </h2>
        <p>
          Nous sommes experts dans nos domaines : <br />
          développement web, design d&apos;interface, audits ...
        </p>
        <Link href="/">
          <button
            className={`mt-8 px-4 py-2 text-sm rounded-md shadow hover:opacity-80 transition-all duration-[3000ms] ${colors.button} mx-auto md:mx-0`}
          >
            En savoir plus
          </button>
        </Link>
      </div>

      {/* Bloc droite */}
      <div className="mt-24 md:mt-44 w-full max-w-md md:w-[400px]">
        <p className="mb-8">
          Nos projets allient nos compétences afin qu&apos;ils soient
          resplendissants sur le web.
        </p>

        {services.map((service, index) => (
          <div
            key={service.title}
            className="min-h-[200px] mb-12"
            ref={(el) => {
              serviceRefs.current[index] = el;
            }}
          >
            <div
              className="mb-4 p-6 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-md border border-white/30"
              style={{
                minHeight: "150px",
                background:
                  "radial-gradient(circle at center, rgba(250,250,255,0.8), rgba(211, 234, 255, 0.4))",
              }}
            >
              {/* Différent SVG pour chaque service */}
              {index === 0 ? (
                <PaletteIcon className="w-20 h-20 md:w-24 md:h-24 text-[#b1d9ff] opacity-50" />
              ) : index === 1 ? (
                <CodeIcon className="w-20 h-20 md:w-24 md:h-24 text-[#b1d9ff] opacity-50" />
              ) : (
                <LayersIcon className="w-20 h-20 md:w-24 md:h-24 text-[#b1d9ff] opacity-50" />
              )}
            </div>
            <h3 className="font-semibold text-2xl">{service.title}</h3>
            <p className="mb-8">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
