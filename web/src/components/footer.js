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
        <footer className="container m-auto text-white">
            <div className="flex justify-between">
                <div className="flex space-x-16">
                    <AIRtecAwhite />
                    <div className="grid grid-cols-2 mr-16 gap-5">
                        {internalLinks.map((link) => {
                            return <Link to={link.link}>{link.text}</Link>;
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    {externalLinks.map((link) => {
                        return <a href={link.link}>{link.text}</a>;
                    })}
                </div>
            </div>

            <p className="text-center">Mission Driven. Future Focused.</p>
        </footer>
    );
}
