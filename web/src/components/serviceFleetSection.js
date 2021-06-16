import React from 'react';
import PropTypes from 'prop-types';

import ServiceFleetCard from './serviceFleetCard';

export default function ServiceFleetSection({ products, productTitle }) {
    return (
        <section className="container my-14">
            <h2 className="font-bold text-4xl text-brand-1 text-center mb-12">
                {productTitle}
            </h2>
            <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-center gap-9">
                {products.map((item) => {
                    return <ServiceFleetCard data={item} key={item.id} />;
                })}
            </div>
        </section>
    );
}

ServiceFleetSection.propTypes = {
    products: PropTypes.array.isRequired,
    productTitle: PropTypes.string.isRequired,
};
