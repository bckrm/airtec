import React from 'react';
import PropTypes from 'prop-types';

import LeaderCard from './leaderCard';

export default function LeaderSection({ leaders }) {
    return (
        <div>
            {leaders.map((leader) => {
                return <LeaderCard data={leader} />;
            })}
        </div>
    );
}

LeaderSection.propTypes = {
    leaders: PropTypes.array.isRequired,
};
