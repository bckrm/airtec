import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import BgImagewithCard from '../components/bgImagewithCard';
import NewsList from '../components/newsList';

export default function IndexPage({ data }) {
    const {
        sanityIndexPage: {
            heroImage,
            heroHeading,
            subHero,
            visionSection,
            whatWeDoSection,
            seo,
        },
        allSanityNewsItem: { edges },
    } = data;

    console.log(edges);

    return (
        <Layout>
            <Seo title={seo.pageTitle} description={seo.pageDescription} />
            <Hero image={heroImage} title={heroHeading} />
            <BgImagewithCard data={subHero} />
            <BgImagewithCard data={visionSection} />
            <BgImagewithCard data={whatWeDoSection} />
            <NewsList news={edges} />
        </Layout>
    );
}

export const query = graphql`
    query IndexQuery {
        allSanityNewsItem {
            edges {
                node {
                    heroImage {
                        asset {
                            gatsbyImageData
                        }
                    }
                    newsTitle
                    newsSubTitle
                    description
                    slug {
                        current
                    }
                }
            }
        }
        sanityIndexPage {
            heroImage {
                asset {
                    gatsbyImageData(
                        width: 2000
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
            heroHeading
            visionSection {
                backgroundColor
                cardOrientation
                cardType
                info
                heading
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                cta {
                    link
                    linkType
                }
            }
            subHero {
                heading
                info
                backgroundColor
                cardOrientation
                cardType
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                cta {
                    link
                    linkType
                }
            }
            whatWeDoSection {
                heading
                info
                backgroundColor
                cardOrientation
                cardType
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                cta {
                    link
                    linkType
                }
            }
            seo {
                pageDescription
                pageTitle
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        subHero: PropTypes.object.isRequired,
        vision: PropTypes.object.isRequired,
        whatWeDoSection: PropTypes.object.isRequired,
        sanityIndexPage: PropTypes.object.isRequired,
        allSanityNewsItem: PropTypes.object.isRequired,
    }).isRequired,
};
