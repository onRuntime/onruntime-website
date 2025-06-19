'use client';

import { Button } from "@/components/ui/button";
import { TeamMember } from "@/types/team-member";
import { Globe } from "lucide-react";

/**
 * Renders a button that opens a team member's website in a new tab.
 * 
 * @param {Object} props - Component props
 * @param {TeamMember} props.member - Team member data containing website URL and name
 * @returns {JSX.Element} A button with a globe icon that opens the member's website
 */
export const MemberWebsiteButton = ({ member }: { member: TeamMember }) => {
  const handleClick = () => window.open(member.website, "_blank");

  return (
    <Button 
      variant="outline" 
      size="icon"
      onClick={handleClick}
      title={`Visit ${member.name}'s website`}
      aria-label={`Open ${member.name}'s website in new tab`}
    >
      <Globe className="w-4 h-4"/>
    </Button>
  );
};