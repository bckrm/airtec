import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

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
}) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <BackgroundImage
            Tag="section"
            className="w-full min-h-screen flex items-center"
            fluid={fluid}
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
            />
        </BackgroundImage>
    );
}

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
};
