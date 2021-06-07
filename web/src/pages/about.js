import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';

export default function AboutPage({ data }) {
    const { aboutImage } = data;

    const content = {
        hero: {
            image: aboutImage,
            text: 'ABOUT PAGE',
        },
    };

    return (
        <Layout>
            <Hero data={content.hero} image={aboutImage} />
        </Layout>
    );
}

export const query = graphql`
    query AboutQuery {
        aboutImage: file(relativePath: { regex: "/about/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

AboutPage.propTypes = {
    data: PropTypes.shape({
        aboutImage: PropTypes.object.isRequired,
    }).isRequired,
};
