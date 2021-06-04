import React from 'react';
import PropTypes from 'prop-types';

export default function MoreButton({ text, isDisabled, isLeft }) {
    const disabledStyle = 'bg-brand-9';
    const rightStyle = 'bottom-[-10%] right-8';
    const leftStyle = 'top-[104%] left-[30px]';

    const finalStyles = `absolute border-2 border-current rounded-bl-lg text-white text-center w-24 ${
        isDisabled ? disabledStyle : 'bg-black'
    } ${isLeft ? leftStyle : rightStyle}`;

    return (
        <button className={finalStyles} disabled={isDisabled} type="button">
            {text}
        </button>
    );
}

MoreButton.defaultProps = {
    isDisabled: false,
    isLeft: false,
};

MoreButton.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isLeft: PropTypes.bool,
};
