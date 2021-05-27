import React from 'react';
import { Link } from 'gatsby';

import MainNav from './navigation/mainNav';
import Logo from './svgs/Logo';

const nav = [
    {
        name: 'about',
        link: '/#',
        sublink: 'sublink',
        subnav: '/#',
    },
    {
        name: 'capabilities',
        link: '/#',
        sublink: 'sublink',
        subnav: '/#',
    },
    {
        name: 'news',
        link: '/#',
        sublink: 'sublink',
        subnav: '/#',
    },
    {
        name: 'careers',
        link: '/#',
        sublink: 'sublink',
        subnav: '/#',
    },
    {
        name: 'contact',
        link: '/#',
        sublink: 'sublink',
        subnav: '/#',
    },
];

export default function Header() {
    return (
        <nav>
            <div className="container flex justify-between mx-24 text-white">
                <Link to="/" className="pt-11">
                    <Logo />
                </Link>
                <MainNav navItems={nav} />
            </div>
        </nav>
    );
}
