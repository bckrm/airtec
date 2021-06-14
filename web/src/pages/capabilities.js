import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';

export default function CapabilitiesPage({ data }) {
    const { heroImage } = data;

    const content = {
        hero: {
            image: heroImage,
            text: 'Capabilities',
        },
    };
    return (
        <Layout>
            <Hero data={content.hero} />
        </Layout>
    );
}

export const query = graphql`
    query CapabilitiesQuery {
        heroImage: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        plane: file(relativePath: { regex: "/plane/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

CapabilitiesPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
    }).isRequired,
};
