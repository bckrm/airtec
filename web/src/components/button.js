import React from 'react';

export default function Button() {
    const primaryStyle =
        'bg-black text-white hover:bg-brand-1 visited:bg-gray-300';
    // const primaryDarkStyle =
    //     'bg-white text-black hover:bg-gray-300 visited:bg-brand-1';
    // const secondaryStyle =
    //     'bg-white text-black hover:bg-brand-1 hover:text-brand-1 visited:text-gray-300';
    // const secondaryDarkStyle =
    //     'bg-brand-1 text-white hover:text-gray-300 visited:text-brand-1';

    return (
        <button
            type="button"
            className={`border-2 border-current h-9 rounded-bl-lg uppercase w-48 ${primaryStyle}`}
        >
            Learn More
        </button>
    );
}
