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
        <footer className="bg-brand-1 text-ts-body w-full h-96 text-white font-normal fixed bottom-0">
            <div className="flex justify-between container pt-11">
                <div className="flex pl-20 space-x-16">
                    <AIRtecAwhite />
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
            <div className=" mt-20 text-center ">
                <p>Mission Driven. Future Focused.</p>
            </div>
        </footer>
    );
}
