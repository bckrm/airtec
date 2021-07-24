import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ImageWithText from '../components/imageWithText';
// import BgImagewithCard from '../components/bgImagewithCard';
import CertificationSection from '../components/certificationSection';

export const query = graphql`
    query CapabilitiesQuery {
        sanityCapabilitiesPage {
            heroImage {
                asset {
                    gatsbyImageData
                }
            }
            pageTitle
            capabilitiesAndServices {
                heading
                _rawInfo
                image {
                    asset {
                        id
                        gatsbyImageData
                    }
                }
            }
            gsaSchedule {
                heading
                _rawInfo
                image {
                    asset {
                        id
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;
export default function CapabilitiesPage({ data }) {
    const {
        sanityCapabilitiesPage: {
            heroImage,
            pageTitle,
            gsaSchedule,
            capabilitiesAndServices,
        },
    } = data;

    const certifications = [
        {
            title: 'Nulla fermentum massa',
            description:
                'Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat',
        },
        {
            title: 'Nulla fermentum massa',
            description:
                'Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat',
        },
        {
            title: 'Nulla fermentum massa',
            description:
                'Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat',
        },
    ];
    return (
        <Layout>
            <Hero image={heroImage} title={pageTitle} />
            <ImageWithText data={capabilitiesAndServices} />
            {/* <BgImagewithCard
                data={content.info}
                image={plane}
                hasButton
                isSecondaryDark
            />
            <BgImagewithCard
                data={content.info}
                image={plane}
                isRight
                hasButton
                isSecondaryDark
            /> */}
            <CertificationSection certifications={certifications} />
            {/* <BgImagewithCard data={content.info} image={plane} />
            <BgImagewithCard
                data={content.info}
                image={plane}
                isRight
                hasButton
                isSecondaryDark
            /> */}
            <ImageWithText data={gsaSchedule} />
        </Layout>
    );
}

CapabilitiesPage.propTypes = {
    data: PropTypes.shape({
        sanityCapabilitiesPage: PropTypes.object.isRequired,
    }).isRequired,
};
