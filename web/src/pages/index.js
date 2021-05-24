import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';

export default function IndexPage({ data }) {
    const { heroImage } = data;
    return (
        <Layout>
            <Hero image={heroImage} />
        </Layout>
    );
}

export const query = graphql`
    query IndexQuery {
        heroImage: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
    }).isRequired,
};
