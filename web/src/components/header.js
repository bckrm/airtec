import React, { useState } from 'react';
import { Link } from 'gatsby';

import MainNav from './navigation/mainNav';
import Logo from './svgs/Logo';
import MobileNav from './navigation/mobileNav';

const nav = [
    {
        name: 'about',
        link: '/about',
        subnav: [
            {
                sublink: 'History',
                subnav: '/about#history',
            },
            {
                sublink: 'Leadership',
                subnav: '/about/#leadership',
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
        link: '/news',
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
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <nav className="fixed py-8 top-0 transition-colors w-full z-10">
            <div className="container flex justify-between text-white">
                <Link href="/">
                    <Logo />
                </Link>
                <MobileNav
                    handleNavToggle={handleNavToggle}
                    isMobileNavOpen={isMobileNavOpen}
                    navItems={nav}
                />
                <MainNav navItems={nav} />
            </div>
        </nav>
    );
}
