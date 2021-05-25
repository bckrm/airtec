import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

import Card from './card';

export default function BgImagewithCard({ image }) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <BackgroundImage
            Tag="section"
            className="w-full min-h-screen"
            fluid={fluid}
        >
            <Card />
        </BackgroundImage>
    );
}

BgImagewithCard.propTypes = {
    image: PropTypes.object.isRequired,
};
