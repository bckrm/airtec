import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import ImageWithText from '../components/imageWithText';
import IconGrid from '../components/iconGrid';

export default function Careers({ data }) {
    const {
        sanityCareerPage: {
            heroImage,
            pageTitle,
            generalSellingPoints,
            jobsAtAirtec,
            seo,
        },
    } = data;

    return (
        <Layout>
            <Seo
                title={seo.pageTitle}
                description={seo.pageDescription}
                image={heroImage.asset.url}
            />
            <Hero image={heroImage} title={pageTitle} />
            <ImageWithText data={generalSellingPoints} />
            <IconGrid />
            <ImageWithText
                data={jobsAtAirtec}
                isLeft
                hasButton
                isSecondaryDark
                href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=0b6b7dfb-eb77-4517-b9ee-5f88d136d591&ccId=19000101_000001&jobId=414618&source=LI&lang=en_US&selectedMenuKey=CurrentOpenings"
            />
            <h2 className="font-bold text-4xl text-center text-brand-1 my-20">
                Mission Driven. Future Focused.
            </h2>
        </Layout>
    );
}

export const query = graphql`
    query CareersQuery {
        sanityCareerPage {
            heroImage {
                asset {
                    gatsbyImageData(
                        width: 2000
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                    url
                }
            }
            pageTitle
            seo {
                pageTitle
                pageDescription
            }
            generalSellingPoints {
                heading
                _rawInfo
                image {
                    asset {
                        gatsbyImageData
                    }
                }
            }
            jobsAtAirtec {
                heading
                _rawInfo
                image {
                    asset {
                        gatsbyImageData
                    }
                }
            }
        }
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
        sanityCareerPage: PropTypes.object.isRequired,
    }).isRequired,
};
