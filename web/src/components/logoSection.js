import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function LogoSection({ images }) {
    return (
        <section className="container grid grid-cols-2">
            {images.map((image) => {
                return <Img fluid={image} />;
            })}
        </section>
    );
}

LogoSection.propTypes = {
    images: PropTypes.array.isRequired,
};
