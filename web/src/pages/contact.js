import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ContactSection from '../components/contactSection';
import LogoSection from '../components/logoSection';

export default function Contact({ data }) {
    const { heroImage, kieyos, priority } = data;
    const content = {
        hero: {
            image: heroImage,
            text: 'Contact',
        },
    };
    const images = [
        {
            image: kieyos,
        },
        {
            image: priority,
        },
    ];
    return (
        <Layout>
            <Hero data={content.hero} />
            <ContactSection />
            <LogoSection images={images} />
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
        kieyos: file(relativePath: { regex: "/kieyos/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        priority: file(relativePath: { regex: "/priority/" }) {
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
        kieyos: PropTypes.object.isRequired,
        priority: PropTypes.object.isRequired,
    }).isRequired,
};
