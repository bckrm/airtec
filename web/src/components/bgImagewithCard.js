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
    const {
        backgroundImage: { asset },
    } = data;
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
    hasButton: false,
    isTransparent: false,
    isRight: false,
    isDark: false,
    isPrimary: false,
    isPrimaryDark: false,
    isSecondary: false,
    isSecondaryDark: false,
};

BgImagewithCard.propTypes = {
    data: PropTypes.object.isRequired,
    hasButton: PropTypes.bool,
    isTransparent: PropTypes.bool,
    isRight: PropTypes.bool,
    isDark: PropTypes.bool,
    isPrimary: PropTypes.bool,
    isPrimaryDark: PropTypes.bool,
    isSecondary: PropTypes.bool,
    isSecondaryDark: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
};
