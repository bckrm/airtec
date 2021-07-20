import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ProductDescription from '../components/productDescription';

export const query = graphql`
    query FleetTemplateQuery($id: String!) {
        heroImage: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        fleetItem: sanityFleet(id: { eq: $id }) {
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

export default function SingleFleetTemplate({ data }) {
    const { heroImage, fleetItem } = data;

    const content = {
        hero: {
            image: heroImage,
            text: 'Proin nec porta mauris. Donec et sapien turpis.',
        },
        product: {
            image: heroImage,
            productDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor erat pretium ligula dignissim cursus eleifend quis sapien. Pellentesque pellentesque aliquet tortor ut hendrerit. Etiam imperdiet orci rutrum consequat cursus. Fusce tincidunt lobortis mauris, a condimentum sapien rutrum ac. Phasellus tempor augue nec enim hendrerit, id pretium quam efficitur. Aenean nec malesuada dolor, vitae gravida dui. Donec non vulputate diam. Nulla fermentum massa sit amet suscipit posuere. Maecenas in lorem commodo, varius neque vitae, vehicula dolor. Sed ut viverra eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
            productName: 'Service/Plane',
        },
    };

    return (
        <Layout>
            <Hero data={content.hero} />
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
