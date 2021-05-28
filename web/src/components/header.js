import React from 'react';
import { Link } from 'gatsby';

import MainNav from './navigation/mainNav';
import Logo from './svgs/Logo';

const nav = [
    {
        name: 'about',
        link: '/#',
        subnav: [
            {
                sublink: 'sublink',
                subnav: '/hello',
                sublinkcolor: 'brand-4',
            },
        ],
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

const subnav = [
    {
        sublink: 'sublink',
        subnav: '/hello',
        sublinkcolor: 'brand-4',
    },
];

export default function Header() {
    return (
        <nav className="fixed z-[1]">
            <div className="container flex justify-between mx-24">
                <Link to="/" className="pt-11">
                    <Logo />
                </Link>
                <MainNav navItems={nav} subNavItems={subnav} />
            </div>
        </nav>
    );
}
