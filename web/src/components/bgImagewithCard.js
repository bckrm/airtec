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
    isPrimary,
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
                isSecondary={isSecondary}
                isPrimary={isPrimary}
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
    isPrimary: false,
    isSecondary: false,
    isTransparent: false,
    hasButton: false,
    isDark: false,
    isRight: false,
};

BgImagewithCard.propTypes = {
    data: PropTypes.object.isRequired,
    hasButton: PropTypes.bool,
    isTransparent: PropTypes.bool,
    isRight: PropTypes.bool,
    isDark: PropTypes.bool,
    isPrimary: PropTypes.bool,
    isSecondary: PropTypes.bool,
    href: PropTypes.string,
    to: PropTypes.string,
};
