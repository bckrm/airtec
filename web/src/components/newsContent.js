import React from 'react';
import PropTypes from 'prop-types';
import BlockText from './block-content/blockText';

export default function NewsContent({ data }) {
    const { _rawNewsBody, newsSubTitle, newsTitle } = data;
    return (
        <section className="container my-24 xl:w-1/2">
            <h2 className="text-3xl font-bold text-brand-1 my-1">
                {newsTitle}
            </h2>
            <h3 className="font-light leadership-accent mb-12 text-brand-4">
                {newsSubTitle}
            </h3>
            <div className="leading-relaxed prose">
                <BlockText blocks={_rawNewsBody} />
            </div>
        </section>
    );
}

NewsContent.propTypes = {
    data: PropTypes.object.isRequired,
};
