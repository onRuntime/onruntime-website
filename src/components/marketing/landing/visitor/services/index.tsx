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
    color: "#652599",
    title: "Design UX UI/Branding",
    description:
      "Chacun de nos projets à son moodboard, et son maquettage UI complet et prototypé. Même leurs identités graphiques sont faites maisons.",
  },
  {
    color: "#23cd82",
    title: "Développement Front & Back End",
    description:
      "Nous réalisons chacun de nos projets from-scratch avec un développement front (web, app, logiciel) ainsi qu’en profondeur avec le back (api, bots).",
  },
  {
    color: "#ee2400",
    title: "Intégrations Web",
    description:
      "Selon les besoins de nos projets, nous pouvons les créer ou les modifier via des intégrations comme Wordpress, Shopify, Webflow, etc.",
  },
];

const Services: React.FC = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleScroll = () => {
      if (!containerRef.current || isMobile) return;

      const containerTop =
        containerRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY;
      const earlyOffset = 25;
      const relativeY = scrollY - containerTop + earlyOffset;

      const sectionHeight = 300;
      let index = Math.floor(relativeY / sectionHeight);
      index = Math.max(0, Math.min(index, colorSets.length - 1));

      setColorIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const colors = isMobile ? colorSets[0] : colorSets[colorIndex];

  return (
    <div
      className="mt-8 flex flex-col md:flex-row justify-center gap-0 md:gap-24 px-4"
      ref={containerRef}
    >
      {/* Bloc gauche */}
      <div
        className={`
          flex flex-col gap-4
          md:sticky md:top-24 md:self-start
          transition-all duration-500 md:w-1/3
          text-center md:text-left
          ${colors.text}
        `}
        style={{ position: isMobile ? "static" : undefined }}
      >
        <h2 className="font-semibold text-3xl transition-colors duration-1000 ease-out">
          Un studio qui combine <br />
          les savoirs-faire créatifs
        </h2>
        <p>
          Nous sommes experts dans nos domaines : <br />
          développement web, design d&apos;interface, audits ...
        </p>
        <Link href="/">
          <button
            className={`mt-8 px-6 py-2 rounded-md shadow hover:opacity-80 transition-all duration-500 ${colors.button} mx-auto md:mx-0`}
          >
            En savoir plus
          </button>
        </Link>
      </div>

      {/* Bloc droite */}
      <div className="mt-24 md:mt-44 w-full max-w-md md:w-[400px]">
        <p className="mb-8">
          Nos projets allient nos compétences afin qu’ils soient resplendissants
          sur le web.
        </p>

        {services.map((service, index) => (
          <div key={index} className="min-h-[200px] mb-12">
            <div
              className="mb-4 p-6 rounded-xl"
              style={{ backgroundColor: service.color, minHeight: "150px" }}
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
