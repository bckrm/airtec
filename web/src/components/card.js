/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

export default function Card({
    data,
    isRight,
    cta,
    isPrimary,
    isDark,
    isTransparent,
}) {
    const { heading, id, info } = data;
    const cardBackgroundColor = isTransparent
        ? 'transparent'
        : isDark
        ? 'bg-brand-1'
        : 'bg-white';
    const textColor = isTransparent
        ? 'text-white'
        : isDark
        ? 'text-white'
        : 'text-brand-1';

    const cardStyle = `pl-6 rounded-bl-[2.5rem] w-11/12 md:w-6/12 
   ${cardBackgroundColor}
   ${textColor}
    ${isRight ? 'md:ml-auto' : 'md:mr-auto'}`;

    return (
        <div id={id} className="container">
            <div className={cardStyle}>
                <h2 className="card-accent font-semibold pt-7 mb-12 text-4xl uppercase">
                    {heading}
                </h2>
                <p className="pr-6 pb-7">{info}</p>
                {cta && (
                    <Button
                        cta={cta}
                        isPrimary={isPrimary}
                        isDark={isDark}
                        isTransparent={isTransparent}
                    />
                )}
            </div>
        </div>
    );
}

Card.defaultProps = {
    cta: {},
    isRight: false,
    isPrimary: false,
    isDark: false,
    isTransparent: false,
};

Card.propTypes = {
    data: PropTypes.object.isRequired,
    isRight: PropTypes.bool,
    cta: PropTypes.object,
    isPrimary: PropTypes.bool,
    isDark: PropTypes.bool,
    isTransparent: PropTypes.bool,
};
