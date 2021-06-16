import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';

export default function NewsPage({ data }) {
    const { heroImage } = data;
    const content = {
        hero: {
            image: heroImage,
            text: 'News',
        },
    };
    return (
        <Layout>
            <Hero data={content.hero} />
        </Layout>
    );
}

export const query = graphql`
    query NewsPageQuery {
        heroImage: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

NewsPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
    }).isRequired,
};
