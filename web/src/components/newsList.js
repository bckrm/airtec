import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';

import NewsCard from './newsCard';
import MoreButton from './moreButton';

const Carousel = loadable(() => import('./carouselWrapper'));

export default function NewsList({ news }) {
    const text = 'More ❯';
    const back = '❮ Back';

    return (
        <div className="bg-brand-1 h-full pb-48">
            <h2 className="h1-heading-accent pt-12 text-center text-white text-4xl uppercase">
                News
            </h2>
            <div className="mt-32 relative">
                <Carousel
                    itemWidth="18rem"
                    plugins={[
                        {
                            resolve: arrowsPlugin,
                            options: {
                                arrowLeft: <MoreButton isLeft text={back} />,
                                arrowLeftDisabled: (
                                    <MoreButton text={back} isLeft isDisabled />
                                ),
                                arrowRight: <MoreButton text={text} />,
                                arrowRightDisabled: (
                                    <MoreButton text={text} isDisabled />
                                ),
                                addArrowClickHandler: true,
                            },
                        },
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 4,
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
