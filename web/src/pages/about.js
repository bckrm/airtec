import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import AboutText from '../components/aboutTextSection';

export default function AboutPage({ data }) {
    const { aboutImage } = data;

    const content = {
        hero: {
            image: aboutImage,
            text: 'ABOUT PAGE',
        },
        about: {
            textSectionOne:
                'We maintain a fleet of specially modified fixed-wing and rotary-wing aircraft to meet customers unique surveillance, test, telemetry, range safety and airborne science requirements. AIRtec is skilled at engineering unique aircraft configurations and obtaining airworthiness certifications through FAA and DOD processes. We retain a highly qualified team of mission oriented pilots, operators, and technicians to deliver full end-to-end results for customer needs. The AIRtec team provides a high mean experience level across all critical aviation areas to include: flight operations, safety, maintenance, training, equipment integration and sensor operation.  AIRtec can quickly turn a customer requirement into meaningful flight operations and data as a service without typical government contracting and procurement delays.',
            textSectionTwo:
                'AIRtec currently operates out of California, MD at the St. Mary’s County Airport (2W6), approximately seven miles from the Naval Air Station, in Patuxent River, MD. The airport is publicly owned, has a single 4150-foot runway and hosts approximately 164 aircraft operations per day. Our mission readiness rate has been 98% over the previous five years. AIRtec Inc. has been providing CONUS and OCONUS airborne support for DoD and NASA since 1987. For over twelve years AIRtec has acted as the primary maritime radar surveillance aircraft for the Atlantic Test Range, Atlantic Fleet Exercise Coordination Center, the Pacific Missile Test Range, NAWCAD, NAWCWD, and NASA Wallops Island Facility. Other recent projects include performing radar flight testing for Telephonics Corporation and the Counter Narco-Terrorism Technology Program Office, providing Standard Navy Target Control (SNTC) relay for BQM-74E target drones, conducting flight test in support of the Carrier Landing Systems Office for VX-23, range clearing for Fleet Forces Atlantic Exercise Coordination Center (FFAECC) and acting as Air Intercept Control (AIC) targets for Fleet Opposition Force exercises.',
            text: 'Airborne ISR training',
        },
    };

    return (
        <Layout>
            <Hero data={content.hero} />
            <AboutText data={content.about} />
        </Layout>
    );
}

export const query = graphql`
    query AboutQuery {
        aboutImage: file(relativePath: { regex: "/about/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

AboutPage.propTypes = {
    data: PropTypes.shape({
        aboutImage: PropTypes.object.isRequired,
    }).isRequired,
};
