import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

export default function Card({
    data,
    isRight,
    isTransparent,
    isDark,
    isPrimaryDark,
    isPrimary,
    isSecondaryDark,
    isSecondary,
}) {
    const { heading, description } = data;

    const darkStyle = isDark
        ? 'bg-brand-1 text-white'
        : 'bg-white text-brand-1';
    const transparentStyle = isTransparent ? 'bg-transparent text-black' : '';

    const cardStyle = `rounded-bl-lg w-11/12 md:w-7/12 pl-6
   ${darkStyle} ${transparentStyle}
    ${isRight ? 'md:transform md:translate-x-3/4' : ''}`;

    return (
        <div className="container">
            <div className={cardStyle}>
                <h1 className="heading-accent pt-7 mb-12 text-4xl uppercase">
                    {heading}
                </h1>
                <p className="pr-6 pb-7">{description}</p>
                <Button
                    isPrimaryDark={isPrimaryDark}
                    isSecondary={isSecondary}
                    isPrimary={isPrimary}
                    isSecondaryDark={isSecondaryDark}
                    isTransparent={isTransparent}
                />
            </div>
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
    isTransparent: PropTypes.bool.isRequired,
    isDark: PropTypes.bool.isRequired,
    isRight: PropTypes.bool.isRequired,
    isPrimary: PropTypes.bool.isRequired,
    isPrimaryDark: PropTypes.bool.isRequired,
    isSecondary: PropTypes.bool.isRequired,
    isSecondaryDark: PropTypes.bool.isRequired,
};
