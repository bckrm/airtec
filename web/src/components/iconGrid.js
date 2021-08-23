import React from 'react';
import PropTypes from 'prop-types';

import IconItem from './iconItem';

export default function IconGrid({ icons }) {
    return (
        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-20">
            {icons.map((icon) => {
                return <IconItem data={icon.node} />;
            })}
        </section>
    );
}

IconGrid.propTypes = {
    icons: PropTypes.array.isRequired,
};
