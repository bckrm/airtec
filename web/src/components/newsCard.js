import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function NewsCard({ data }) {
    const {
        title,
        description,
        image: {
            childImageSharp: { fluid },
        },
    } = data;

    return (
        <div className="bg-white h-[34rem] w-80">
            <Img className="rounded-bl-lg" fluid={fluid} />
            <h4 className="heading-accent font-bold mt-4 pb-10 px-4 text-brand-1 text-ts-h4">
                {title}
            </h4>
            <p className="px-4">{description}</p>
        </div>
    );
}

NewsCard.propTypes = {
    data: PropTypes.object.isRequired,
};
