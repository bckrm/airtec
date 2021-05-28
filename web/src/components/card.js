import React from 'react';

export default function Card() {
    return (
        <div className="mx-4 md:ml-10 bg-white rounded-bl-lg w-11/12 md:w-5/12">
            <h1 className="heading-accent pl-6 pt-7 mb-12 text-brand-1 text-4xl uppercase">
                Hello
            </h1>
            <p className="px-6 pb-7">
                Donec et sapien turpis. In rutrum nibh id purus venenatis, at
                vehicula massa faucibus. Maecenas interdum nulla lorem, nec
                vestibulum nibh tincidunt feugiat. Aenean vulputate eu justo eu
                ultrices. Nullam sodales sagittis posuere.
            </p>
        </div>
    );
}
