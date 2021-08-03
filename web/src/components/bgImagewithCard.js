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
        button,
        link,
        linkType,
    } = data;
    const imageData = getImage(asset);
    const bgImageData = convertToBgImage(imageData);

    const isDark = backgroundColor === 'dark';
    const isTransparent = backgroundColor === 'transparent';
    const isRight = cardOrientation === 'right';
    const hasButton = button === 'button';
    const isPrimary = cardType === 'primary';
    const isPrimaryDark = cardType === 'secondary';
    const isSecondaryDark = cardType === 'transparent';
    const externalLink = linkType === 'external';
    const internalLink = linkType === 'internal';

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
                isPrimary={isPrimary}
                isPrimaryDark={isPrimaryDark}
                isSecondaryDark={isSecondaryDark}
                hasButton={hasButton}
                link={link}
                externalLink={externalLink}
                internalLink={internalLink}
            />
        </BackgroundImage>
    );
}

BgImagewithCard.defaultProps = {
    isPrimary: false,
    isPrimaryDark: false,
    isSecondary: false,
    isSecondaryDark: false,
    isTransparent: false,
    hasButton: false,
    isDark: false,
    isRight: false,
    internalLink: false,
    externalLink: false,
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
    externalLink: PropTypes.bool,
    internalLink: PropTypes.bool,
    link: PropTypes.string.isRequired,
    cardType: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
};
