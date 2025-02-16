import React from 'react';
import TeamMemberCard from './card';
import TeamMembers from '@/constants/team-members';
import { TeamRole } from '@/types/team-member';

const roleToDisplay: Record<TeamRole, string> = {
  [TeamRole.CO_FOUNDER]: "Co-Fondateur",
  [TeamRole.DEVELOPER]: "Développeur",
  [TeamRole.LEAD_DEVELOPER]: "Lead Développeur",
  [TeamRole.DESIGNER]: "Designer",
  [TeamRole.MARKETING]: "Marketing",
  [TeamRole.COMMUNITY_MANAGER]: "Community Manager",
  [TeamRole.PRODUCT_MANAGER]: "Product Manager",
  [TeamRole.STRATEGY_DEVELOPER]: "Strategy Developer"
};

const TeamGrid: React.FC = () => {
  const selectedMembers = ['jeremy-baudrin', 'antoine-kingue', 'lucas-bodin', 'younes-bessa'];
  const teamMembersArray = Object.entries(TeamMembers)
    .filter(([key]) => selectedMembers.includes(key))
    .map(([_, member]) => ({
    name: member.name,
    mainRole: roleToDisplay[member.roles[0]],
    secondaryRole: member.roles[1] ? roleToDisplay[member.roles[1]] : undefined,
    image: member.avatar || '/static/images/placeholder-avatar.jpg',
    link: member.website || member.linkedin || member.github || '#'
  }));

  return (
    <div className="flex w-full gap-2">
      {teamMembersArray.map((member) => (
        <TeamMemberCard
          key={member.name}
          name={member.name}
          mainRole={member.mainRole}
          secondaryRole={member.secondaryRole}
          image={member.image}
          link={member.link}
        />
      ))}
    </div>
  );
};

export default TeamGrid;