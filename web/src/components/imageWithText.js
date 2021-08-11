import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import BlockText from './block-content/blockText';
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
    anchorId,
}) {
    const {
        heading,
        _rawInfo,
        image: { asset },
    } = data;

    const imageData = getImage(asset);

    return (
        <section
            id={anchorId}
            className={`container flex gap-8 my-24 ${
                isLeft ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'
            }`}
        >
            <GatsbyImage className="w-full md:w-1/2" image={imageData} />
            <div className="flex flex-col w-full md:w-1/2">
                <h2 className="font-bold text-brand-1 text-3xl leadership-accent">
                    {heading}
                </h2>
                <p className="prose pt-10">
                    <BlockText blocks={_rawInfo} />
                </p>
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
    anchorId: '',
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
    anchorId: PropTypes.string,
};
