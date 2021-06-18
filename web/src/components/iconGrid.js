import React from 'react';
import PropTypes from 'prop-types';

import FourOhOneK from './svgs/FourOhOneK';
import VeteranHiringProgram from './svgs/VeteranHiringProgram';
import TrainingTuition from './svgs/TrainingTuition';
import ScheduleFlexibility from './svgs/ScheduleFlexibility';
import HealthcareBenefits from './svgs/HealthcareBenefits';
import CompetitivePay from './svgs/CompetitivePay';

export default function IconGrid({ text }) {
    return (
        <section className="container grid grid-cols-3">
            <ScheduleFlexibility text={text} />
            <VeteranHiringProgram text={text} />
            <HealthcareBenefits text={text} />
            <TrainingTuition text={text} />
            <FourOhOneK text={text} />
            <CompetitivePay text={text} />
        </section>
    );
}

IconGrid.propTypes = {
    text: PropTypes.string.isRequired,
};
