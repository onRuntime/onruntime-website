import About from '@screens/About';
import { getTeamMembers } from '@services/team';
import { TeamMember } from '@stores/team-members';
import { GetStaticProps } from 'next';

export default About;

export const getStaticProps: GetStaticProps = async () => {
    const teamMembers: TeamMember[] = getTeamMembers();

    return {
        props: {
            teamMembers
        }
    }
};