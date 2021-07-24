import React from 'react';
import { Link } from 'gatsby';
import AIRtecAwhite from './svgs/AIRtecAwhite';

export default function Footer() {
    const externalLinks = [
        {
            link: '/',
            text: 'Link',
        },
        {
            link: '/',
            text: 'Link',
        },
        {
            link: '/',
            text: 'Link',
        },
    ];
    const internalLinks = [
        {
            link: '/',
            text: 'Link',
        },
        {
            link: '/',
            text: 'Link',
        },
        {
            link: '/',
            text: 'Link',
        },
        {
            link: '/',
            text: 'Link',
        },
        {
            link: '/',
            text: 'Link',
        },
        {
            link: '/',
            text: 'Link',
        },
    ];
    return (
        <footer className="bg-brand-1 bottom-0 text-white w-full">
            <div className="container flex flex-col md:flex-row md:justify-between py-11">
                <div className="flex flex-col md:flex-row md:pl-20 md:space-x-16">
                    <Link key="logo" to="/">
                        <AIRtecAwhite />
                    </Link>

                    <div className="grid grid-cols-2 md:gap-x-24 gap-y-5 pt-10 md:mt-16">
                        {internalLinks.map((link) => {
                            return (
                                <Link key={link.text} to={link.link}>
                                    {link.text}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-5 pt-10 md:mt-16">
                    {externalLinks.map((link) => {
                        return (
                            <a key={link.text} href={link.link}>
                                {link.text}
                            </a>
                        );
                    })}
                </div>
            </div>
            <div className="pb-10 md:pb-8 md:mt-20 text-center">
                <p>Mission Driven. Future Focused.</p>
            </div>
        </footer>
    );
}
