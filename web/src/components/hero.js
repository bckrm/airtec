import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

export default function Hero({ image }) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <BackgroundImage fluid={fluid}>
            <h1 className="absolute left-2/4 top-2/4 transform -translate-y-2/4 -translate-x-2/4 text-ts-h1">
                Donec eleifend faucibus finibus maximus
            </h1>
        </BackgroundImage>
    );
}

Hero.propTypes = {
    image: PropTypes.object.isRequired,
};
