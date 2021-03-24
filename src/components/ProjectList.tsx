import { Project } from '@stores/projects';
import React from 'react';

import Image from 'next/image';

import styles from '@styles/modules/ProjectList.module.scss';

interface Props {
    data: Project[];
}

const ProjectList = ({ data }: Props) => {
    return (
        <div className={styles.row}>
            {data.map(({ id, title, desc, link, thumbnail_link, tags }: Project) => (
                <a className={styles.item} key={id} href={link} target="_blank">
                    <div className={styles.frame}>
                        <Image className={styles.img} src={thumbnail_link} alt={`${title} Demo`} quality={100} width={1920} height={1080} />
                    </div>
                    <div className={styles.content}>
                        <ul className={styles.tags}>
                            {tags.map(tag => <li key={tag} className={styles.tag}>{tag}</li>)}
                        </ul>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.desc}>{desc}</p>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default ProjectList;