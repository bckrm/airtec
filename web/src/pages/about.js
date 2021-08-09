import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import LeaderSection from '../components/leaderSection';
import AboutText from '../components/aboutTextSection';
import HistorySection from '../components/historySection';

export const query = graphql`
    query AboutQuery {
        sanityAboutPage {
            heroImage {
                asset {
                    url
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
                iconTextList {
                    text
                }
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
            seo {
                pageDescription
                pageTitle
            }
            historySection {
                history {
                    year
                    historyText
                    id
                    image {
                        asset {
                            gatsbyImageData
                        }
                    }
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
        sanityAboutPage: {
            heroImage,
            pageTitle,
            aboutSection,
            leadershipSection,
            historySection,
            seo,
        },
    } = data;

    return (
        <Layout>
            <Seo
                description={seo.pageDescription}
                image={heroImage.asset.url}
                title={seo.pageTitle}
            />
            <Hero image={heroImage} title={pageTitle} alt="" />
            <AboutText data={aboutSection} />
            <HistorySection years={historySection.history} />
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
