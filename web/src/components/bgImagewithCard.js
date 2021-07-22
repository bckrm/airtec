/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

import Card from './card';

export default function BgImagewithCard({
    data,
    hasButton,
    image,
    isDark,
    isRight,
    isTransparent,
    isPrimaryDark,
    isPrimary,
    isSecondaryDark,
    isSecondary,
    to,
    href,
}) {
    const { asset } = image;
    const imageData = getImage(asset);
    const bgImageData = convertToBgImage(imageData);

    return (
        <BackgroundImage
            Tag="section"
            className="w-full min-h-screen flex items-center"
            {...bgImageData}
        >
            <Card
                isDark={isDark}
                isTransparent={isTransparent}
                isRight={isRight}
                data={data}
                isPrimaryDark={isPrimaryDark}
                isSecondary={isSecondary}
                isPrimary={isPrimary}
                isSecondaryDark={isSecondaryDark}
                hasButton={hasButton}
                href={href}
                to={to}
            />
        </BackgroundImage>
    );
}

BgImagewithCard.defaultProps = {
    to: '',
    href: '',
};

BgImagewithCard.propTypes = {
    data: PropTypes.object.isRequired,
    hasButton: PropTypes.bool.isRequired,
    image: PropTypes.object.isRequired,
    isTransparent: PropTypes.bool.isRequired,
    isRight: PropTypes.bool.isRequired,
    isDark: PropTypes.bool.isRequired,
    isPrimary: PropTypes.bool.isRequired,
    isPrimaryDark: PropTypes.bool.isRequired,
    isSecondary: PropTypes.bool.isRequired,
    isSecondaryDark: PropTypes.bool.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
};
