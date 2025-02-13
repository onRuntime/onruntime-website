import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface TeamMember {
  name: string;
  mainRole: string;
  secondaryRole?: string;
  image: string;
  link: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Baudrin Jérémy",
    mainRole: "Co-Fondateur",
    secondaryRole: "Développeur",
    image: "/static/images/members/jeremy-baudrin.jpg",
    link: "https://jeremybdn.fr"
  },
  {
    name: "Kingue Antoine",
    mainRole: "Co-Fondateur",
    secondaryRole: "Développeur",
    image: "/static/images/members/antoine-kingue.jpg",
    link: "https://antoinek.fr"
  },
  {
    name: "Bodin Lucas",
    mainRole: "Co-Fondateur",
    secondaryRole: "Designer",
    image: "/static/images/members/lucas-bodin.jpg",
    link: "https://lucasb.fr"
  },
  {
    name: "Bessa Younès",
    mainRole: "Lead Développeur",
    image: "/static/images/members/younes-bessa.jpg",
    link: "https://younesbessa.com"
  }
];

const TeamGrid: React.FC = () => {
  return (
    <div className="flex w-full gap-2">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex-[1] min-w-0 transition-all duration-300 ease-in-out hover:flex-[1.5] group"
        >
          <div className="flex flex-col gap-2 w-full">
            <div className="relative w-full h-[280px] rounded-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                className="object-cover object-top"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link href={member.link}>
                  <Button 
                    className="bg-white text-black hover:bg-white/90 hover:text-black"
                  >
                    Détails
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="text-foreground text-sm md:text-base font-medium truncate">{member.name}</h3>
              <div className="flex flex-col text-muted-foreground text-xs md:text-sm">
                <span className="truncate">{member.mainRole}</span>
                {member.secondaryRole && (
                  <span className="truncate">{member.secondaryRole}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamGrid;