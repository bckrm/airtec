import React from 'react';
import { Link } from 'gatsby';

import MainNav from './navigation/mainNav';
import Group from '../logos/Group';

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
            <div className="container flex justify-between mx-24 text-white">
                <Link to="/" className="pt-11">
                    <Group />
                </Link>
                <MainNav navItems={nav} />
            </div>
        </nav>
    );
}
