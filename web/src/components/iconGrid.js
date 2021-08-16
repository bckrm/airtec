import React from 'react';
import PropTypes from 'prop-types';

import FourOhOneK from './svgs/FourOhOneK';
import VeteranHiringProgram from './svgs/VeteranHiringProgram';
import TrainingTuition from './svgs/TrainingTuition';
import ScheduleFlexibility from './svgs/ScheduleFlexibility';
import HealthcareBenefits from './svgs/HealthcareBenefits';
import CompetitivePay from './svgs/CompetitivePay';

import IconItem from './iconItem';

export default function IconGrid({ data }) {
    return (
        <>
            <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                <ScheduleFlexibility text="Schedule Flexibility" />
                <VeteranHiringProgram text="Veteran Hiring Program" />
                <HealthcareBenefits text="Healthcare Benefits" />
                <TrainingTuition text="Training & Tuition Reimbursement" />
                <FourOhOneK text="401(k)" />
                <CompetitivePay text="Competitive Pay" />
            </section>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                <IconItem data={data} />
            </div>
        </>
    );
}

IconGrid.propTypes = {
    data: PropTypes.object.isRequired,
};
