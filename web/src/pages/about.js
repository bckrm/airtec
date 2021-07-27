import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import LeaderSection from '../components/leaderSection';
import AboutText from '../components/aboutTextSection';
import HistorySection from '../components/historySection';

export const query = graphql`
    query AboutQuery {
        sanityAboutPage {
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
            aboutSection {
                _rawLeftColumn
                _rawRightColumn
            }
            leadershipSection {
                leadership {
                    name
                    title
                    image {
                        asset {
                            gatsbyImageData
                        }
                    }
                    linkedinURL
                }
            }
        }
        aboutImage: file(relativePath: { regex: "/about/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        testImage: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default function AboutPage({ data }) {
    const {
        testImage,
        sanityAboutPage: {
            heroImage,
            pageTitle,
            aboutSection,
            leadershipSection,
        },
    } = data;

    const historyData = [
        {
            image: testImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '1995',
            id: 1,
        },
        {
            image: testImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '1999',
            id: 2,
        },
        {
            image: testImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '2003',
            id: 3,
        },
        {
            image: testImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '2007',
            id: 4,
        },
        {
            image: testImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '2012',
            id: 5,
        },
        {
            image: testImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '2017',
            id: 6,
        },
        {
            image: testImage,
            text:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            year: '2021',
            id: 7,
        },
    ];

    return (
        <Layout>
            <Hero image={heroImage} title={pageTitle} />
            <AboutText data={aboutSection} />
            <HistorySection years={historyData} />
            <LeaderSection leaders={leadershipSection.leadership} />
        </Layout>
    );
}

AboutPage.propTypes = {
    data: PropTypes.shape({
        aboutImage: PropTypes.object.isRequired,
        sanityAboutPage: PropTypes.object.isRequired,
        testImage: PropTypes.object.isRequired,
    }).isRequired,
};
