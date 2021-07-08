import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ServiceFleetSection from '../components/serviceFleetSection';

export default function NewsPage({ data }) {
    const { heroImage } = data;
    const content = {
        hero: {
            image: heroImage,
            text: 'News',
        },
    };
    const ProductTitle = 'Proin nec porta mauris. Donec et sapien turpis.';

    const fleet = [
        {
            image: heroImage,
            title: 'Nulla fermentum massa',
            description:
                'Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
        },
        {
            image: heroImage,
            title: 'Nulla fermentum massa',
            description:
                'Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
        },
        {
            image: heroImage,
            title: 'Nulla fermentum massa',
            description:
                'Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
        },
        {
            image: heroImage,
            title: 'Nulla fermentum massa',
            description:
                'Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
        },
    ];
    return (
        <Layout>
            <Hero data={content.hero} />
            <ServiceFleetSection products={fleet} productTitle={ProductTitle} />
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
