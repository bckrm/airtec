import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import Card from './card';

export default function SubHero({ image }) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <div className="h-full relative">
            <Img fluid={fluid} className="w-full h-full" />
            <Card />
        </div>
    );
}

SubHero.propTypes = {
    image: PropTypes.object.isRequired,
};
