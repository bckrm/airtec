import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Button from '../components/button';
import Hero from '../components/hero';
import BgImagewithCard from '../components/bgImagewithCard';

export default function IndexPage({ data }) {
    const { heroImage, plane } = data;
    return (
        <Layout>
            <Hero image={heroImage} />
            <BgImagewithCard image={plane} />
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
        heroImage: PropTypes.object.isRequired,
    }).isRequired,
};
