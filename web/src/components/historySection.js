import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';

import HistoryItem from './historyItem';

const Carousel = loadable(() => import('./carouselWrapper'));

export default function History({ years }) {
    const [shouldHaveCarouselNav, setshouldHaveCarouselNav] = useState(false);

    const resizeHandler = () => {
        if (window.innerWidth < 600) {
            setshouldHaveCarouselNav(true);
        } else {
            setshouldHaveCarouselNav(false);
        }
    };

    const sortedYears = years.sort((yearA, yearB) => {
        const yearANum = Number(yearA.node.year.slice(0, 4));
        const yearBNum = Number(yearB.node.year.slice(0, 4));

        if (yearANum < yearBNum) {
            return -1;
        }
        if (yearANum > yearBNum) {
            return 1;
        }

        return 0;
    });

    const [activeTab, setActiveTab] = useState(sortedYears[0].node.id);

    useEffect(() => {
        resizeHandler();
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <section id="history" className="container h-[30rem] my-24">
            <h2 className="uppercase text-ts-h2 mb-4">History</h2>
            <div>
                <div className="flex gap-20">
                    {shouldHaveCarouselNav ? (
                        <Carousel
                            plugins={[
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 5,
                                    },
                                },
                            ]}
                        >
                            {sortedYears.map((year) => {
                                return (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveTab(year.node.id)
                                        }
                                        key={year.node.id}
                                        isActive={activeTab === year.node.id}
                                        className={
                                            year.node.id === activeTab
                                                ? 'underline font-bold'
                                                : ''
                                        }
                                    >
                                        {year.node.year}
                                    </button>
                                );
                            })}
                        </Carousel>
                    ) : (
                        sortedYears.map((year) => {
                            return (
                                <button
                                    type="button"
                                    onClick={() => setActiveTab(year.node.id)}
                                    key={year.node.id}
                                    isActive={activeTab === year.node.id}
                                    className={
                                        year.node.id === activeTab
                                            ? 'underline font-bold'
                                            : ''
                                    }
                                >
                                    {year.node.year}
                                </button>
                            );
                        })
                    )}
                </div>
                {sortedYears.map((year) => {
                    return (
                        <HistoryItem
                            data={year.node}
                            isOpen={activeTab === year.node.id}
                            key={year.node.id}
                            isActive={year.node.id === activeTab}
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
