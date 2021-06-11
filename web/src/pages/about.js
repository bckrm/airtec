import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import HistorySection from '../components/historySection';
import AboutText from '../components/aboutTextSection';

export default function AboutPage({ data }) {
    const { aboutImage, heroImage } = data;

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
    const historyData = [
        {
            image: heroImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '1995',
            id: 1,
        },
        {
            image: heroImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '1999',
            id: 2,
        },
        {
            image: heroImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '2003',
            id: 3,
        },
        {
            image: heroImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '2007',
            id: 4,
        },
        {
            image: heroImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '2012',
            id: 5,
        },
        {
            image: heroImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '2017',
            id: 6,
        },
        {
            image: heroImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '2021',
            id: 7,
        },
    ];

    return (
        <Layout>
            <Hero data={content.hero} />
            <AboutText data={content.about} />
            <HistorySection years={historyData} />
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
        heroImage: file(relativePath: { regex: "/hero/" }) {
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
        heroImage: PropTypes.object.isRequired,
    }).isRequired,
};
