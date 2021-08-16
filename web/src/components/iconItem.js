import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function IconItem({ data }) {
    const {
        icon: { asset },
        text,
    } = data;

    const imageData = getImage(asset);

    return (
        <div className="flex flex-col items-center w-72">
            <GatsbyImage image={imageData} />
            <p className="font-bold text-brand-1 text-2xl mt-4 text-center transform translate-y-4">
                {text}
            </p>
        </div>
    );
}

IconItem.propTypes = {
    data: PropTypes.object.isRequired,
};
