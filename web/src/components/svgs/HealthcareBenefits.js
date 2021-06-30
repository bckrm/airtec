import React from 'react';
import PropTypes from 'prop-types';

export default function HealthcareBenefits({ text }) {
    return (
        <div>
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
                    d="M50.3 55.4h-28c-2.8 0-5.1-2.3-5.1-5.1V22.4c0-2.8 2.3-5.1 5.1-5.1h27.9c2.8 0 5.1 2.3 5.1 5.1v27.9c0 2.8-2.2 5.1-5 5.1zm-28-36.1c-1.7 0-3.1 1.4-3.1 3.1v27.9c0 1.7 1.4 3.1 3.1 3.1h27.9c1.7 0 3.1-1.4 3.1-3.1V22.4c0-1.7-1.4-3.1-3.1-3.1H22.3z"
                />
                <path
                    className="prefix__st0"
                    d="M39.8 49.1h-7c-.6 0-1-.4-1-1v-7.6h-7.6c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7.6v-7.6c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7.6h7.6c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-7.6v7.6c0 .6-.5 1-1 1zm-6-2h5v-7.6c0-.6.4-1 1-1h7.6v-5h-7.6c-.6 0-1-.4-1-1v-7.6h-5v7.6c0 .6-.4 1-1 1h-7.6v5h7.6c.6 0 1 .4 1 1v7.6z"
                />
            </svg>
            <p className="font-bold text-brand-1 text-2xl text-center transform -translate-y-10">
                {text}
            </p>
        </div>
    );
}

HealthcareBenefits.propTypes = {
    text: PropTypes.string.isRequired,
};
