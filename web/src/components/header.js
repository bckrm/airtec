import React from 'react';
import { Link } from 'gatsby';

import MainNav from './navigation/mainNav';
import Logo from './svgs/Logo';

const nav = [
    {
        name: 'about',
        link: '/#',
        sublink: 'wee woo',
        subnav: '/#',
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
            <div className="container flex justify-between mx-24 text-white">
                <Link to="/" className="pt-11">
                    <Logo />
                </Link>
                <MainNav navItems={nav} />
            </div>
        </nav>
    );
}
