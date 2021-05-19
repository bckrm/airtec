import React from 'react';

import MainNav from './navigation/mainNav';

const nav = [
    {
        name: 'about',
        link: '/#',
    },
    {
        name: 'capabilities',
        link: '/#',
    },
    {
        name: 'news',
        link: '/#',
    },
    {
        name: 'careers',
        link: '/#',
    },
    {
        name: 'contact',
        link: '/#',
    },
];

export default function Header() {
    return (
        <nav>
            <MainNav navItems={nav} />
        </nav>
    );
}
