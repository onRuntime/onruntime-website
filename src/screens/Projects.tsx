import Head from 'next/head'
import { useRouter } from 'next/router'

import projectsStyles from '@styles/modules/Projects.module.scss'
import utilsStyles from '@styles/modules/Utils.module.scss'
import ProjectList from '@components/ProjectList'
import { Project } from '@stores/projects'

interface Props {
    data: Project[];
}

const Projects = ({ data }: Props) => {
    const router = useRouter();
    const { locale } = router;
    const t = require(`../translations/${locale}`).default;

    return (
        <section className={[projectsStyles.projects, utilsStyles.container].join(' ')}>
            <Head>
                <title>{t.projects.head.title} | onRuntime Studio</title>

                <meta name="description" content={t.projects.desc} />

                <meta property="og:title" content={`${t.projects.head.title} | onRuntime Studio`} />
                <meta name="twitter:title" content={`${t.projects.head.title} | onRuntime Studio`} />

                <meta property="og:description" content={t.projects.desc} />
                <meta name="twitter:description" content={t.projects.desc} />
            </Head>
            <h1 className={projectsStyles.title}>{t.projects.title}</h1>
            <p className={projectsStyles.desc}>{t.projects.desc}</p>
            <ProjectList data={data} />
        </section>
    )
}

export default Projects