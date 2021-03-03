import Head from 'next/head'
import { useRouter } from 'next/router'

import projectsStyles from '@styles/modules/Projects.module.scss'
import utilsStyles from '@styles/modules/Utils.module.scss'

const Projects = ({
    allProjectsData
}: {
    allProjectsData: {
        id: string
        title: string
        desc: string
        link: string,
        thumbnail_link: string,
        tags: Array<string>
    }[]
}) => {
    const router = useRouter();
    const { locale } = router;
    const t = require(`../translations/${locale}`).default;

    return (
        <section className={[projectsStyles.projects, utilsStyles.container].join(' ')}>
            <Head>
                <title>{t.projects.head.title} | onRuntime Studio</title>
            </Head>
            <h1 className={projectsStyles.title}>{t.projects.title}</h1>
            <p className={projectsStyles.desc}>{t.projects.desc}</p>
            <div className={projectsStyles.row}>
                {allProjectsData.map(({ id, title, desc, link, thumbnail_link, tags }) => (
                    <a className={projectsStyles.item} key={id} href={link} target="_blank">
                        <div className={projectsStyles.frame}>
                            <img className={projectsStyles.img} src={thumbnail_link} alt={`${title} Demo`} />
                        </div>
                        <div className={projectsStyles.content}>
                            <ul className={projectsStyles.tags}>
                                {tags.map(tag => <li className={projectsStyles.tag}>{tag}</li>)}
                            </ul>
                            <h3 className={projectsStyles.title}>{title}</h3>
                            <p className={projectsStyles.desc}>{desc}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Projects