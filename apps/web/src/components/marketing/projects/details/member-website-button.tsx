'use client';

import { Button } from "@/components/ui/button";
import { TeamMember } from "@/types/team-member";
import { Globe } from "lucide-react";

export const MemberWebsiteButton = ({ member }: { member: TeamMember }) => {
  return (
    <Button 
    variant="outline" 
      size="icon"
      onClick={() => { return window.open(member.website, "_blank")}}
      title={`Visiter le site de ${member.name}`}
    >
      <Globe className="w-4 h-4"/>
    </Button>
  );
};