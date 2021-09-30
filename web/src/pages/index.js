import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import BgImagewithCard from '../components/bgImagewithCard';
import NewsList from '../components/newsList';

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
    query IndexQuery {
        allSanityNewsItem {
            edges {
                node {
                    heroImage {
                        ...SanityImage
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
