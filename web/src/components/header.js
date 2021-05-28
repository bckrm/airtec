import React from 'react';
import { Link } from 'gatsby';

import MainNav from './navigation/mainNav';
import Logo from './svgs/Logo';

const nav = [
    {
        name: 'about',
        link: '/#',
        sublink: 'sublink',
        subnav: '/hello',
        sublinkcolor: 'brand-4',
    },
    {
        name: 'capabilities',
        link: '/#',
        sublink: 'sublink',
        subnav: '/#',
        sublinkcolor: 'brand-4',
    },
    {
        name: 'news',
        link: '/#',
        sublink: 'sublink',
        subnav: '/#',
        sublinkcolor: 'brand-4',
    },
    {
        name: 'careers',
        link: '/#',
        sublink: 'sublink',
        subnav: '/#',
        sublinkcolor: 'brand-4',
    },
    {
        name: 'contact',
        link: '/#',
        sublink: 'sublink',
        subnav: '/hello',
        sublinkcolor: 'brand-4',
    },
];

export default function Header() {
    return (
        <nav className="z-[1]">
            <div className="container flex justify-between mx-24">
                <Link to="/" className="pt-11">
                    <Logo />
                </Link>
                <MainNav navItems={nav} />
            </div>
        </nav>
    );
}
