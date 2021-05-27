import React from 'react';
import { Link } from 'gatsby';

export default function MoreButton() {
    return (
        <Link
            to="/"
            className=" bg-black border-2 border-current rounded-bl-lg text-white text-center w-24"
            type="button"
        >
            More &#8250;
        </Link>
    );
}
