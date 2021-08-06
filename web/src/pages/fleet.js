import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import ServiceFleetSection from '../components/serviceFleetSection';

export const query = graphql`
    query FleetIndexQuery {
        sanityFleetPage {
            heroImage {
                asset {
                    gatsbyImageData(
                        width: 2000
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                    url
                }
            }
            pageTitle
            seo {
                pageTitle
                pageDescription
            }
        }

        allSanityFleet {
            edges {
                node {
                    description
                    id
                    heroImage {
                        asset {
                            gatsbyImageData(
                                width: 350
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                    slug {
                        current
                    }
                    title
                }
            }
        }
    }
`;

export default function FleetIndex({ data, location }) {
    const {
        allSanityFleet: { edges },
        sanityFleetPage: { heroImage, pageTitle, seo },
    } = data;

    const { pathname } = location;

    return (
        <Layout>
            <Seo
                title={seo.pageTitle}
                description={seo.pageDescription}
                image={heroImage.asset.url}
            />
            <Hero image={heroImage} title={pageTitle} />
            <ServiceFleetSection products={edges} pathname={pathname} />
        </Layout>
    );
}

FleetIndex.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
};
