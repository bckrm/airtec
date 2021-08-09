import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';

export default function PageNotFound({ data }) {
    const {
        sanityIndexPage: { pageTitle, heroImage },
    } = data;

    return (
        <Layout>
            <Hero image={heroImage} title={pageTitle} />
            <div className="container flex flex-col justify-center max-w-lg my-40">
                <h1 className="heading-accent pb-10 font-bold text-brand-1 text-ts-h3">
                    Page Not Found
                </h1>
                <p>
                    Looks like you&apos;ve followed a broken link or entered a
                    URL that doesn&apos;t exist on this site.
                </p>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query PageNotFoundQuery {
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
            pageTitle
        }
    }
`;

PageNotFound.propTypes = {
    data: PropTypes.shape({
        sanityIndexPage: PropTypes.object.isRequired,
    }).isRequired,
};
