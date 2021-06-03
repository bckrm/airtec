import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

export default function Hero({ image }) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <BackgroundImage
            Tag="section"
            className="w-full min-h-screen flex justify-center items-center"
            fluid={fluid}
        >
            <h1 className="max-w-2xl text-center text-ts-h1 text-white">
                Donec eleifend faucibus finibus maximus
            </h1>
        </BackgroundImage>
    );
}

Hero.propTypes = {
    image: PropTypes.object.isRequired,
};
