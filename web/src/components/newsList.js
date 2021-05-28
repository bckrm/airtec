import React from 'react';
import PropTypes from 'prop-types';

import NewsCard from './newsCard';

export default function NewsList({ news }) {
    // const [index, setIndex] = useState(0);

    return (
        <div className="bg-brand-1 h-screen">
            <h1 className="pt-12 text-center text-white text-4xl uppercase">
                News
                <span className="absolute bg-brand-4 h-1 left-[48%] text-brand-4 top-[119%] w-10" />
            </h1>
            <div className="container flex gap-9 m-auto mt-32">
                {news.map((newsItem) => {
                    return <NewsCard data={newsItem} />;
                })}
            </div>
            {/* this button will be changed out */}
            <button className="text-white" type="button">
                More
            </button>
        </div>
    );
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired,
};
