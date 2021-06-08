import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

export default function LeaderCard({ data }) {
    const {
        firstname,
        title,
        image: {
            childImageSharp: { fluid },
        },
    } = data;
    return (
        <div className="w-80 text-brand-1">
            <Img className="h-96" fluid={fluid} />
            <h2 className="text-brand-1">{firstname}</h2>
            <p className="text-brand-1">{title}</p>
        </div>
    );
}

LeaderCard.propTypes = {
    data: PropTypes.object.isRequired,
};
