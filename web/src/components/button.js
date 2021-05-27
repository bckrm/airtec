import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
    isPrimary,
    isPrimaryDark,
    isSecondary,
    isSecondaryDark,
}) {
    const primaryStyle =
        'bg-black text-white hover:bg-brand-1 visited:bg-gray-300';
    const primaryDarkStyle =
        'bg-white text-black hover:bg-gray-300 visited:bg-brand-1';
    const secondaryStyle =
        'bg-white text-black hover:bg-brand-1 hover:text-brand-1 visited:text-gray-300';
    const secondaryDarkStyle =
        'bg-brand-1 text-white hover:text-gray-300 visited:text-brand-1';

    const finalStyles = `border-2 border-current h-9 rounded-bl-lg uppercase w-48 ${
        isPrimary ? primaryStyle : ''
    } ${isPrimaryDark ? primaryDarkStyle : ''} ${
        isSecondary ? secondaryStyle : ''
    } ${isSecondaryDark ? secondaryDarkStyle : ''}`;

    return (
        <button
            isPrimary={isPrimary}
            isPrimaryDark={isPrimaryDark}
            isSecondary={isSecondary}
            isSecondaryDark={isSecondaryDark}
            type="button"
            className={`${finalStyles}`}
        >
            Learn More
        </button>
    );
}

Button.defaultProps = {
    isPrimary: false,
    isPrimaryDark: false,
    isSecondary: false,
    isSecondaryDark: false,
};

Button.propTypes = {
    isPrimary: PropTypes.bool,
    isPrimaryDark: PropTypes.bool,
    isSecondary: PropTypes.bool,
    isSecondaryDark: PropTypes.bool,
};
