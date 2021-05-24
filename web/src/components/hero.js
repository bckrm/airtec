import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function Hero({ image }) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <div className="relative text-center text-white w-full">
            <Img
                fluid={fluid}
                alt="A plane"
                placeholder="blurred"
                className="transform -translate-y-24 -z-2"
            />
            <h1 className="absolute left-2/4 top-2/4 transform -translate-y-2/4 -translate-x-2/4 text-ts-h1">
                Donec eleifend faucibus finibus maximus
            </h1>
        </div>
    );
}

Hero.propTypes = {
    image: PropTypes.object.isRequired,
};
