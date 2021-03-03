import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import homeStyles from '@styles/modules/Home.module.scss'
import utilsStyles from '@styles/modules/Utils.module.scss'

const Home = ({
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
        <section className={[homeStyles.home, utilsStyles.container].join(' ')}>
            <Head>
                <title>{t.home.head.title} | onRuntime Studio</title>

                <meta property="og:title" content={`${t.home.head.title} | onRuntime Studio`} />
                <meta name="twitter:title" content={`${t.home.head.title} | onRuntime Studio`} />
            </Head>
            <div className={homeStyles.featured}>
                <h1 className={homeStyles.title}>{t.home.featured.title}</h1>
                <p className={homeStyles.desc}>{t.home.featured.desc}</p>
                <Link href="/about">
                    <a className={[homeStyles.btn, utilsStyles.btn].join(' ')}>{t.home.featured.btn}</a>
                </Link>
            </div>
            <div className={homeStyles.about}>
                <div className={homeStyles.col}>
                    <img className={homeStyles.img} src="https://picsum.photos/seed/picsum/1920/1080" alt="" />
                </div>
                <div className={homeStyles.col}>
                    <h2 className={homeStyles.title}>{t.home.about.title}</h2>
                    <p className={homeStyles.desc}>{t.home.about.desc}</p>
                    <Link href="/about">
                        <a className={[homeStyles.btn, utilsStyles.btn].join(' ')}>{t.home.about.btn}</a>
                    </Link>
                </div>
            </div>
            <div className={homeStyles.projects}>
                <h1 className={homeStyles.title}>{t.home.projects.title}</h1>
                <p className={homeStyles.desc}>{t.home.projects.desc}</p>
                <div className={homeStyles.row}>
                    {allProjectsData.slice(0, 3).map(({ id, title, desc, link, thumbnail_link, tags }) => (
                        <a className={homeStyles.item} key={id} href={link} target="_blank">
                            <div className={homeStyles.frame}>
                                <img className={homeStyles.img} src={thumbnail_link} alt={`${title} Demo`} />
                            </div>
                            <div className={homeStyles.content}>
                                <ul className={homeStyles.tags}>
                                    {tags.map(tag => <li className={homeStyles.tag}>{tag}</li>)}
                                </ul>
                                <h3 className={homeStyles.title}>{title}</h3>
                                <p className={homeStyles.desc}>{desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
                <Link href="/projects">
                    <a className={[homeStyles.btn, utilsStyles.btn].join(' ')}>{t.home.projects.btn}</a>
                </Link>
            </div>
        </section>
    )
}

export default Home