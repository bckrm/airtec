import React from 'react';
import PropTypes from 'prop-types';
import BlockText from './block-content/blockText';

export default function ContactInfo({ data }) {
    return (
        <div className="prose w-full md:w-11/12">
            <BlockText blocks={data} />
        </div>
    );
}

ContactInfo.propTypes = {
    data: PropTypes.object.isRequired,
};
