import React from 'react';

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
    return (
        <footer className="text-white">
            <div>
                {externalLinks.map((link) => {
                    return <a href={link.link}>{link.text}</a>;
                })}
            </div>
        </footer>
    );
}
