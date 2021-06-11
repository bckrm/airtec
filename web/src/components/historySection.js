import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';

import HistoryItem from './historyItem';

const Carousel = loadable(() => import('./carouselWrapper'));

// const isBrowser = typeof window !== 'undefined';

export default function History({ years }) {
    const [activeTab, setActiveTab] = useState(years[0].id);
    const [buttonComponentLogic, setButtonComponentLogic] = useState(false);

    const setHistoryTimeline = () => {
        if (window.innerWidth < 600) {
            setButtonComponentLogic(true);
        }
    };

    useEffect(() => {
        setHistoryTimeline();
    });

    return (
        <section className="container my-24">
            <h2 className="uppercase text-ts-h2 mb-4">History</h2>
            <div>
                <div className="flex gap-20">
                    {buttonComponentLogic ? (
                        <Carousel
                            plugins={[
                                'fastSwipe',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 5,
                                    },
                                },
                            ]}
                        >
                            {years.map((year) => {
                                return (
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab(year.id)}
                                        key={year.id}
                                        isActive={activeTab === year.id}
                                        className={
                                            year.id === activeTab
                                                ? 'underline font-bold'
                                                : ''
                                        }
                                    >
                                        {year.year}
                                    </button>
                                );
                            })}
                        </Carousel>
                    ) : (
                        <div>
                            {years.map((year) => {
                                return (
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab(year.id)}
                                        key={year.id}
                                        isActive={activeTab === year.id}
                                        className={
                                            year.id === activeTab
                                                ? 'underline font-bold'
                                                : ''
                                        }
                                    >
                                        {year.year}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
                {years.map((year) => {
                    return (
                        <HistoryItem
                            data={year}
                            isOpen={activeTab === year.id}
                            key={year.id}
                            isActive={year.id === activeTab}
                        />
                    );
                })}
            </div>
        </section>
    );
}

History.propTypes = {
    years: PropTypes.array.isRequired,
};
