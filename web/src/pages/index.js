import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SubHero from '../components/subHero';

export default function IndexPage({ data }) {
    const { plane } = data;
    return (
        <Layout>
            <h1>index page</h1>
            <SubHero image={plane} />
        </Layout>
    );
}

export const query = graphql`
    query IndexQuery {
        plane: file(relativePath: { regex: "/plane/" }) {
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
        plane: PropTypes.object.isRequired,
    }).isRequired,
};
