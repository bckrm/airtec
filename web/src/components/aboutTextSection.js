/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import PlaneIconWithText from './svgs/PlaneIconWithText';

export default function AboutText({ data }) {
    const { textSectionOne, textSectionTwo } = data;

    return (
        <div className="container gap-11 grid grid-cols-1 md:grid-cols-2 my-14">
            <p>
                {textSectionOne}
                <div className="mt-4">
                    <PlaneIconWithText data={data} />
                    <PlaneIconWithText data={data} />
                    <PlaneIconWithText data={data} />
                    <PlaneIconWithText data={data} />
                </div>
            </p>
            <p>{textSectionTwo}</p>
        </div>
    );
}

AboutText.propTypes = {
    data: PropTypes.object.isRequired,
};
