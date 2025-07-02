"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      "Nous réalisons chacun de nos projets from-scratch avec un développement front (web, app, logiciel) ainsi qu’en profondeur avec le back (api, bots).",
  },
  {
    title: "Intégrations Web",
    description:
      "Selon les besoins de nos projets, nous pouvons les créer ou les modifier via des intégrations comme Wordpress, Shopify, Webflow, etc.",
  },
];

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

      const containerTop =
        containerRef.current.getBoundingClientRect().top + window.scrollY;

      const scrollY = window.scrollY;
      const earlyOffset = 200;
      const relativeY = scrollY - containerTop + earlyOffset;

      const sectionHeight = 220;
      let index = Math.floor(relativeY / sectionHeight);

      if (scrollY < containerTop - 100) {
        index = 0;
      }

      index = Math.max(0, Math.min(index, colorSets.length - 1));
      setColorIndex(index);
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
              <Image
                src="/services-img.png"
                alt="palette"
                width={150}
                height={150}
                className="w-28 h-28 md:w-32 md:h-32 object-contain"
                priority={index === 0}
              />
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
