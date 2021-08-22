import React from 'react';
import PropTypes from 'prop-types';

import NewsCard from './newsCard';

export default function NewsSection({ news }) {
    return (
        <section className="container my-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-9">
                {news.map((item) => {
                    return <NewsCard data={item.node} key={item.node.id} />;
                })}
            </div>
        </section>
    );
}

NewsSection.propTypes = {
    news: PropTypes.array.isRequired,
};
