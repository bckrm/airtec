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
    fragment SanityImage on SanityMainImage {
        crop {
            _key
            _type
            top
            bottom
            left
            right
        }
        hotspot {
            _key
            _type
            x
            y
            height
            width
        }
        asset {
            _id
        }
    }
    query AboutQuery {
        allSanityHistoryYear {
            edges {
                node {
                    id
                    year
                    historyText
                    image {
                        ...SanityImage
                    }
                }
            }
        }
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
                        ...SanityImage
                    }
                    linkedinURL
                }
            }
            seo {
                pageDescription
                pageTitle
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
        allSanityHistoryYear: { edges },
        sanityAboutPage: {
            heroImage,
            pageTitle,
            aboutSection,
            leadershipSection,
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
            <HistorySection years={edges} />
            <LeaderSection leaders={leadershipSection.leadership} />
        </Layout>
    );
}

AboutPage.propTypes = {
    data: PropTypes.shape({
        aboutImage: PropTypes.object.isRequired,
        sanityAboutPage: PropTypes.object.isRequired,
        allSanityHistoryYear: PropTypes.object.isRequired,
        testImage: PropTypes.object.isRequired,
    }).isRequired,
};
