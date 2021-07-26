import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ContactSection from '../components/contactSection';
import LogoSection from '../components/logoSection';

export default function Contact({ data }) {
    const {
        sanityContactPage: { heroImage, pageTitle },
        kieyos,
        priority,
    } = data;

    const images = [
        {
            image: priority,
        },
        {
            image: kieyos,
        },
    ];
    return (
        <Layout>
            <Hero image={heroImage} title={pageTitle} />
            <ContactSection />
            <LogoSection images={images} />
        </Layout>
    );
}

export const query = graphql`
    query ContactQuery {
        sanityContactPage {
            heroImage {
                asset {
                    gatsbyImageData(
                        width: 2000
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
            pageTitle
        }
        heroImage: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        kieyos: file(relativePath: { regex: "/kieyos/" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        priority: file(relativePath: { regex: "/priority/" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
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
        sanityContactPage: PropTypes.object.isRequired,
    }).isRequired,
};
