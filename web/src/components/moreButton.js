import React from 'react';
import PropTypes from 'prop-types';

export default function MoreButton({ text }) {
    return (
        <div
            to="/"
            className=" bg-black border-2 border-current rounded-bl-lg text-white text-center w-24"
            type="button"
        >
            {text}
        </div>
    );
}

MoreButton.propTypes = {
    text: PropTypes.string.isRequired,
};
