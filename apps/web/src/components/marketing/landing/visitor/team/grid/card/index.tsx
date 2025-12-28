import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface TeamMemberCardProps {
  name: string;
  mainRole: string;
  secondaryRole?: string;
  image: string;
  link: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  mainRole,
  secondaryRole,
  image,
  link,
}) => {
  return (
    <div className="flex-[1] min-w-0 transition-all duration-300 ease-in-out hover:flex-[1.5] group">
      <div className="flex flex-col gap-2 w-full">
        <div className="relative w-full h-[280px] rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={name}
            className="object-cover object-top"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Link href={link} target="_blank">
              <Button 
                className="bg-white text-black hover:bg-white/90 hover:text-black"
              >
                Détails
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col min-w-0">
          <h3 className="text-foreground text-sm md:text-base font-semibold truncate">
            {name}
          </h3>
          <div className="flex flex-col text-muted-foreground text-xs md:text-sm">
            <span className="truncate">{mainRole}</span>
            {secondaryRole && (
              <span className="truncate">{secondaryRole}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;