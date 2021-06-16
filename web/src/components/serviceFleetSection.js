import React from 'react';
import PropTypes from 'prop-types';

import ServiceFleetCard from './serviceFleetCard';

export default function ServiceFleetSection({ products, productTitle }) {
    return (
        <section className="container my-14">
            <h2 className="font-bold text-4xl text-brand-1 text-center mb-12">
                {productTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-9">
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
