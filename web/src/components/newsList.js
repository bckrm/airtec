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

export default function NewsList({ news, pathname }) {
    const text = 'More ❯';
    const back = '❮ Back';

    return (
        <div className="bg-brand-1 h-full overflow-visible pl-5 md:pl-9 pb-48">
            <h2 className="h1-heading-accent pt-12 text-center text-white text-4xl uppercase">
                News
            </h2>
            <div className="mt-32 pl-2 relative">
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
                        return (
                            <NewsCard
                                key={newsItem.title}
                                data={newsItem}
                                pathname={pathname}
                            />
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired,
    pathname: PropTypes.string.isRequired,
};
