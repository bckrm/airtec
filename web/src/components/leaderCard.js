import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

export default function LeaderCard({ data }) {
    const {
        name,
        title,
        image: {
            childImageSharp: { fluid },
        },
    } = data;
    return (
        <div className="bg-white w-72 text-brand-1">
            <Img className="h-96 rounded-bl-lg" fluid={fluid} />
            <h2 className="font-bold pl-5 mt-6">{name}</h2>
            <p className="pl-5 mb-6 mt-1">{title}</p>
        </div>
    );
}

LeaderCard.propTypes = {
    data: PropTypes.object.isRequired,
};
