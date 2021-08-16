import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import BlockText from './block-content/blockText';

export default function ImageWithText({ data, isLeft, anchorId }) {
    const {
        heading,
        _rawInfo,
        image: { asset },
        buttonText,
        buttonURL,
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
                    {buttonURL && (
                        <a
                            href={buttonURL}
                            type="button"
                            className="font-semibold border-2 inline-block leading-tight px-8 py-2 mb-6 rounded-bl-2xl tracking-[.12rem] transition-colors uppercase bg-brand-1 border-brand-1 text-white hover:bg-brand-2 hover:border-brand-2 focus:bg-brand-2"
                        >
                            {buttonText}
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}

ImageWithText.defaultProps = {
    isLeft: false,
    anchorId: '',
};

ImageWithText.propTypes = {
    data: PropTypes.object.isRequired,
    isLeft: PropTypes.bool,
    anchorId: PropTypes.string,
};
