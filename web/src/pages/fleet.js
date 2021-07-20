import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ServiceFleetSection from '../components/serviceFleetSection';

export const query = graphql`
    query FleetIndexQuery {
        heroImage: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
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

export default function ServiceFleetTemplate({ data }) {
    const {
        allSanityFleet: { edges },
        heroImage,
    } = data;

    const content = {
        hero: {
            image: heroImage,
            text: 'Donec eleifend faucibus finibus maximus',
        },
    };

    return (
        <Layout>
            <Hero data={content.hero} />
            <ServiceFleetSection products={edges} />
        </Layout>
    );
}

ServiceFleetTemplate.propTypes = {
    data: PropTypes.object.isRequired,
};
