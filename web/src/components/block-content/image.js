import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ node }) {
    return <img src={node.asset.url} alt="" />;
}

Image.propTypes = {
    node: PropTypes.object.isRequired,
};
