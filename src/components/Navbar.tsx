import { useRouter } from 'next/router';
import Image from 'next/image';

import navbarStyles from '@styles/modules/Navbar.module.scss';
import React from 'react';
import Link from './Link';

const Navbar = (props) => {
    const router = useRouter();
    const { locale } = router;
    const t = require(`../translations/${locale}`).default;

    return (
        <nav {...props} className={navbarStyles.navbar} >
            <Link href="/" className={navbarStyles.brand}>
                <Image src="/assets/img/favicon/android-chrome-512x512.png" className={navbarStyles.brandLogo} alt="onRuntime Logo" height={48} width={48} priority={true} />
                <h1 className={navbarStyles.brandTitle}>onRuntime</h1>
            </Link>
            <ul className={navbarStyles.nav}>
                <li className={navbarStyles.navItem}>
                    <NavLink
                        className={navbarStyles.navLink}
                        href="/projects"
                    >
                        {t.main.projects}
                    </NavLink>
                </li>
                <li className={navbarStyles.navItem}>
                    <NavLink
                        className={navbarStyles.navLink}
                        href="/services"
                    >
                        {t.main.services}
                    </NavLink>
                </li>
                <li className={navbarStyles.navItem}>
                    <NavLink
                        className={navbarStyles.navLink}
                        href="/music"
                    >
                        {t.main.music}
                    </NavLink>
                </li>
                <li className={navbarStyles.navItem}>
                    <NavLink
                        className={navbarStyles.navLink}
                        href="/about"
                    >
                        {t.main.about}
                    </NavLink>
                </li>
            </ul>
            <Link href={router.asPath} className={navbarStyles.lang} locale={(locale == 'en') ? 'fr' : 'en'}>
                <Image className={navbarStyles.langLogo} src={`/assets/img/emoji/flag-${locale}.png`} height={30} width={30} priority={true}  />
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
        <Link href={href} className={className}>
            {children}
        </Link>
    )
}

export default Navbar