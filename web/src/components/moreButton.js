import React from 'react';
import PropTypes from 'prop-types';

export default function MoreButton({ text, isDisabled, isLeft, isLight }) {
    const disabledStyle = 'opacity-20';
    const secondaryPrimary =
        'text-brand-1 hover:text-brand-2 focus:text-brand-2';
    const primaryDark = 'text-white focus:text-brand-9';
    const rightStyle = 'bottom-[-10.2%] right-8';
    const leftStyle = 'top-[105%] right-[147px]';

    const finalStyles = `absolute border-2 border-current rounded-bl-lg text-center w-24  ${
        isDisabled ? disabledStyle : 'bg-transparent'
    } ${isLeft ? leftStyle : rightStyle} ${
        isLight ? secondaryPrimary : primaryDark
    }`;

    return (
        <button className={finalStyles} disabled={isDisabled} type="button">
            {text}
        </button>
    );
}

MoreButton.defaultProps = {
    isDisabled: false,
    isLeft: false,
    isLight: false,
};

MoreButton.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isLeft: PropTypes.bool,
    isLight: PropTypes.bool,
};
