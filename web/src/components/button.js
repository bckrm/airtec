import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function Button({
    isPrimary,
    isPrimaryDark,
    isSecondary,
    isSecondaryDark,
}) {
    const primaryStyle =
        'bg-black text-white hover:bg-brand-1 focus:bg-gray-300';
    const primaryDarkStyle =
        'bg-white text-black hover:bg-gray-300 focus:bg-brand-1';
    const secondaryStyle =
        'bg-white text-black hover:bg-brand-1 hover:text-brand-1 focus:text-gray-300';
    const secondaryDarkStyle =
        'bg-brand-1 text-white hover:text-gray-300 focus:text-brand-1';

    const finalStyles = `border-2 border-current font-semibold leading-10 px-8 py-3 rounded-bl-lg uppercase ${
        isPrimary ? primaryStyle : ''
    } ${isPrimaryDark ? primaryDarkStyle : ''} ${
        isSecondary ? secondaryStyle : ''
    } ${isSecondaryDark ? secondaryDarkStyle : ''}`;

    return (
        <Link to="/" className={finalStyles}>
            Learn More
        </Link>
    );
}

Button.defaultProps = {
    isPrimary: true,
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
