import React from 'react';
import PropTypes from 'prop-types';

export default function CompetitivePay({ text }) {
    return (
        <div>
            <svg
                id="prefix__Layer_1"
                x={0}
                y={0}
                viewBox="0 0 72 72"
                xmlSpace="preserve"
            >
                <style>{'.prefix__st0{fill:#232656}'}</style>
                <path
                    className="prefix__st0"
                    d="M57.1 24.4h-35c-.6 0-1 .4-1 1v2.3h-2.3c-.6 0-1 .4-1 1V31h-2.3c-.6 0-1 .4-1 1v15.2c0 .6.4 1 1 1h35.1c.6 0 1-.4 1-1V45h2.3c.6 0 1-.4 1-1v-2.3h2.3c.6 0 1-.4 1-1V25.4c-.1-.5-.5-1-1.1-1zm-7.6 21.9H16.4V33.1h1.3V44c0 .6.4 1 1 1h30.7v1.3zm3.3-3.3h-33V29.7h1.3v10.9c0 .6.4 1 1 1h30.7V43zm3.3-3.4h-33V26.4h33.1v13.2z"
                />
                <path
                    className="prefix__st0"
                    d="M37.2 35.7c-.4-.2-.8-.3-1.1-.6l-.7 1.5c.3.3.8.5 1.3.6.5.2 1.1.3 1.7.3v1.3h1.2v-1.3c.9-.1 1.6-.4 2.1-.9s.7-1 .7-1.7c0-.5-.1-1-.4-1.3-.3-.3-.6-.6-1-.7-.4-.2-.9-.3-1.4-.4v-2c.6.1 1.2.3 1.8.6l.6-1.5c-.6-.4-1.5-.7-2.4-.7v-1.3h-1.2v1.3c-.9.1-1.6.4-2.1.9s-.7 1-.7 1.7c0 .5.1 1 .4 1.3.3.3.6.6 1 .7s.9.3 1.4.5v2l-1.2-.3zm2.4-1.5c.3.1.5.2.6.3s.2.3.2.5-.1.4-.2.5-.4.2-.6.3v-1.6zm-1.8-2.3c-.2-.1-.2-.3-.2-.5s.1-.4.2-.5c.1-.2.4-.3.7-.3v1.7c-.4-.2-.6-.3-.7-.4z"
                />
            </svg>
            <p className="font-bold text-brand-1 text-2xl text-center">
                {text}
            </p>
        </div>
    );
}

CompetitivePay.propTypes = {
    text: PropTypes.string.isRequired,
};
