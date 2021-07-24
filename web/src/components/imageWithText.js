import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import Button from './button';

export default function ImageWithText({
    data,
    isLeft,
    hasButton,
    isPrimaryDark,
    isPrimary,
    isSecondaryDark,
    isSecondary,
    isTransparent,
    to,
    href,
}) {
    const {
        heading,
        text,
        image: {
            childImageSharp: { fluid },
        },
        id,
    } = data;

    return (
        <section
            id={id}
            className={`container flex gap-8 my-24 ${
                isLeft ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'
            }`}
        >
            <Img className="w-full md:w-1/2" fluid={fluid} />
            <div className="flex flex-col w-full md:w-1/2">
                <h2 className="font-bold text-brand-1 text-3xl leadership-accent">
                    {heading}
                </h2>
                <p className="pt-10">{text}</p>
                <div className="w-auto pt-4">
                    {hasButton && (
                        <Button
                            isPrimaryDark={isPrimaryDark}
                            isSecondary={isSecondary}
                            isPrimary={isPrimary}
                            isSecondaryDark={isSecondaryDark}
                            isTransparent={isTransparent}
                            href={href}
                            to={to}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

ImageWithText.defaultProps = {
    to: '',
    href: '',
    isLeft: false,
    isPrimary: false,
    isPrimaryDark: false,
    isSecondary: false,
    isSecondaryDark: false,
    hasButton: false,
    isTransparent: false,
};

ImageWithText.propTypes = {
    data: PropTypes.object.isRequired,
    isLeft: PropTypes.bool,
    isPrimary: PropTypes.bool,
    isPrimaryDark: PropTypes.bool,
    isSecondary: PropTypes.bool,
    isSecondaryDark: PropTypes.bool,
    hasButton: PropTypes.bool,
    isTransparent: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
};
