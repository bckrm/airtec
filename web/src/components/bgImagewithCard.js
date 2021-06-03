import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

import Card from './card';

export default function BgImagewithCard({
    data,
    image,
    isRight,
    isTransparent,
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
            <Card isTransparent={isTransparent} isRight={isRight} data={data} />
        </BackgroundImage>
    );
}

BgImagewithCard.propTypes = {
    data: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
    isTransparent: PropTypes.bool.isRequired,
    isRight: PropTypes.bool.isRequired,
};
