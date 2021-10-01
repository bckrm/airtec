import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Seo from '../components/seo';
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
                    url
                }
            }
            pageTitle
            services {
                heading
                info
                backgroundColor
                cardOrientation
                cardType
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                cta {
                    link
                    linkType
                }
            }
            fleet {
                heading
                info
                backgroundColor
                cardOrientation
                cardType
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                cta {
                    link
                    linkType
                }
            }
            safety {
                heading
                info
                backgroundColor
                cardOrientation
                cardType
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                cta {
                    link
                    linkType
                }
            }
            repairStation {
                heading
                info
                backgroundColor
                cardOrientation
                cardType
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                cta {
                    link
                    linkType
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
            seo {
                pageTitle
                pageDescription
            }
        }
        allSanityCertification {
            edges {
                node {
                    description
                    id
                    title
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
            seo,
        },
        allSanityCertification: { edges: certifications },
    } = data;

    const hasCertifications = certifications.length > 0;

    return (
        <Layout>
            <Seo
                title={seo.pageTitle}
                description={seo.pageDescription}
                image={heroImage.asset.url}
            />
            <Hero image={heroImage} title={pageTitle} />
            <ImageWithText data={capabilitiesAndServices} />
            <BgImagewithCard data={services} hasButton isSecondaryDark />
            <BgImagewithCard data={fleet} isRight hasButton isSecondaryDark />
            {hasCertifications && (
                <CertificationSection certifications={certifications} />
            )}
            <BgImagewithCard data={safety} />
            <BgImagewithCard data={repairStation} />
            <ImageWithText anchorId="contracts" data={gsaSchedule} />
        </Layout>
    );
}

CapabilitiesPage.propTypes = {
    data: PropTypes.shape({
        sanityCapabilitiesPage: PropTypes.object.isRequired,
        allSanityCertification: PropTypes.object.isRequired,
    }).isRequired,
};
