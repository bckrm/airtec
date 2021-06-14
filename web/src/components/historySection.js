import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';

import HistoryItem from './historyItem';

const Carousel = loadable(() => import('./carouselWrapper'));

export default function History({ years }) {
    const [activeTab, setActiveTab] = useState(years[0].id);
    const [shouldHaveCarouselNav, setshouldHaveCarouselNav] = useState(false);

    const resizeHandler = () => {
        if (window.innerWidth < 600) {
            setshouldHaveCarouselNav(true);
        } else {
            setshouldHaveCarouselNav(false);
        }
    };

    useEffect(() => {
        resizeHandler();
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <section id="history" className="container my-24">
            <h2 className="uppercase text-ts-h2 mb-4">History</h2>
            <div>
                <div className="flex gap-20">
                    {shouldHaveCarouselNav ? (
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
                        <>
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
                        </>
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
