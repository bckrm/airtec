import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function IconItem({ data }) {
    const {
        image: { asset },
        text,
    } = data;

    const imageData = getImage(asset);

    return (
        <div>
            <GatsbyImage image={imageData} />
            <p className="font-bold text-brand-1 text-2xl text-center transform -translate-y-10">
                {text}
            </p>
        </div>
    );
}

IconItem.propTypes = {
    data: PropTypes.object.isRequired,
};
