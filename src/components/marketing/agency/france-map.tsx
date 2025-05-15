'use client';

import React from 'react';
import Link from 'next/link';

interface FranceMapProps {
  cities: string[];
}

const FranceMap: React.FC<FranceMapProps> = ({ cities }) => {
  
  const cityCoordinates = {
    paris: { x: 245, y: 115, label: "Paris" },
    marseille: { x: 280, y: 340, label: "Marseille" },
    lyon: { x: 298, y: 240, label: "Lyon" },
    toulouse: { x: 170, y: 310, label: "Toulouse" },
    nice: { x: 340, y: 330, label: "Nice" },
    nantes: { x: 120, y: 180, label: "Nantes" },
    montpellier: { x: 230, y: 325, label: "Montpellier" },
    strasbourg: { x: 370, y: 140, label: "Strasbourg" },
    bordeaux: { x: 140, y: 270, label: "Bordeaux" },
    lille: { x: 240, y: 60, label: "Lille" },
    rouen: { x: 200, y: 105, label: "Rouen" }
  };

  return (
    <div className="relative w-full aspect-[0.85] max-w-md mx-auto">
      <svg
        viewBox="0 0 450 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        
        <path
          d="M175,40 C160,45 145,60 135,75 C125,90 120,110 110,125 C100,140 85,155 75,175 C65,195 60,220 50,240 C40,260 25,280 20,305 C15,330 15,355 20,380 C25,405 35,425 50,445 C65,465 85,480 105,490 C125,500 150,505 175,505 C200,505 225,500 245,490 C265,480 285,465 300,445 C315,425 325,405 330,380 C335,355 340,330 345,305 C350,280 360,260 370,240 C380,220 390,200 395,175 C400,150 400,125 395,100 C390,75 380,50 365,35 C350,20 330,10 305,5 C280,0 255,5 230,15 C205,25 190,35 175,40Z"
          stroke="hsl(var(--border))"
          strokeWidth="2"
          fill="hsl(var(--muted))"
        />

        {cities.map(city => {
          const coords = cityCoordinates[city as keyof typeof cityCoordinates];
          if (!coords) return null;
          
          return (
            <g key={city}>
              <Link href={`/agency/${city}`}>
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r={10}
                  className="fill-onruntime-blue/70 hover:fill-onruntime-blue cursor-pointer transition-colors"
                />
                <text
                  x={coords.x}
                  y={coords.y + 25}
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="12"
                  className="pointer-events-none font-medium"
                >
                  {coords.label}
                </text>
              </Link>
            </g>
          );
        })}

        <text
          x="30"
          y="30"
          fill="currentColor"
          fontSize="12"
          className="text-muted-foreground"
        >
          Cliquez sur une ville pour voir notre agence locale
        </text>
      </svg>
    </div>
  );
};

export default FranceMap;