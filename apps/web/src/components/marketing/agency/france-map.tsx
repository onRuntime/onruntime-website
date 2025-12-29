'use client';

import React from 'react';
import { Link } from '@onruntime/translations/next';
import { getAgencyById } from '@/constants/agencies';

interface FranceMapProps {
  cities: string[];
}

const FranceMap: React.FC<FranceMapProps> = ({ cities }) => {
  
  const cityCoordinates = {
    paris: { x: 235, y: 170, label: "Paris" },
    marseille: { x: 250, y: 320, label: "Marseille" },
    lyon: { x: 270, y: 240, label: "Lyon" },
    toulouse: { x: 170, y: 280, label: "Toulouse" },
    nice: { x: 300, y: 300, label: "Nice" },
    nantes: { x: 130, y: 200, label: "Nantes" },
    montpellier: { x: 220, y: 310, label: "Montpellier" },
    strasbourg: { x: 330, y: 150, label: "Strasbourg" },
    bordeaux: { x: 150, y: 260, label: "Bordeaux" },
    lille: { x: 225, y: 100, label: "Lille" },
    rouen: { x: 190, y: 140, label: "Rouen" }
  };
  
  const validCities = cities.filter(city => 
    cityCoordinates[city as keyof typeof cityCoordinates] !== undefined
  );

  return (
    <div className="relative w-full aspect-[0.9] max-w-md mx-auto">
      <svg
        viewBox="0 0 450 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle
          cx="225"
          cy="225"
          r="160"
          stroke="hsl(var(--border))"
          strokeWidth="2"
          fill="hsl(var(--muted))"
        />
        
        <circle
          cx="370"
          cy="330"
          r="25"
          stroke="hsl(var(--border))"
          strokeWidth="2"
          fill="hsl(var(--muted))"
        />

        {validCities.map(city => {
          const cityKey = city as keyof typeof cityCoordinates;
          const coords = cityCoordinates[cityKey];
          const agency = getAgencyById(city);
          const cityName = agency ? agency.name : coords.label;
          
          if (!coords) return null;
          
          return (
            <g key={city} className="cursor-pointer">
              <Link href={`/agency/${city}`}>
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r={8}
                  className="fill-onruntime-blue/70 hover:fill-onruntime-blue transition-colors"
                />
                <text
                  x={coords.x}
                  y={coords.y + 20}
                  textAnchor="middle"
                  className="text-xs font-medium pointer-events-none fill-current"
                >
                  {cityName}
                </text>
              </Link>
            </g>
          );
        })}

        <text
          x="30"
          y="30"
          className="text-xs fill-current text-muted-foreground"
        >
          Découvrez nos services adaptés à votre ville
        </text>
      </svg>
    </div>
  );
};

export default FranceMap;