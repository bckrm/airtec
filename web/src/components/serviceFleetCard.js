import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { imageUrlFor, buildImageObj } from '../helpers/sanityImageHelper';

export default function ServiceFleetCard({ data, pathname }) {
    const {
        node: {
            description,
            heroImage,
            slug: { current },
            title,
        },
    } = data;

    return (
        <Link
            to={`${pathname}/${current}`}
            className="bg-white h-[34rem] transform transition focus:scale-110 md:hover:scale-110 shadow-2xl w-80"
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
                {title}
            </h3>
            <p className="px-4">{description}</p>
        </Link>
    );
}

ServiceFleetCard.propTypes = {
    data: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
};
