import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Hero() {
    return (
        <div className="relative text-center text-white">
            <StaticImage
                src="../images/hero.png"
                alt="A plane"
                placeholder="blurred"
                layout="fullWidth"
                className="transform -translate-y-24 -z-2"
            />
            <h1 className="absolute left-2/4 top-2/4 transform -translate-y-2/4 -translate-x-2/4 text-ts-h1">
                Donec eleifend faucibus finibus maximus
            </h1>
        </div>
    );
}
