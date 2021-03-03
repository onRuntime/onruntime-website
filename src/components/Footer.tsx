import Link from 'next/link'
import { useRouter } from 'next/router'

import footerStyle from '@styles/modules/Footer.module.scss'

const Footer = () => {
    const router = useRouter();
    const { locale } = router;

    return (
        <footer className={footerStyle.footer}>
            <ul className={footerStyle.social}>
                <li className={footerStyle.socialItem}><a href="https://linkedin.com/company/onruntime" target="_blank" className={footerStyle.socialLink}><i className="ri-linkedin-fill"></i></a></li>
                <li className={footerStyle.socialItem}><a href="https://github.com/onRuntime" target="_blank" className={footerStyle.socialLink}><i className="ri-github-fill"></i></a></li>
                <li className={footerStyle.socialItem}><a href="https://discord.gg/ucX9c5yXmX" target="_blank" className={footerStyle.socialLink}><i className="ri-discord-fill"></i></a></li>
                <li className={footerStyle.socialItem}><a href="https://twitter.com/onRuntime" target="_blank" className={footerStyle.socialLink}><i className="ri-twitter-fill"></i></a></li>
                <li className={footerStyle.socialItem}><a href="https://instagram.com/onruntime" target="_blank" className={footerStyle.socialLink}><i className="ri-instagram-fill"></i></a></li>
            </ul>
            <ul className={footerStyle.lang}>
                <li className={footerStyle.langItem}>
                    <Link href="" locale="en">
                        <a className={[footerStyle.langLink, (locale == 'en') ? footerStyle.current : null].join(' ')} >English</a>
                    </Link>
                </li>
                <li className={footerStyle.langItem}>
                    <Link href="" locale="fr">
                        <a className={[footerStyle.langLink, (locale == 'fr') ? footerStyle.current : null].join(' ')}>Français</a>
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer