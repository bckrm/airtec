import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function LogoSection({ images }) {
    return (
        <section className="container gap-14 grid grid-cols-1 md:grid-cols-2 place-items-center mb-14">
            {images.map((logo) => {
                return (
                    <Img fixed={logo.image.childImageSharp.fixed} alt="logo" />
                );
            })}
        </section>
    );
}

LogoSection.propTypes = {
    images: PropTypes.array.isRequired,
};
