import React from 'react';

import FourOhOneK from './svgs/FourOhOneK';
import VeteranHiringProgram from './svgs/VeteranHiringProgram';
import TrainingTuition from './svgs/TrainingTuition';
import ScheduleFlexibility from './svgs/ScheduleFlexibility';
import HealthcareBenefits from './svgs/HealthcareBenefits';
import CompetitivePay from './svgs/CompetitivePay';

export default function IconGrid() {
    return (
        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            <ScheduleFlexibility text="Schedule Flexibility" />
            <VeteranHiringProgram text="Veteran Hiring Program" />
            <HealthcareBenefits text="Healthcare Benefits" />
            <TrainingTuition text="Training & Tuition Reimbursement" />
            <FourOhOneK text="401(k)" />
            <CompetitivePay text="Competitive Pay" />
        </section>
    );
}
