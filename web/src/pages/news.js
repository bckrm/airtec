import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import ServiceFleetSection from '../components/serviceFleetSection';

// Todo: will need to update the "fleet" query as this page will query news items, not fleet or service items.

export const query = graphql`
    query NewsPageQuery {
        sanityServicePage {
            heroImage {
                asset {
                    gatsbyImageData
                    url
                }
            }
            pageTitle
            seo {
                pageTitle
                pageDescription
            }
        }
        heroImage: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        fleet: allSanityFleet {
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

export default function NewsPage({ data }) {
    const {
        fleet: { edges },
        sanityServicePage: { heroImage, pageTitle, seo },
    } = data;
    //     const content = {
    //         hero: {
    //             image: heroImage,
    //             text: 'News',
    //         },
    //     };

    return (
        <Layout>
            <Seo
                title={seo.pageTitle}
                description={seo.pageDescription}
                image={heroImage.asset.url}
            />
            <Hero image={heroImage} title={pageTitle} />
            <ServiceFleetSection products={edges} />
        </Layout>
    );
}

NewsPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        fleet: PropTypes.object.isRequired,
        sanityServicePage: PropTypes.object.isRequired,
    }).isRequired,
};
