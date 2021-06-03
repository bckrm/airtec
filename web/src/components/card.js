import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ data, isRight, isTransparent }) {
    const { heading, description } = data;

    const cardStyle = `rounded-bl-lg w-11/12 md:w-7/12 ${
        isTransparent ? 'bg-transparent' : 'bg-white'
    } ${isRight ? 'md:transform md:translate-x-3/4' : ''}`;

    return (
        <div className="container">
            <div className={cardStyle}>
                <h1 className="heading-accent pl-6 pt-7 mb-12 text-brand-1 text-4xl uppercase">
                    {heading}
                </h1>
                <p className="px-6 pb-7">{description}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
    isTransparent: PropTypes.bool.isRequired,
    isRight: PropTypes.bool.isRequired,
};
