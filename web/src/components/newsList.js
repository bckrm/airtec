import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';

import NewsCard from './newsCard';

const Carousel = loadable(() => import('./carouselWrapper'));

export default function NewsList({ news }) {
    return (
        <div className="bg-brand-1 h-screen">
            <h1 className="pt-12 text-center text-white text-4xl uppercase">
                News
                <span className="absolute bg-brand-4 h-1 left-[48%] text-brand-4 top-[119%] w-10" />
            </h1>
            <div className="flex gap-9 m-auto mt-32">
                <Carousel
                    plugins={[
                        'infinite',
                        'arrows',
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
