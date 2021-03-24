import Head from 'next/head';
import { useRouter } from 'next/router';

import utilsStyles from '@styles/modules/Utils.module.scss';

const Music = () => {

    const router = useRouter();
    const { locale } = router;
    const t = require(`../translations/${locale}`).default;
    return (
        <section className={[utilsStyles.container].join(' ')}>
            <Head>
                <title>{t.music.head.title} | onRuntime Studio</title>
            </Head>
            <p style={{ textAlign: 'center', padding: '30vh 0' }}>{t.music.soon}</p>
        </section>
    )
}

export default Music;