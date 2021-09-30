import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { imageUrlFor, buildImageObj } from '../helpers/sanityImageHelper';

export default function NewsCard({ data }) {
    const {
        newsTitle,
        description,
        heroImage,
        slug: { current },
    } = data;

    return (
        <Link
            to={`/news/${current}`}
            className="bg-white h-[34rem] mx-3 md:mr-9 transform transition focus:scale-110 md:hover:scale-110 shadow-md overflow-hidden w-80"
        >
            <img
                className="w-full rounded-bl-[2.5rem]"
                src={imageUrlFor(buildImageObj(heroImage))
                    .width(400)
                    .height(Math.floor((9 / 16) * 400))
                    .fit('fill')
                    .auto('format')
                    .url()}
                alt=""
            />
            <h3 className="heading-accent font-bold mt-4 pb-10 px-4 text-brand-1 text-ts-h4">
                {newsTitle}
            </h3>
            <p className="px-4">{description}</p>
        </Link>
    );
}

NewsCard.propTypes = {
    data: PropTypes.object.isRequired,
};
