import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import NewsSection from '../components/newsSection';

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
    query NewsPageQuery {
        sanityNewsPage {
            heroImage {
                asset {
                    gatsbyImageData
                    url
                }
            }
            pageTitle
            seo {
                pageTitle
                pageDescription
            }
        }

        news: allSanityNewsItem(sort: { order: DESC, fields: publishDate }) {
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
    }
`;

export default function NewsPage({ data }) {
    const {
        news: { edges },
        sanityNewsPage: { heroImage, pageTitle, seo },
    } = data;

    return (
        <Layout>
            <Seo
                title={seo.pageTitle}
                description={seo.pageDescription}
                image={heroImage.asset.url}
            />
            <Hero image={heroImage} title={pageTitle} />
            <NewsSection news={edges} />
        </Layout>
    );
}

NewsPage.propTypes = {
    data: PropTypes.shape({
        sanityNewsPage: PropTypes.object.isRequired,
        news: PropTypes.object.isRequired,
    }).isRequired,
};
