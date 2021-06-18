import React from 'react';
import PropTypes from 'prop-types';

export default function TrainingTuition({ text }) {
    return (
        <div>
            <svg viewBox="0 0 72 72">
                <path
                    d="M57.5 30l-20.8-7.8c-.2-.1-.5-.1-.7 0L15.1 30c-.4.1-.6.5-.6.9s.3.8.6.9l6.1 2.3v7.4c0 3.2 7.2 6.2 15.1 6.2 3.3 0 6.4-.5 8.9-1.3v3.1c0 .6.4 1 1 1s1-.4 1-1v-3.9c2.5-1.1 4.2-2.6 4.2-4.1v-7.4l6.1-2.3c.4-.1.6-.5.6-.9s-.2-.7-.6-.9zM36.3 45.8c-8 0-13.1-2.9-13.1-4.2V35L36 39.8c.1 0 .2.1.4.1s.2 0 .4-.1l8.6-3.2v7.9c-2.4.7-5.5 1.3-9.1 1.3zm13.1-4.2c0 .5-.8 1.2-2.2 1.9v-7.8l2.2-.8v6.7zM46.2 34l-9.5-4c-.5-.2-1.1 0-1.3.5-.2.5 0 1.1.5 1.3l7.6 3.1-7.2 2.7-18-6.8 18-6.8 18 6.8-8.1 3.2z"
                    fill="#232656"
                />
            </svg>
            <p className="font-bold text-brand-1 text-2xl text-center">
                {text}
            </p>
        </div>
    );
}

TrainingTuition.propTypes = {
    text: PropTypes.string.isRequired,
};
