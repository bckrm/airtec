import React from 'react';

export default function Card() {
    return (
        <div className="absolute bg-white ml-10 rounded-bl-lg w-5/12">
            {/* left-24 rounded-bl-lg top-44 w-5/12 */}
            <h1 className="header-accent pl-6 pt-7 mb-6 text-brand-1 text-4xl uppercase">
                Hello
            </h1>
            <p className="max-w-md mt-6 pl-6 pb-7">
                Donec et sapien turpis. In rutrum nibh id purus venenatis, at
                vehicula massa faucibus. Maecenas interdum nulla lorem, nec
                vestibulum nibh tincidunt feugiat. Aenean vulputate eu justo eu
                ultrices. Nullam sodales sagittis posuere.
            </p>
        </div>
    );
}
