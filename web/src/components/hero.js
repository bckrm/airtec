import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

export default function Hero({ data }) {
    const {
        image: {
            childImageSharp: { fluid },
        },
        text,
    } = data;
    return (
        <BackgroundImage
            Tag="section"
            className="w-full min-h-screen flex justify-center items-center"
            fluid={fluid}
        >
            <h1 className="max-w-2xl px-4 text-center text-ts-h1 text-white uppercase">
                {text}
            </h1>
        </BackgroundImage>
    );
}

Hero.propTypes = {
    data: PropTypes.object.isRequired,
};
