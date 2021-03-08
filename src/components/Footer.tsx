import React from 'react';
import { useRouter } from 'next/router'
import Link from '@components/Link';

import footerStyle from '@styles/modules/Footer.module.scss'

const Footer = () => {
    const router = useRouter();
    const { locale } = router;

    return (
        <footer className={footerStyle.footer}>
            <ul className={footerStyle.social}>
                <li className={footerStyle.socialItem}><Link href="https://linkedin.com/company/onruntime" className={footerStyle.socialLink}><i className="ri-linkedin-fill"></i></Link></li>
                <li className={footerStyle.socialItem}><Link href="https://github.com/onRuntime" className={footerStyle.socialLink}><i className="ri-github-fill"></i></Link></li>
                <li className={footerStyle.socialItem}><Link href="https://discord.gg/ucX9c5yXmX" className={footerStyle.socialLink}><i className="ri-discord-fill"></i></Link></li>
                <li className={footerStyle.socialItem}><Link href="https://twitter.com/onRuntime" className={footerStyle.socialLink}><i className="ri-twitter-fill"></i></Link></li>
                <li className={footerStyle.socialItem}><Link href="https://instagram.com/onruntime" className={footerStyle.socialLink}><i className="ri-instagram-fill"></i></Link></li>
            </ul>
            <ul className={footerStyle.lang}>
                <li className={footerStyle.langItem}>
                    <Link href={router.asPath} locale="en" className={[footerStyle.langLink, (locale == 'en') ? footerStyle.current : null].join(' ')}>
                        English
                    </Link>
                </li>
                <li className={footerStyle.langItem}>
                    <Link href={router.asPath} locale="fr" className={[footerStyle.langLink, (locale == 'fr') ? footerStyle.current : null].join(' ')}>
                        Français
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer