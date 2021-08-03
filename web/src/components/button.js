import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function Button({
    isPrimary,
    isPrimaryDark,
    isSecondary,
    isSecondaryDark,
    internalLink,
    externalLink,
    link,
}) {
    const primaryStyle =
        'bg-brand-1 border-2 border-brand-1 text-white hover:bg-brand-2 hover:border-brand-2 focus:bg-brand-2';
    const primaryDarkStyle =
        'bg-white border-2 border-brand-1 text-brand-1 hover:bg-gray-300 hover:border-gray-300 focus:bg-gray-300 focus:border-gray-300';
    const secondaryStyle =
        'bg-white border-2 border-current text-brand-1 hover:text-brand-2 focus:text-brand-2';
    const secondaryDarkStyle =
        'bg-transparent border-2 border-white text-white hover:text-gray-300 hover:border-gray-300 focus:text-gray-300 focue:border-gray-300';
    const finalStyles = `font-semibold inline-block leading-tight px-8 py-2 mb-6 rounded-bl-2xl tracking-[.12rem] transition-colors uppercase ${
        isPrimary ? primaryStyle : ''
    }${isPrimaryDark ? primaryDarkStyle : ''}${
        isSecondary ? secondaryStyle : ''
    }${isSecondaryDark ? secondaryDarkStyle : ''}`;

    if (internalLink) {
        return (
            <Link to={`/${link}`} className={finalStyles}>
                Learn More
            </Link>
        );
    }
    if (externalLink) {
        return (
            <a
                className={finalStyles}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn More
            </a>
        );
    }
    return (
        <button type="button" className={finalStyles}>
            Learn More
        </button>
    );
}

Button.defaultProps = {
    isPrimary: false,
    isPrimaryDark: false,
    isSecondary: false,
    isSecondaryDark: false,
    internalLink: false,
    externalLink: false,
};

Button.propTypes = {
    isPrimary: PropTypes.bool,
    isPrimaryDark: PropTypes.bool,
    isSecondary: PropTypes.bool,
    isSecondaryDark: PropTypes.bool,
    internalLink: PropTypes.bool,
    externalLink: PropTypes.bool,
    link: PropTypes.string.isRequired,
};
