import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ContactSection from '../components/contactSection';

export default function Contact({ data }) {
    const { heroImage } = data;
    const content = {
        hero: {
            image: heroImage,
            text: 'Contact',
        },
    };
    return (
        <Layout>
            <Hero data={content.hero} />
            <ContactSection />
        </Layout>
    );
}

export const query = graphql`
    query ContactQuery {
        heroImage: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

Contact.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
    }).isRequired,
};
