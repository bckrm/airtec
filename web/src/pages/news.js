import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
// import ServiceFleetSection from '../components/serviceFleetSection';
import NewsSection from '../components/newsSection';

// Todo: will need to update the "fleet" query as this page will query news items, not fleet or service items.

export const query = graphql`
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
        heroImage: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        news: allSanityNewsItem {
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
    }
`;

export default function NewsPage({ data, location }) {
    const {
        news: { edges },
        sanityNewsPage: { heroImage, pageTitle, seo },
    } = data;

    const { pathname } = location;

    return (
        <Layout>
            <Seo
                title={seo.pageTitle}
                description={seo.pageDescription}
                image={heroImage.asset.url}
            />
            <Hero image={heroImage} title={pageTitle} />
            <NewsSection news={edges} pathname={pathname} />
        </Layout>
    );
}

NewsPage.propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        fleet: PropTypes.object.isRequired,
        sanityNewsPage: PropTypes.object.isRequired,
        news: PropTypes.object.isRequired,
    }).isRequired,
};
