import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function Button({ cta, isPrimary, isDark, isTransparent }) {
    const commonStyles =
        'font-semibold border-2 inline-block leading-tight px-8 py-2 mb-6 rounded-bl-2xl tracking-[.12rem] transition-colors uppercase';
    const primaryStyles =
        'bg-brand-1 border-brand-1 text-white hover:bg-brand-2 hover:border-brand-2 focus:bg-brand-2';
    const primaryDarkStyles =
        'bg-white border-brand-1 text-brand-1 hover:bg-gray-300 hover:border-gray-300 focus:bg-gray-300 focus:border-gray-300';
    const secondaryStyles =
        'bg-white border-current text-brand-1 hover:text-brand-2 focus:text-brand-2';
    const secondaryDarkStyles =
        'bg-transparent border-white text-white hover:text-gray-300 hover:border-gray-300 focus:text-gray-300 focus:border-gray-300 visited:text-white';

    const finalStyles = `${commonStyles}
	${isPrimary && !isDark ? primaryStyles : ''} 
	${isPrimary && isDark ? primaryDarkStyles : ''}   
	${!isPrimary && !isDark && !isTransparent ? secondaryStyles : ''}
	${!isPrimary && (isDark || isTransparent) ? secondaryDarkStyles : ''}
    `;

    if (cta.linkType === 'internal') {
        return (
            <Link to={`/${cta.link}`} className={finalStyles}>
                Learn More
            </Link>
        );
    }
    if (cta.linkType === 'external') {
        return (
            <a
                className={finalStyles}
                href={cta.link}
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
    isDark: false,
    cta: '',
    isTransparent: false,
};

Button.propTypes = {
    cta: PropTypes.object,
    isPrimary: PropTypes.bool,
    isDark: PropTypes.bool,
    isTransparent: PropTypes.bool,
};
