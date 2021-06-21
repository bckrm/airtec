import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export default function NewsCard({ data }) {
    const {
        title,
        description,
        image: {
            childImageSharp: { fluid },
        },
    } = data;

    return (
        <Link
            to="/"
            className="bg-white h-[34rem] mx-3 md:mr-9 transform transition	focus:scale-110 md:hover:scale-110 shadow-2xl overflow-hidden w-80"
        >
            <Img className="rounded-bl-[2.5rem]" fluid={fluid} />
            <h3 className="heading-accent font-bold mt-4 pb-10 px-4 text-brand-1 text-ts-h4">
                {title}
            </h3>
            <p className="px-4">{description}</p>
        </Link>
    );
}

NewsCard.propTypes = {
    data: PropTypes.object.isRequired,
};
