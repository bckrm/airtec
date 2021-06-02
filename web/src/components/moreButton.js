import React from 'react';
import PropTypes from 'prop-types';

export default function MoreButton({ text, isDisabled }) {
    const disabledStyle = 'bg-brand-3';

    const finalStyles = `bg-black border-2 border-current rounded-bl-lg text-white text-center w-24 ${
        isDisabled ? disabledStyle : ''
    }`;

    return (
        <div className={finalStyles} type="button">
            {text}
        </div>
    );
}

MoreButton.defaultProps = {
    isDisabled: false,
};

MoreButton.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
};
