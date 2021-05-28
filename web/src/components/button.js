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
        'bg-brand-1 text-white hover:bg-brand-2 focus:bg-brand-2';
    const primaryDarkStyle =
        'bg-white text-black hover:bg-gray-300 focus:bg-brand-1';
    const secondaryStyle =
        'bg-white border-4 border-current text-brand-1 hover:text-brand-2 focus:';
    const secondaryDarkStyle =
        'bg-brand-1 text-white hover:text-gray-300 focus:text-brand-1';

    const finalStyles = `font-semibold inline-block leading-tight px-8 py-2 rounded-bl-2xl tracking-[.12rem] transition-colors uppercase ${
        isPrimary ? primaryStyle : ''
    }${isPrimaryDark ? primaryDarkStyle : ''}${
        isSecondary ? secondaryStyle : ''
    }${isSecondaryDark ? secondaryDarkStyle : ''}`;

    return (
        <Link to="/" className={finalStyles}>
            Learn More
        </Link>
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
