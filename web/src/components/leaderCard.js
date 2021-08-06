import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

export default function LeaderCard({ data }) {
    const {
        name,
        title,
        linkedinURL,
        image: { asset },
    } = data;

    const imageData = getImage(asset);

    return (
        <div className="bg-white text-brand-1">
            <GatsbyImage
                className="h-96 rounded-bl-[2.5rem]"
                image={imageData}
                alt=""
            />
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                <h2 className="font-bold pl-5 mt-6">{name}</h2>
                <p className="pl-5 mb-6 mt-1">{title}</p>
            </a>
        </div>
    );
}

LeaderCard.propTypes = {
    data: PropTypes.object.isRequired,
};
