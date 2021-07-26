import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ImageWithText from '../components/imageWithText';
import BgImagewithCard from '../components/bgImagewithCard';
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
            services {
                heading
                info
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
            fleet {
                heading
                info
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
            safety {
                heading
                info
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
            repairStation {
                heading
                info
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
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
            services,
            fleet,
            safety,
            repairStation,
            capabilitiesAndServices,
            gsaSchedule,
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
            <BgImagewithCard data={services} hasButton isSecondaryDark />
            <BgImagewithCard data={fleet} isRight hasButton isSecondaryDark />
            <CertificationSection certifications={certifications} />
            <BgImagewithCard data={safety} />
            <BgImagewithCard
                data={repairStation}
                isRight
                hasButton
                isSecondaryDark
            />
            <ImageWithText data={gsaSchedule} />
        </Layout>
    );
}

CapabilitiesPage.propTypes = {
    data: PropTypes.shape({
        sanityCapabilitiesPage: PropTypes.object.isRequired,
    }).isRequired,
};
