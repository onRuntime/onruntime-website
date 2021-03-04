import { TeamMember } from '@stores/team-members';
import React from 'react';

import styles from '@styles/modules/TeamMemberCard.module.scss'
import { useRouter } from 'next/router';

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
                <h3 className={styles.name}>{member.name} <span>({Object.byString(t, member.role)})</span></h3>
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

Object.byString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1');
    s = s.replace(/^\./, '');
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

export default TeamMemberCard;