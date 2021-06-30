import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function ProductDescription({ data }) {
    const {
        image: {
            childImageSharp: { fluid },
        },
        productDescription,
        productName,
    } = data;
    return (
        <div className="container gap-x-20 grid grid-cols-1 md:grid-cols-2 my-24">
            <div className="md:col-start-1">
                <h2 className="single-product-accent mb-12 text-3xl font-bold text-brand-1 my-1">
                    {productName}
                </h2>
                <p className="leading-relaxed mb-4">{productDescription}</p>
            </div>
            <div className="md:col-start-2">
                <Img fluid={fluid} />
                <ul className="list-disc mt-4 p-4">
                    <li>Aenean ut libero nec est auctor rhoncus.</li>
                    <li>
                        Etiam rutrum leo et orci pharetra, et condimentum orci
                        consectetur.
                    </li>
                    <li>
                        Phasellus et augue eget turpis sodales placerat
                        consectetur et tortor.
                    </li>
                    <li>
                        Aenean congue ligula vel velit accumsan, vel lacinia
                        augue tincidunt.
                    </li>
                </ul>
            </div>
        </div>
    );
}

ProductDescription.propTypes = {
    data: PropTypes.object.isRequired,
};
