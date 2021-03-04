import { TeamMember } from '@stores/team-members';
import React from 'react';

import styles from '@styles/modules/TeamMemberCard.module.scss'
import { useRouter } from 'next/router';
import findInArray from 'src/utils/findInArray';

interface Props {
    align: 'left' | 'right';
    member: TeamMember;
}

const TeamMemberCard = ({ align, member }: Props) => {
    const { locale } = useRouter();
    const t = require(`../translations/${locale}`).default;

    const containerClassNames: string[] = [styles.item];
    if(align === 'right') containerClassNames.push(styles.reverse);

    return (
        <div className={containerClassNames.join(' ')}>
            {align === 'left' && 
                <div className={styles.col}>
                    <img className={styles.img} src={member.image} alt={member.name} />
                </div>
            }
            <div className={[styles.col, styles.large].join(' ')}>
                <h3 className={styles.name}>{member.name} <span>({findInArray(t, member.role)})</span></h3>
                <p className={styles.desc}>{member.description}</p>
            </div>
            {align === 'right' && 
                <div className={styles.col}>
                    <img className={styles.img} src={member.image} alt={member.name} />
                </div>
            }
        </div>
    );
}

export default TeamMemberCard;