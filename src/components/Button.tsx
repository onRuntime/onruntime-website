import React from 'react';
import Link from 'next/link';

import buttonStyles from '@styles/modules/Button.module.scss';

interface Props {
    type?: 'default' | 'outline';
    to: string;
    className?: string;
    children: React.ReactNode;
}

const Button = ({ type = 'default', to, className = '', children }: Props) => {
    const classNames: string[] = [buttonStyles.button, ...className.split(' ')];

    switch(type) {
        case 'outline':
            classNames.push(buttonStyles.button__outline);
            break;
    }

    return (
        <Link href={to}>
            <a className={classNames.join(' ')}>
                {children}
            </a>
        </Link>
    )
};

export default Button;