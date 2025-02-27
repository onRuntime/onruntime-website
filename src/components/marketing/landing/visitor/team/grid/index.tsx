import React from 'react';
import TeamMemberCard from './card';
import TeamMembers from '@/constants/team-members';
import { roleToDisplay } from '@/types/team-member';

const TeamGrid: React.FC = () => {
  const selectedMembers = ['jeremy-baudrin', 'antoine-kingue', 'lucas-bodin', 'younes-bessa'];
  const teamMembersArray = Object.entries(TeamMembers)
    .filter(([key]) => selectedMembers.includes(key))
    .map(([, member]) => ({
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