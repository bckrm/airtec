import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

export default function Card({
    data,
    hasButton,
    isRight,
    isTransparent,
    isDark,
    isPrimary,
    isPrimaryDark,
    isSecondary,
    isSecondaryDark,
    to,
    href,
}) {
    const { heading, id, info } = data;

    const darkStyle = isDark
        ? 'bg-brand-1 text-white'
        : 'bg-white text-brand-1';
    const transparentStyle = isTransparent ? 'bg-transparent text-black' : '';

    const cardStyle = `pl-6 rounded-bl-[2.5rem] w-11/12 md:w-6/12 
   ${darkStyle} ${transparentStyle}
    ${isRight ? 'md:ml-auto' : 'md:mr-auto'}`;

    return (
        <div id={id} className="container">
            <div className={cardStyle}>
                <h2 className="card-accent font-semibold pt-7 mb-12 text-4xl uppercase">
                    {heading}
                </h2>
                <p className="pr-6 pb-7">{info}</p>
                {hasButton && (
                    <Button
                        isSecondary={isSecondary}
                        isPrimary={isPrimary}
                        isSecondaryDark={isSecondaryDark}
                        isPrimaryDark={isPrimaryDark}
                        to={to}
                        href={href}
                    />
                )}
            </div>
        </div>
    );
}

Card.defaultProps = {
    isPrimary: false,
    isPrimaryDark: false,
    isSecondaryDark: false,
    isSecondary: false,
    hasButton: false,
    isTransparent: false,
    isDark: false,
    isRight: false,
    to: '',
    href: '',
};

Card.propTypes = {
    data: PropTypes.object.isRequired,
    hasButton: PropTypes.object,
    isTransparent: PropTypes.bool,
    isDark: PropTypes.bool,
    isRight: PropTypes.bool,
    isPrimary: PropTypes.bool,
    isPrimaryDark: PropTypes.bool,
    isSecondaryDark: PropTypes.bool,
    isSecondary: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
};
