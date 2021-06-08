import React from 'react';
import PropTypes from 'prop-types';

import LeaderCard from './leaderCard';

export default function LeaderSection({ leaders }) {
    return (
        <div className="bg-brand-1">
            <div className="container py-20">
                <h2 className="heading-accent mb-6 text-white text-ts-h2 uppercase">
                    Leadership
                </h2>
                <div className=" flex flex-wrap gap-8">
                    {leaders.map((leader) => {
                        return <LeaderCard data={leader} />;
                    })}
                </div>
            </div>
        </div>
    );
}

LeaderSection.propTypes = {
    leaders: PropTypes.array.isRequired,
};
