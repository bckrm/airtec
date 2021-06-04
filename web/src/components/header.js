import React from 'react';
import { Link } from 'gatsby';

import MainNav from './navigation/mainNav';
import Logo from './svgs/Logo';

const nav = [
    {
        name: 'about',
        link: '/about',
        subnav: [
            {
                sublink: 'History',
                subnav: '/#history',
            },
            {
                sublink: 'Leadership',
                subnav: '/#leadership',
            },
        ],
    },
    {
        name: 'capabilities',
        link: '/#',
        subnav: [
            {
                sublink: 'Services',
                subnav: '/#services',
            },
            {
                sublink: 'Fleet',
                subnav: '/#fleet',
            },
            {
                sublink: 'Certifications',
                subnav: '/#certifications',
            },
            {
                sublink: 'Contracts',
                subnav: '/#contracts',
            },
        ],
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
        <nav className="fixed z-[1]">
            <div className="container flex justify-between mx-24">
                <Link to="/" className="pt-11">
                    <Logo />
                </Link>
                <MainNav navItems={nav} />
            </div>
        </nav>
    );
}
