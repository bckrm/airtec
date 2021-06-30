import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import {
    slidesToShowPlugin,
    arrowsPlugin,
    slidesToScrollPlugin,
} from '@brainhubeu/react-carousel';

import NewsCard from './newsCard';
import MoreButton from './moreButton';

const Carousel = loadable(() => import('./carouselWrapper'));

export default function RecentNewsList({ news }) {
    const forward = 'More ❯';
    const back = '❮ Back';

    return (
        <section className="container h-full overflow-hidden pl-5 md:pl-9 pb-48">
            <h2 className="ml-3 pt-12 text-brand-1 text-4xl">Recent News</h2>
            <div className="mt-8 relative">
                <Carousel
                    itemWidth="18rem"
                    plugins={[
                        {
                            resolve: arrowsPlugin,
                            options: {
                                arrowLeft: (
                                    <MoreButton isLeft text={back} isLight />
                                ),
                                arrowLeftDisabled: (
                                    <MoreButton text={back} isLeft isDisabled />
                                ),
                                arrowRight: (
                                    <MoreButton text={forward} isLight />
                                ),
                                arrowRightDisabled: (
                                    <MoreButton text={forward} isDisabled />
                                ),
                                addArrowClickHandler: true,
                            },
                        },
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 1,
                            },
                        },
                        {
                            resolve: slidesToScrollPlugin,
                            options: {
                                numberOfSlides: 1,
                            },
                        },
                    ]}
                >
                    {news.map((newsItem) => {
                        return <NewsCard data={newsItem} />;
                    })}
                </Carousel>
            </div>
        </section>
    );
}

RecentNewsList.propTypes = {
    news: PropTypes.array.isRequired,
};
