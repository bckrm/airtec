/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import PlaneIconWithText from './svgs/PlaneIconWithText';
import BlockText from './block-content/blockText';

export default function AboutText({ data }) {
    const { _rawLeftColumn, _rawRightColumn, iconTextList } = data;

    return (
        <div className="container gap-11 grid grid-cols-1 md:grid-cols-2 my-14">
            <div>
                <BlockText blocks={_rawLeftColumn} />
                <div className="mt-4">
                    {iconTextList.map((text) => {
                        return <PlaneIconWithText key={text.id} data={text} />;
                    })}
                </div>
            </div>
            <BlockText blocks={_rawRightColumn} />
        </div>
    );
}

AboutText.propTypes = {
    data: PropTypes.object.isRequired,
    iconTextList: PropTypes.array.isRequired,
};
