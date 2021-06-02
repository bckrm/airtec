import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';

import NewsCard from './newsCard';
import MoreButton from './moreButton';

const Carousel = loadable(() => import('./carouselWrapper'));

export default function NewsList({ news }) {
    const content = {
        text: 'More',
        back: 'Back',
    };
    return (
        <div className="bg-brand-1 h-full mb-48 pb-48">
            <h1 className="pt-12 text-center text-white text-4xl uppercase">
                News
                <span className="absolute bg-brand-4 h-1 left-[48%] text-brand-4 top-[119%] w-10" />
            </h1>
            <div className="mt-32">
                <Carousel
                    plugins={[
                        {
                            resolve: arrowsPlugin,
                            options: {
                                arrowLeft: (
                                    <button type="button">
                                        <MoreButton text={content.back} />
                                    </button>
                                ),
                                arrowLeftDisabled: (
                                    <button type="button" className="hidden">
                                        <MoreButton text={content.back} />
                                    </button>
                                ),
                                arrowRight: (
                                    <button type="button">
                                        <MoreButton text={content.text} />
                                    </button>
                                ),
                                arrowRightDisabled: (
                                    <button type="button" className="hidden">
                                        <MoreButton text={content.back} />
                                    </button>
                                ),
                                addArrowClickHandler: true,
                            },
                        },
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3,
                            },
                        },
                    ]}
                >
                    {news.map((newsItem) => {
                        return <NewsCard data={newsItem} />;
                    })}
                </Carousel>
            </div>
        </div>
    );
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired,
};
