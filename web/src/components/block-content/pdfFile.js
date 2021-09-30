import React from 'react';
import PropTypes from 'prop-types';

export default function PdfFile({ node }) {
    return <a href={`${node.asset.url}?dl=${node.title}.pdf`}>{node.title}</a>;
}

PdfFile.propTypes = {
    node: PropTypes.object.isRequired,
};
