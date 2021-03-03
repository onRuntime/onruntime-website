import Link from 'next/link'
import { useRouter } from 'next/router'

import navbarStyles from '@styles/modules/Navbar.module.scss'

const Navbar = (props) => {
    const router = useRouter();
    const { locale } = router;
    const t = require(`../translations/${locale}`).default;

    return (
        <nav {...props} className={navbarStyles.navbar} >
            <Link href="/">
                <a className={navbarStyles.brand}>
                    <img src="/assets/img/favicon/android-chrome-512x512.png" className={navbarStyles.brandLogo} alt="onRuntime Logo" />
                    <h1 className={navbarStyles.brandTitle}>onRuntime</h1>
                </a>
            </Link>
            <ul className={navbarStyles.nav}>
                <li className={navbarStyles.navItem}>
                    <NavLink className={navbarStyles.navLink} href="/projects">{t.main.projects}</NavLink>
                </li>
                <li className={navbarStyles.navItem}>
                    <NavLink className={navbarStyles.navLink} href="/services">{t.main.services}</NavLink>
                </li>
                <li className={navbarStyles.navItem}>
                    <NavLink className={navbarStyles.navLink} href="/about">{t.main.about}</NavLink>
                </li>
            </ul>
            <Link href="" locale={(locale == 'en') ? 'fr' : 'en'}>
                <a className={navbarStyles.lang}>
                    <img className={navbarStyles.langLogo} src={`/assets/img/emoji/flag-${locale}.png`} />
                </a>
            </Link>
        </nav>
    )
}



const NavLink = ({ href, className, children }: {
    href: string;
    className: string;
    children: React.ReactNode;
}) => {
    const router = useRouter();
    const { asPath } = router;
    if (asPath.includes(href)) className = [className, navbarStyles.active].join(' ')

    return (
        <Link href={href} >
            <a className={className}>{children}</a>
        </Link>
    )
}

export default Navbar