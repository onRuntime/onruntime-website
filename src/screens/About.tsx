import Head from 'next/head'
import { useRouter } from 'next/router'

import aboutStyles from '@styles/modules/About.module.scss'
import utilsStyles from '@styles/modules/Utils.module.scss'

const About = () => {
    const router = useRouter();
    const { locale } = router;
    const t = require(`../translations/${locale}`).default;

    return (
        <section className={[aboutStyles.about, utilsStyles.container].join(' ')}>
            <Head>
                <title>{t.about.head.title} | onRuntime Studio</title>

                <meta property="og:title" content={`${t.about.head.title} | onRuntime Studio`} />
                <meta name="twitter:title" content={`${t.about.head.title} | onRuntime Studio`} />
            </Head>
            <div className={aboutStyles.intro}>
                <div className={aboutStyles.col}>
                    <h3 className={aboutStyles.subtitle}>Developers, designers and artists from all places</h3>
                    <h1 className={aboutStyles.title}>Hey, welcome to onRuntime Studio</h1>
                    <p className={aboutStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere magni ipsum reiciendis laboriosam eaque accusantium natus dolores sequi, beatae accusamus distinctio, nisi ea! Veritatis esse aut praesentium, commodi, voluptate eos placeat quod magni sed natus dolorem. Esse expedita rem accusantium, deserunt quidem tenetur culpa sed blanditiis dicta praesentium facilis.</p>
                    <a className={[aboutStyles.btn, utilsStyles.btn].join(' ')} href="#leaders">Know more about us</a>
                </div>
                <div className={aboutStyles.col}>
                    <img className={aboutStyles.img} src="./assets/img/logo/onruntime-white-background-low.png" alt="onRuntime Logo" />
                </div>
            </div>
            <div className={aboutStyles.team}>
                <h3 className={aboutStyles.title} id="#leaders">Our leaders</h3>
                <div className={aboutStyles.item}>
                    <div className={aboutStyles.col}>
                        <img className={aboutStyles.img} src="./assets/img/team/jeremy-baudrin.jpg" alt="Jeremy Baudrin" />
                    </div>
                    <div className={[aboutStyles.col, aboutStyles.large].join(' ')}>
                        <h3 className={aboutStyles.name}>Jérémy Baudrin <span>(Director)</span></h3>
                        <p className={aboutStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem sint veniam officiis ipsa totam ab, voluptate rem, culpa harum perspiciatis porro quo. Doloremque necessitatibus, ab autem adipisci dolores porro tempora voluptate reprehenderit impedit? Vel mollitia earum reiciendis sequi facilis. Accusamus nihil laudantium autem debitis reprehenderit harum eligendi consequatur. Cumque!</p>
                    </div>
                </div>
                <div className={[aboutStyles.item, aboutStyles.reverse].join(' ')}>
                    <div className={[aboutStyles.col, aboutStyles.large].join(' ')}>
                        <h3 className={aboutStyles.name}>Antoine Kingue <span>(Deputy director)</span></h3>
                        <p className={aboutStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem sint veniam officiis ipsa totam ab, voluptate rem, culpa harum perspiciatis porro quo. Doloremque necessitatibus, ab autem adipisci dolores porro tempora voluptate reprehenderit impedit? Vel mollitia earum reiciendis sequi facilis. Accusamus nihil laudantium autem debitis reprehenderit harum eligendi consequatur. Cumque!</p>
                    </div>
                    <div className={aboutStyles.col}>
                        <img className={aboutStyles.img} src="./assets/img/team/antoine-kingue.jpg" alt="Antoine Kingue" />
                    </div>
                </div>
                <div className={aboutStyles.item}>
                    <div className={aboutStyles.col}>
                        <img className={aboutStyles.img} src="./assets/img/team/younes-bessa.jpg" alt="Younes Bessa" />
                    </div>
                    <div className={[aboutStyles.col, aboutStyles.large].join(' ')}>
                        <h3 className={aboutStyles.name}>Younès Bessa <span>(Leader of RVBY)</span></h3>
                        <p className={aboutStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem sint veniam officiis ipsa totam ab, voluptate rem, culpa harum perspiciatis porro quo. Doloremque necessitatibus, ab autem adipisci dolores porro tempora voluptate reprehenderit impedit? Vel mollitia earum reiciendis sequi facilis. Accusamus nihil laudantium autem debitis reprehenderit harum eligendi consequatur. Cumque!</p>
                    </div>
                </div>
                <div className={[aboutStyles.item, aboutStyles.reverse].join(' ')}>
                    <div className={[aboutStyles.col, aboutStyles.large].join(' ')}>
                        <h3 className={aboutStyles.name}>Anthony Fournet <span>(Leader of BerryGames)</span></h3>
                        <p className={aboutStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem sint veniam officiis ipsa totam ab, voluptate rem, culpa harum perspiciatis porro quo. Doloremque necessitatibus, ab autem adipisci dolores porro tempora voluptate reprehenderit impedit? Vel mollitia earum reiciendis sequi facilis. Accusamus nihil laudantium autem debitis reprehenderit harum eligendi consequatur. Cumque!</p>
                    </div>
                    <div className={aboutStyles.col}>
                        <img className={aboutStyles.img} src="./assets/img/team/anthony-fournet.png" alt="Anthony Fournet" />
                    </div>
                </div>
                <div className={aboutStyles.item}>
                    <div className={aboutStyles.col}>
                        <img className={aboutStyles.img} src="./assets/img/team/remi-noel.png" alt="Remi Noël" />
                    </div>
                    <div className={[aboutStyles.col, aboutStyles.large].join(' ')}>
                        <h3 className={aboutStyles.name}>Remi Noël <span>(Leader of NetflixAddicts)</span></h3>
                        <p className={aboutStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatem sint veniam officiis ipsa totam ab, voluptate rem, culpa harum perspiciatis porro quo. Doloremque necessitatibus, ab autem adipisci dolores porro tempora voluptate reprehenderit impedit? Vel mollitia earum reiciendis sequi facilis. Accusamus nihil laudantium autem debitis reprehenderit harum eligendi consequatur. Cumque!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About