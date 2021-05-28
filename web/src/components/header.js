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
                sublink: 'History',
                subnav: '/#history',
                sublinkcolor: 'brand-4',
            },
            {
                sublink: 'Leadership',
                subnav: '/#leadership',
                sublinkcolor: 'brand-5',
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
                sublinkcolor: 'brand-4',
            },
            {
                sublink: 'Fleet',
                subnav: '/#fleet',
                sublinkcolor: 'brand-5',
            },
            {
                sublink: 'Certifications',
                subnav: '/#certifications',
                sublinkcolor: 'brand-5',
            },
            {
                sublink: 'Contracts',
                subnav: '/#contracts',
                sublinkcolor: 'brand-5',
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
