import fs from 'fs';
import path, { join } from 'path';
import { TeamMember } from '@stores/team-members';
import matter from 'gray-matter';

const teamDirectory = path.join(process.cwd(), './src/data/team');

function getTeamMember(slug: string): TeamMember {
    const path: string = join(teamDirectory, '/members/', slug);
    slug = slug.replace(/\.md$/, '');

    const fileContents = fs.readFileSync(path, 'utf8');
    const { data } = matter(fileContents);

    return data as TeamMember;
};

export function getTeamMembers(): TeamMember[] {
    const slugs = fs.readdirSync(teamDirectory + '/members');

    const members: TeamMember[] = slugs
        .map((slug: string) => getTeamMember(slug))
        .sort((member1: TeamMember, member2: TeamMember) => (member1.role > member2.role ? 1 : -1));

    return members;
}