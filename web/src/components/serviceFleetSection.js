import React from 'react';
import PropTypes from 'prop-types';

import ServiceFleetCard from './serviceFleetCard';

export default function ServiceFleetSection({ pathname, products }) {
    return (
        <section className="container my-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-9">
                {products.map((item) => {
                    return (
                        <ServiceFleetCard
                            data={item}
                            pathname={pathname}
                            key={item.node.id}
                        />
                    );
                })}
            </div>
        </section>
    );
}

ServiceFleetSection.propTypes = {
    pathname: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
};
