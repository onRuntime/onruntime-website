import React from 'react';
import TeamMemberCard from './card';

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
      {teamMembers.map((member) => (
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