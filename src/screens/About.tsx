import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'

import aboutStyles from '@styles/modules/About.module.scss'
import utilsStyles from '@styles/modules/Utils.module.scss'
import { TeamMember } from '@stores/team-members'
import TeamMemberCard from '@components/TeamMemberCard'
import Button from '@components/Button';

interface Props {
    teamMembers: TeamMember[];
}

const About = ({ teamMembers }: Props) => {
    const router = useRouter();
    const { locale } = router;
    const t = require(`../translations/${locale}`).default;

    return (
        <section className={[aboutStyles.about, utilsStyles.container].join(' ')}>
            <Head>
                <title>{t.about.head.title} | onRuntime Studio</title>
            </Head>
            <div className={aboutStyles.intro}>
                <div className={aboutStyles.col}>
                    <h3 className={aboutStyles.subtitle}>Developers, designers and artists from all places</h3>
                    <h1 className={aboutStyles.title}>Hey, welcome to onRuntime Studio</h1>
                    <p className={aboutStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere magni ipsum reiciendis laboriosam eaque accusantium natus dolores sequi, beatae accusamus distinctio, nisi ea! Veritatis esse aut praesentium, commodi, voluptate eos placeat quod magni sed natus dolorem. Esse expedita rem accusantium, deserunt quidem tenetur culpa sed blanditiis dicta praesentium facilis.</p>
                    <Button to='#leaders' className={aboutStyles.btn}>{t.about.btn}</Button>
                </div>
                <div className={aboutStyles.col}>
                    <img className={aboutStyles.img} src="./assets/img/logo/onruntime-white-background-low.png" alt="onRuntime Logo" />
                </div>
            </div>
            <div className={aboutStyles.team}>
                <h3 className={aboutStyles.title} id="#leaders">Our leaders</h3>
                {teamMembers.map((member: TeamMember, i: number) => <TeamMemberCard key={i} align={i & 1 ? 'right' : 'left'} member={member} />)}
            </div>
        </section>
    )
}

export default About