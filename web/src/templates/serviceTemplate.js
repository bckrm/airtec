import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ProductDescription from '../components/productDescription';

export const query = graphql`
    query ServiceTemplateQuery($id: String!) {
        serviceItem: sanityService(id: { eq: $id }) {
            heroImage {
                asset {
                    gatsbyImageData
                }
            }
            id
            title
            _rawBodyLeftColumn(resolveReferences: { maxDepth: 10 })
            _rawBodyRightColumn(resolveReferences: { maxDepth: 10 })
        }
    }
`;

export default function SingleServiceTemplate({ data }) {
    const { serviceItem } = data;
    const { heroImage, title } = serviceItem;

    return (
        <Layout>
            <Hero image={heroImage} title={title} />
            <ProductDescription data={serviceItem} />
        </Layout>
    );
}

SingleServiceTemplate.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        serviceItem: PropTypes.object.isRequired,
    }).isRequired,
};
