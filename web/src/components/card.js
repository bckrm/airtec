import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

export default function Card({
    data,
    hasButton,
    isRight,
    isTransparent,
    isDark,
    isPrimaryDark,
    isPrimary,
    isSecondaryDark,
    isSecondary,
    to,
    href,
}) {
    const { heading, id, description } = data;

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
                <p className="pr-6 pb-7">{description}</p>
                {hasButton && (
                    <Button
                        isPrimaryDark={isPrimaryDark}
                        isSecondary={isSecondary}
                        isPrimary={isPrimary}
                        isSecondaryDark={isSecondaryDark}
                        isTransparent={isTransparent}
                        to={to}
                        href={href}
                    />
                )}
            </div>
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
    hasButton: PropTypes.object.isRequired,
    isTransparent: PropTypes.bool.isRequired,
    isDark: PropTypes.bool.isRequired,
    isRight: PropTypes.bool.isRequired,
    isPrimary: PropTypes.bool.isRequired,
    isPrimaryDark: PropTypes.bool.isRequired,
    isSecondary: PropTypes.bool.isRequired,
    isSecondaryDark: PropTypes.bool.isRequired,
    to: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};
