/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import PlaneIconWithText from './svgs/PlaneIconWithText';

export default function AboutText({ data }) {
    const { _rawLeftColumn, _rawRightColumn } = data;

    return (
        <div className="container gap-11 grid grid-cols-1 md:grid-cols-2 my-14">
            <p>
                {_rawLeftColumn}
                <div className="mt-4">
                    <PlaneIconWithText data={data} />
                    <PlaneIconWithText data={data} />
                    <PlaneIconWithText data={data} />
                    <PlaneIconWithText data={data} />
                </div>
            </p>
            <p>{_rawRightColumn}</p>
        </div>
    );
}

AboutText.propTypes = {
    data: PropTypes.object.isRequired,
};
