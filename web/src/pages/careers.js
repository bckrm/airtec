import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import ImageWithText from '../components/imageWithText';
import IconGrid from '../components/iconGrid';

export default function Careers({ data }) {
    const { heroImage, plane } = data;

    const content = {
        hero: {
            image: heroImage,
            text: 'Proin nec porta mauris. Donec et sapien turpis.',
        },
        subHero: {
            id: 'services',
            image: plane,
            heading: 'Capabilities & Services',
            text:
                'Cras ut hendrerit lorem. Nunc tempus, est eu finibus porta, ante nisl molestie nunc, at gravida purus lectus a tellus. Aenean quis massa nulla. Mauris at leo quis diam finibus maximus. Donec cursus a metus id varius. Morbi feugiat, nisl vitae porttitor condimentum, tellus felis scelerisque leo, in cursus lacus augue nec justo.',
        },
    };
    const text = 'Schedule Flexibility';
    return (
        <Layout>
            <Hero data={content.hero} />
            <ImageWithText data={content.subHero} />
            <IconGrid text={text} />
            <ImageWithText
                data={content.subHero}
                isLeft
                hasButton
                isSecondaryDark
            />
            <h2 className="font-bold text-4xl text-center text-brand-1 my-20">
                Mission Driven. Future Focused.
            </h2>
        </Layout>
    );
}

export const query = graphql`
    query CareersQuery {
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

Careers.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        plane: PropTypes.object.isRequired,
    }).isRequired,
};
