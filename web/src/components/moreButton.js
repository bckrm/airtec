import React from 'react';
import PropTypes from 'prop-types';

export default function MoreButton({ text, isDisabled, isLeft, isRight }) {
    const disabledStyle = 'bg-brand-8';
    const rightStyle = '-bottom-12 right-7';
    const leftStyle = 'top-[104%] left-[30px]';

    const finalStyles = `absolute bg-black border-2 border-current rounded-bl-lg text-white text-center w-24 ${
        isDisabled ? disabledStyle : ''
    } ${isLeft ? leftStyle : ''}${isRight ? rightStyle : ''}`;

    return (
        <button className={finalStyles} type="button">
            {text}
        </button>
    );
}

MoreButton.defaultProps = {
    isDisabled: false,
    isLeft: false,
    isRight: false,
};

MoreButton.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isLeft: PropTypes.bool,
    isRight: PropTypes.bool,
};
