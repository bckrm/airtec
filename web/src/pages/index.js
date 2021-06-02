import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import MoreButton from '../components/moreButton';
import Button from '../components/button';
import Hero from '../components/hero';

export default function IndexPage({ data }) {
    const { heroImage } = data;
    return (
        <Layout>
            <h1>index page</h1>
            <MoreButton />
            <Hero image={heroImage} />
            <Button isPrimary />
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
