import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const _Head = () => {
    const router = useRouter();
    const { locale } = router;
    const t = require(`../translations/${locale}`).default;

    return (
        <Head>
            <title>onRuntime Studio</title>

            <meta name="description" content={t.main.desc} />
            <meta name="keywords" content="onruntime, runtime, studio" />

            <meta property="og:site_name" content="onRuntime" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://onruntime.com" />
            <meta property="og:title" content="onRuntime Studio" />
            <meta property="og:description" content={t.main.desc} />
            <meta property="og:image" content="/assets/img/favicon/android-chrome-512x512.png" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://onruntime.com" />
            <meta name="twitter:site" content="@onRuntime" />
            <meta name="twitter:title" content="onRuntime Studio" />
            <meta name="twitter:description" content={t.main.desc} />
            <meta name="twitter:image" content="/assets/img/favicon/android-chrome-512x512.png" />

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />

            <link rel="icon" href="/assets/img/favicon/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
    )
}


export default _Head