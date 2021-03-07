import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'

import { TeamMember } from '@stores/team-members'
import TeamMemberCard from '@components/TeamMemberCard'

import aboutStyles from '@styles/modules/About.module.scss'
import utilsStyles from '@styles/modules/Utils.module.scss'
import buttonStyles from '@styles/modules/Button.module.scss';

interface Props {
    teamMembers: TeamMember[];
}

const About = ({ teamMembers }: Props) => {
    const router = useRouter();
    const { locale } = router;
    const t = require(`../translations/${locale}`).default;

    const leadersRef = React.createRef<HTMLDivElement>();

    const handleClickToLeaders = () => {
        leadersRef.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <section className={[aboutStyles.about, utilsStyles.container].join(' ')}>
            <Head>
                <title>{t.about.head.title} | onRuntime Studio</title>

                <meta property="og:title" content={`${t.about.head.title} | onRuntime Studio`} />
                <meta name="twitter:title" content={`${t.about.head.title} | onRuntime Studio`} />
            </Head>
            <div className={aboutStyles.intro}>
                <div className={aboutStyles.col}>
                    <h3 className={aboutStyles.subtitle}>{t.about.intro.subtitle.toUpperCase()}</h3>
                    <h1 className={aboutStyles.title}>{t.about.intro.title}</h1>
                    <p className={aboutStyles.desc}>{t.about.intro.desc}</p>
                    <button className={[buttonStyles.button, aboutStyles.btn].join(' ')} onClick={handleClickToLeaders}>{t.about.btn}</button>
                </div>
                <div className={aboutStyles.col}>
                    <img className={aboutStyles.img} src="./assets/img/logo/onruntime-transparent-white.png" alt="onRuntime Logo" />
                </div>
            </div>
            <div className={aboutStyles.team} ref={leadersRef}>
                <h3 className={aboutStyles.title}>{t.about.team.title}</h3>
                {teamMembers.map((member: TeamMember, i: number) => <TeamMemberCard key={i} align={i & 1 ? 'right' : 'left'} member={member} />)}
            </div>
        </section>
    )
};

export default About