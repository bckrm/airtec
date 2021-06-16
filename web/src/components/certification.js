import React from 'react';
import PropTypes from 'prop-types';

export default function Certification({ data }) {
    const { description, title } = data;

    return (
        <div className="odd:bg-white odd:bg-opacity-10 p-4 text-2xl">
            <h3 className="font-bold">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

Certification.propTypes = {
    data: PropTypes.object.isRequired,
};
