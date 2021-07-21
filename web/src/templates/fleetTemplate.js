import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ProductDescription from '../components/productDescription';

export const query = graphql`
    query FleetTemplateQuery($id: String!) {
        fleetItem: sanityFleet(id: { eq: $id }) {
            heroImage {
                asset {
                    gatsbyImageData(
                        width: 2000
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
            id
            title
            _rawBodyLeftColumn(resolveReferences: { maxDepth: 10 })
            _rawBodyRightColumn(resolveReferences: { maxDepth: 10 })
        }
    }
`;
export default function SingleFleetTemplate({ data }) {
    const { fleetItem } = data;
    const { heroImage, title } = fleetItem;

    return (
        <Layout>
            <Hero image={heroImage} title={title} />
            <ProductDescription data={fleetItem} />
        </Layout>
    );
}

SingleFleetTemplate.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        fleetItem: PropTypes.object.isRequired,
    }).isRequired,
};
