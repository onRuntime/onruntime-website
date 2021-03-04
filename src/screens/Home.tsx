import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import homeStyles from '@styles/modules/Home.module.scss';
import utilsStyles from '@styles/modules/Utils.module.scss';
import { Project } from '@stores/projects';
import Button from '@components/Button';
import ProjectList from '@components/ProjectList';

interface Props {
    projects: Project[];
}

const Home = ({ projects }: Props) => {
    const router = useRouter();
    const { locale } = router;
    const t = require(`../translations/${locale}`).default;

    return (
        <section className={[homeStyles.home, utilsStyles.container].join(' ')}>
            <Head>
                <title>{t.home.head.title} | onRuntime Studio</title>

                <meta property="og:title" content={`${t.home.head.title} | onRuntime Studio`} />
                <meta name="twitter:title" content={`${t.home.head.title} | onRuntime Studio`} />
            </Head>
            <div className={homeStyles.featured}>
                <h1 className={homeStyles.title}>{t.home.featured.title}</h1>
                <p className={homeStyles.desc}>{t.home.featured.desc}</p>
                <Button type='outline' to='/about' className={homeStyles.btn}>
                    {t.home.featured.btn}
                </Button>
            </div>
            <div className={homeStyles.about}>
                <div className={homeStyles.col}>
                    <img className={homeStyles.img} src="https://picsum.photos/seed/picsum/1920/1080" alt="" />
                </div>
                <div className={homeStyles.col}>
                    <h2 className={homeStyles.title}>{t.home.about.title}</h2>
                    <p className={homeStyles.desc}>{t.home.about.desc}</p>
                    <Button to='/about' className={homeStyles.btn}>
                        {t.home.about.btn}
                    </Button>
                </div>
            </div>
            <div className={homeStyles.projects}>
                <h1 className={homeStyles.title}>{t.home.projects.title}</h1>
                <p className={homeStyles.desc}>{t.home.projects.desc}</p>
                <ProjectList data={projects.slice(0, 3)} />
                <Button type='outline' to='/projects' className={homeStyles.btn}>
                    {t.home.projects.btn}
                </Button>
            </div>
        </section>
    )
}

export default Home