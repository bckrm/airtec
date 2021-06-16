import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ServiceFleetSection from '../components/serviceFleetSection';

export default function ServiceFleetTemplate({ data }) {
    const { heroImage } = data;
    const content = {
        hero: {
            image: heroImage,
            text: 'Donec eleifend faucibus finibus maximus',
        },
    };

    const ProductTitle = 'Proin nec porta mauris. Donec et sapien turpis.';

    const fleet = [
        {
            id: 1,
            image: heroImage,
            title: 'Nulla fermentum massa',
            description:
                'Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
        },
        {
            id: 2,
            image: heroImage,
            title: 'Nulla fermentum massa',
            description:
                'Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
        },
        {
            id: 3,
            image: heroImage,
            title: 'Nulla fermentum massa',
            description:
                'Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
        },
        {
            id: 4,
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
    query ServiceFleetTemplateQuery {
        heroImage: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
ServiceFleetTemplate.propTypes = {
    data: PropTypes.object.isRequired,
};
