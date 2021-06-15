import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function ImageWithText({ data }) {
    const {
        heading,
        text,
        image: {
            childImageSharp: { fluid },
        },
        id,
    } = data;
    return (
        <section
            id={id}
            className="container flex flex-col gap-8 md:flex-row-reverse my-24"
        >
            <Img className="w-full md:w-1/2" fluid={fluid} />
            <div className="flex flex-col w-full md:w-1/2 text-card-accent">
                <h2 className="font-bold text-brand-1 text-3xl">{heading}</h2>
                <p className="pt-10">{text}</p>
            </div>
        </section>
    );
}

ImageWithText.propTypes = {
    data: PropTypes.object.isRequired,
};
