import React, { useState } from 'react';
import { Link } from 'gatsby';

import MainNav from './navigation/mainNav';
import Logo from './svgs/Logo';
import MobileNav from './navigation/mobileNav';

const nav = [
    {
        name: 'about',
        link: '/#',
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
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <nav className="fixed z-[1] w-full">
            <div className="container flex justify-between mx-8 md:mx-24">
                <Link to="/" className="pt-11">
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
