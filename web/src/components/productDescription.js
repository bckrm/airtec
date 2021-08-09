import React from 'react';
import PropTypes from 'prop-types';
import BlockText from './block-content/blockText';

export default function ProductDescription({ data }) {
    const { title, _rawBodyLeftColumn, _rawBodyRightColumn } = data;
    return (
        <div className="container gap-x-20 grid grid-cols-1 md:grid-cols-2 my-24">
            <h2 className="single-product-accent mb-12 text-3xl font-bold text-brand-1 my-1">
                {title}
            </h2>
            <div className="md:col-start-1">
                <div className="leading-relaxed mb-4 prose">
                    <BlockText blocks={_rawBodyLeftColumn} />
                </div>
            </div>
            <div className="md:col-start-2">
                <div className="leading-relaxed mb-4 prose">
                    <BlockText blocks={_rawBodyRightColumn} />
                </div>
            </div>
        </div>
    );
}

ProductDescription.propTypes = {
    data: PropTypes.object.isRequired,
};
