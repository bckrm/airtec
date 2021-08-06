/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

import Card from './card';

export default function BgImagewithCard({ data }) {
    const {
        backgroundImage: { asset },
        cardType,
        backgroundColor,
        cardOrientation,
        cta,
    } = data;
    const imageData = getImage(asset);
    const bgImageData = convertToBgImage(imageData);

    const isRight = cardOrientation === 'right';
    const isPrimary = cardType === 'primary';
    const isDark = backgroundColor === 'dark';
    const isTransparent = backgroundColor === 'transparent';

    return (
        <BackgroundImage
            Tag="section"
            className="w-full min-h-screen flex items-center"
            {...bgImageData}
        >
            <Card
                isRight={isRight}
                data={data}
                cta={cta}
                isPrimary={isPrimary}
                isDark={isDark}
                isTransparent={isTransparent}
            />
        </BackgroundImage>
    );
}

BgImagewithCard.defaultProps = {
    isPrimary: false,
    isDark: false,
    isRight: false,
    cta: {},
};

BgImagewithCard.propTypes = {
    data: PropTypes.object.isRequired,
    isRight: PropTypes.bool,
    isDark: PropTypes.bool,
    isPrimary: PropTypes.bool,
    cta: PropTypes.object,
    cardType: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
};
