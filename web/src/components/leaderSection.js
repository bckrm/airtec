import React from 'react';
import PropTypes from 'prop-types';

import LeaderCard from './leaderCard';

export default function LeaderSection({ leaders }) {
    return (
        <section id="leadership" className="bg-brand-1">
            <div className="container py-20">
                <h2 className="leadership-accent mb-14 text-white text-ts-h2 uppercase">
                    Leadership
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-9">
                    {leaders.map((leader) => {
                        return <LeaderCard data={leader} />;
                    })}
                </div>
            </div>
        </section>
    );
}

LeaderSection.propTypes = {
    leaders: PropTypes.array.isRequired,
};
