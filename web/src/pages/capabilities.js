import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ImageWithText from '../components/imageWithText';
import BgImagewithCard from '../components/bgImagewithCard';
import CertificationSection from '../components/certificationSection';

export default function CapabilitiesPage({ data }) {
    const { heroImage, plane } = data;

    const content = {
        hero: {
            image: heroImage,
            text: 'Capabilities',
        },
        subHero: {
            id: 'services',
            image: plane,
            heading: 'Capabilities & Services',
            text:
                'Cras ut hendrerit lorem. Nunc tempus, est eu finibus porta, ante nisl molestie nunc, at gravida purus lectus a tellus. Aenean quis massa nulla. Mauris at leo quis diam finibus maximus. Donec cursus a metus id varius. Morbi feugiat, nisl vitae porttitor condimentum, tellus felis scelerisque leo, in cursus lacus augue nec justo.',
        },
        info: {
            id: 'services',
            heading: 'Services',
            description:
                'Etiam felis mauris, dapibus commodo ex a, vestibulum consequat neque. Vestibulum id auctor sapien. Vestibulum tempor tortor eget purus lobortis pretium.',
        },
        contracts: {
            id: 'contracts',
            image: plane,
            heading: 'GSA Schedule Contract',
            text:
                'Cras ut hendrerit lorem. Nunc tempus, est eu finibus porta, ante nisl molestie nunc, at gravida purus lectus a tellus. Aenean quis massa nulla. Mauris at leo quis diam finibus maximus. Donec cursus a metus id varius. Morbi feugiat, nisl vitae porttitor condimentum, tellus felis scelerisque leo, in cursus lacus augue nec justo.',
        },
    };

    const certifications = [
        {
            title: 'Nulla fermentum massa',
            description:
                'Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat',
        },
        {
            title: 'Nulla fermentum massa',
            description:
                'Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat',
        },
        {
            title: 'Nulla fermentum massa',
            description:
                'Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat',
        },
    ];
    return (
        <Layout>
            <Hero data={content.hero} />
            <ImageWithText data={content.subHero} />
            <BgImagewithCard
                data={content.info}
                image={plane}
                hasButton
                isSecondaryDark
            />
            <BgImagewithCard
                data={content.info}
                image={plane}
                isRight
                hasButton
                isSecondaryDark
            />
            <CertificationSection certifications={certifications} />
            <BgImagewithCard data={content.info} image={plane} />
            <BgImagewithCard
                data={content.info}
                image={plane}
                isRight
                hasButton
                isSecondaryDark
            />
            <ImageWithText data={content.contracts} />
        </Layout>
    );
}

export const query = graphql`
    query CapabilitiesQuery {
        heroImage: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        plane: file(relativePath: { regex: "/plane/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

CapabilitiesPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        plane: PropTypes.object.isRequired,
    }).isRequired,
};
