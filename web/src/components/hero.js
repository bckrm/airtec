/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

export default function Hero({ image, title }) {
    const { asset } = image;
    const imageData = getImage(asset);
    const bgImageData = convertToBgImage(imageData);

    return (
        <BackgroundImage
            Tag="section"
            className="w-full min-h-screen flex justify-center items-center"
            {...bgImageData}
            alt=""
        >
            <h1 className="max-w-2xl px-4 text-center text-ts-h1 text-white uppercase">
                {title}
            </h1>
        </BackgroundImage>
    );
}

Hero.propTypes = {
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};
