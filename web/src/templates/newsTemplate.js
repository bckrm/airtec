import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import NewsContent from '../components/newsContent';
import RecentNewsList from '../components/recentNewsList';

export default function NewsTemplate({ data }) {
    const {
        newsItem,
        news: { edges },
    } = data;

    const { heroImage, newsTitle } = newsItem;

    return (
        <Layout>
            <Hero image={heroImage} title={newsTitle} />
            <NewsContent data={newsItem} />
            <RecentNewsList news={edges} />
        </Layout>
    );
}

export const query = graphql`
    query NewsTemplateQuery($id: String!) {
        newsItem: sanityNewsItem(id: { eq: $id }) {
            heroImage {
                asset {
                    gatsbyImageData
                }
            }
            id
            newsTitle
            newsSubTitle
            _rawNewsBody(resolveReferences: { maxDepth: 10 })
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

NewsTemplate.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        newsItem: PropTypes.object.isRequired,
        news: PropTypes.object.isRequired,
    }).isRequired,
};