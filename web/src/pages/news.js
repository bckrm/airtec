import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
// import Hero from '../components/hero';
import ServiceFleetSection from '../components/serviceFleetSection';

// Todo: will need to update the "fleet" query as this page will query news items, not fleet or service items.

export const query = graphql`
    query NewsPageQuery {
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
        // heroImage,
    } = data;
    //     const content = {
    //         hero: {
    //             image: heroImage,
    //             text: 'News',
    //         },
    //     };

    return (
        <Layout>
            {/* <Hero data={content.hero} /> */}
            <ServiceFleetSection products={edges} />
        </Layout>
    );
}

NewsPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        fleet: PropTypes.object.isRequired,
    }).isRequired,
};
