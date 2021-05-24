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
        <footer className="bg-brand-1 bottom-0 h-96 text-white w-full">
            <div className="container flex justify-between pt-11">
                <div className="flex pl-20 space-x-16">
                    <Link to="/">
                        <AIRtecAwhite />
                    </Link>

                    <div className="grid grid-cols-2 gap-x-24 gap-y-5 mt-16">
                        {internalLinks.map((link) => {
                            return <Link to={link.link}>{link.text}</Link>;
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-5 mt-16">
                    {externalLinks.map((link) => {
                        return <a href={link.link}>{link.text}</a>;
                    })}
                </div>
            </div>
            <div className="mt-20 text-center">
                <p>Mission Driven. Future Focused.</p>
            </div>
        </footer>
    );
}
