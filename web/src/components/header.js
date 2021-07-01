import React, { useState, useEffect } from 'react';
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
        link: '/capabilities',
        subnav: [
            {
                sublink: 'Services',
                subnav: '/capabilities/#services',
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
        link: '/careers',
    },
    {
        name: 'contact',
        link: '/contact',
    },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <nav
            isScrolled={isScrolled}
            className={`fixed py-8 top-0 transition-colors w-full z-10 ${
                isScrolled ? 'bg-brand-1' : 'bg-transparent'
            }`}
        >
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
