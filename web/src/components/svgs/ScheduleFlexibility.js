import React from 'react';
import PropTypes from 'prop-types';

export default function ScheduleFlexibility({ text }) {
    return (
        <div className="flex flex-col items-center">
            <svg
                id="prefix__Layer_1"
                x={0}
                y={0}
                viewBox="0 0 72 72"
                className="w-72"
                xmlSpace="preserve"
            >
                <style>{'.prefix__st0{fill:#232656}'}</style>
                <path
                    className="prefix__st0"
                    d="M48.6 35V20.9c0-.6-.4-1-1-1h-7.9v-3.6c0-.6-.4-1-1-1s-1 .4-1 1v3.6H24.6v-3.6c0-.6-.4-1-1-1s-1 .4-1 1v3.6h-7.9c-.6 0-1 .4-1 1v29.3c0 .6.4 1 1 1h22.9c1.8 3.7 5.7 6.3 10.1 6.3 6.2 0 11.3-5 11.3-11.3-.1-5.9-4.6-10.7-10.4-11.2zM15.7 49.2V21.9h6.9V23c0 .6.4 1 1 1s1-.4 1-1v-1.1h13.2V23c0 .6.4 1 1 1s1-.4 1-1v-1.1h6.9V35c-5.7.5-10.3 5.3-10.3 11.2 0 1 .2 2 .4 3H15.7zm31.9 6.2c-5.1 0-9.3-4.2-9.3-9.3s4.1-9.3 9.3-9.3 9.3 4.2 9.3 9.3-4.2 9.3-9.3 9.3z"
                />
                <path
                    className="prefix__st0"
                    d="M48.6 45.8v-6.1c0-.6-.4-1-1-1s-1 .4-1 1v6.5c0 .3.1.5.3.7l3 3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-2.7-2.7zM22.4 25.5h-4.2c-.6 0-1 .4-1 1v4.2c0 .6.4 1 1 1h4.2c.6 0 1-.4 1-1v-4.2c0-.5-.4-1-1-1zm-1 4.2h-2.2v-2.2h2.2v2.2zM29.6 25.5h-4.2c-.6 0-1 .4-1 1v4.2c0 .6.4 1 1 1h4.2c.6 0 1-.4 1-1v-4.2c0-.5-.4-1-1-1zm-1 4.2h-2.2v-2.2h2.2v2.2zM32.7 31.7h4.2c.6 0 1-.4 1-1v-4.2c0-.6-.4-1-1-1h-4.2c-.6 0-1 .4-1 1v4.2c0 .6.4 1 1 1zm1-4.2h2.2v2.2h-2.2v-2.2zM22.4 33.5h-4.2c-.6 0-1 .4-1 1v4.2c0 .6.4 1 1 1h4.2c.6 0 1-.4 1-1v-4.2c0-.5-.4-1-1-1zm-1 4.2h-2.2v-2.2h2.2v2.2zM29.6 33.5h-4.2c-.6 0-1 .4-1 1v4.2c0 .6.4 1 1 1h4.2c.6 0 1-.4 1-1v-4.2c0-.5-.4-1-1-1zm-1 4.2h-2.2v-2.2h2.2v2.2zM22.4 41.3h-4.2c-.6 0-1 .4-1 1v4.2c0 .6.4 1 1 1h4.2c.6 0 1-.4 1-1v-4.2c0-.5-.4-1-1-1zm-1 4.2h-2.2v-2.2h2.2v2.2zM29.6 41.3h-4.2c-.6 0-1 .4-1 1v4.2c0 .6.4 1 1 1h4.2c.6 0 1-.4 1-1v-4.2c0-.5-.4-1-1-1zm-1 4.2h-2.2v-2.2h2.2v2.2zM37.9 38.7v-4.2c0-.6-.4-1-1-1h-4.2c-.6 0-1 .4-1 1v4.2c0 .6.4 1 1 1h4.2c.5 0 1-.5 1-1zm-2-1h-2.2v-2.2h2.2v2.2zM39.9 31.7h4.2c.6 0 1-.4 1-1v-4.2c0-.6-.4-1-1-1h-4.2c-.6 0-1 .4-1 1v4.2c0 .6.5 1 1 1zm1-4.2h2.2v2.2h-2.2v-2.2z"
                />
            </svg>
            <p className="font-bold text-brand-1 text-2xl text-center transform -translate-y-10">
                {text}
            </p>
        </div>
    );
}

ScheduleFlexibility.propTypes = {
    text: PropTypes.string.isRequired,
};
