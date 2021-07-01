import React from 'react';
import PropTypes from 'prop-types';

export default function VeteranHiringProgram({ text }) {
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
                    d="M40.5 31.5c-.2 0-.4-.1-.6-.2l-3.6-2.6-3.6 2.6c-.4.3-.8.3-1.2 0s-.5-.7-.4-1.1l1.4-4.2-3.6-2.6c-.4-.3-.5-.7-.4-1.1s.5-.7 1-.7H34l1.4-4.2c.1-.4.5-.7 1-.7s.8.3 1 .7l1.4 4.2h4.5c.4 0 .8.3 1 .7s0 .9-.4 1.1L40.1 26l1.4 4.2c.1.4 0 .9-.4 1.1-.2.2-.4.2-.6.2zm-4.2-5c.2 0 .4.1.6.2l1.7 1.2-.7-2c-.1-.4 0-.9.4-1.1l1.7-1.2h-2.1c-.4 0-.8-.3-1-.7l-.7-2-.7 2c-.1.4-.5.7-1 .7h-2.1l1.7 1.2c.4.3.5.7.4 1.1l-.7 2 1.7-1.2c.4-.1.6-.2.8-.2z"
                />
                <path
                    className="prefix__st0"
                    d="M36.3 45c-.1 0-.3 0-.4-.1L20 37.3c-.3-.2-.6-.5-.6-.9v-5.8c0-.3.2-.7.5-.8.3-.2.7-.2 1-.1l15.4 7.4 15.4-7.4c.3-.1.7-.1 1 .1.3.2.5.5.5.8v5.8c0 .4-.2.7-.6.9l-15.8 7.6c-.2.1-.4.1-.5.1zm-14.8-9.2l14.8 7.1 14.8-7.1v-3.6l-14.4 6.9c-.3.1-.6.1-.9 0l-14.4-6.9v3.6z"
                />
                <path
                    className="prefix__st0"
                    d="M36.3 56.1c-.1 0-.3 0-.4-.1L20 48.4c-.3-.2-.6-.5-.6-.9v-5.8c0-.3.2-.7.5-.8.3-.2.7-.2 1-.1l15.4 7.4 15.4-7.4c.3-.1.7-.1 1 .1.3.2.5.5.5.8v5.8c0 .4-.2.7-.6.9L36.7 56c-.1 0-.3.1-.4.1zm-14.8-9.3L36.3 54l14.8-7.1v-3.6l-14.4 6.9c-.3.1-.6.1-.9 0l-14.4-6.9v3.5z"
                />
            </svg>
            <p className="font-bold text-brand-1 text-2xl text-center transform -translate-y-10">
                {text}
            </p>
        </div>
    );
}

VeteranHiringProgram.propTypes = {
    text: PropTypes.string.isRequired,
};
