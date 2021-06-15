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
    } = data;
    return (
        <div className="heading-accent container flex flex-col md:flex-row-reverse my-24">
            <Img className="w-full md:w-1/2" fluid={fluid} />
            <div className="flex flex-col w-full md:w-1/2 ">
                <h2 className="text-ts-h2">{heading}</h2>
                <p className="pt-12">{text}</p>
            </div>
        </div>
    );
}

ImageWithText.propTypes = {
    data: PropTypes.object.isRequired,
};
