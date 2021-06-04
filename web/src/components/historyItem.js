import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function HistoryItem({ data }) {
    const {
        text,
        image: {
            childImageSharp: { fluid },
        },
    } = data;
    return (
        <div className="flex flex-row-reverse gap-11">
            <Img className="w-1/2" fluid={fluid} />
            <p className="w-1/2">{text}</p>
        </div>
    );
}

HistoryItem.propTypes = {
    data: PropTypes.object.isRequired,
};
