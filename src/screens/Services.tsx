import Head from 'next/head'
import { useRouter } from 'next/router'

import servicesStyles from '@styles/modules/Services.module.scss'
import utilsStyles from '@styles/modules/Utils.module.scss'

const Services = () => {
    const router = useRouter();
    const { locale } = router;
    const t = require(`../translations/${locale}`).default;

    return (
        <section className={[servicesStyles.services, utilsStyles.container].join(' ')}>
            <Head>
                <title>{t.services.head.title} | onRuntime Studio</title>
            </Head>
            <h1 className={servicesStyles.title}>Services</h1>
            <p className={servicesStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, porro.</p>
            <div className={servicesStyles.row}>
                <div className={servicesStyles.item}>
                    <h2 className={servicesStyles.title}>{t.services.packs.starter.title}</h2>
                    <div className={servicesStyles.billing}>
                        <p className={servicesStyles.price}>{t.services.packs.starter.price}</p>
                        <span className={servicesStyles.alternative}>{t.services.packs.starter.alternative}</span>
                    </div>
                    <ul className={servicesStyles.packContent}>
                        <li className={servicesStyles.packItem}>{t.services.packs.starter.content.showcase_site}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.starter.content.content_integration}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.starter.content.page}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.starter.content.slider}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.starter.content.ass}</li>
                    </ul>
                </div>
                <div className={servicesStyles.item}>
                    <h2 className={servicesStyles.title}>{t.services.packs.pro.title}</h2>
                    <div className={servicesStyles.billing}>
                        <p className={servicesStyles.price}>{t.services.packs.pro.price}</p>
                        <span className={servicesStyles.alternative}>{t.services.packs.pro.alternative}</span>
                    </div>
                    <ul className={servicesStyles.packContent}>
                        <li className={servicesStyles.packItem}>{t.services.packs.pro.content.showcase_site}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.pro.content.content_integration}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.pro.content.page}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.pro.content.slider}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.pro.content.ass}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.pro.content.logo}</li>
                    </ul>
                </div>
                <div className={servicesStyles.item}>
                    <h2 className={servicesStyles.title}>{t.services.packs.expert.title}</h2>
                    <div className={servicesStyles.billing}>
                        <p className={servicesStyles.price}>{t.services.packs.expert.price}</p>
                        <span className={servicesStyles.alternative}>{t.services.packs.expert.alternative}</span>
                    </div>
                    <ul className={servicesStyles.packContent}>
                        <li className={servicesStyles.packItem}>{t.services.packs.expert.content.showcase_site}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.expert.content.content_integration}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.expert.content.page}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.expert.content.slider}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.expert.content.ass}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.expert.content.logo}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.expert.content.design}</li>
                    </ul>
                </div>
                <div className={servicesStyles.item}>
                    <h2 className={servicesStyles.title}>{t.services.packs.custom.title}</h2>
                    <div className={servicesStyles.billing}>
                        <p className={servicesStyles.price}>{t.services.packs.custom.price}</p>
                    </div>
                    <ul className={servicesStyles.packContent}>
                        <li className={servicesStyles.packItem}>{t.services.packs.custom.content.custom}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.custom.content.needs}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.custom.content.meeting}</li>
                        <li className={servicesStyles.packItem}>{t.services.packs.custom.content.quotation}</li>
                    </ul>
                </div>
            </div>
            <a className={[servicesStyles.btn, utilsStyles.btn].join(' ')} href="mailto:contact@onruntime.com" >{t.services.contact}</a>
        </section>
    )
}

export default Services