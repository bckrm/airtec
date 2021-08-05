import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import BgImagewithCard from '../components/bgImagewithCard';
import NewsList from '../components/newsList';

export default function IndexPage({ data }) {
    const {
        sanityIndexPage: {
            heroImage,
            heroHeading,
            subHero,
            visionSection,
            whatWeDoSection,
            seo,
        },
        testImage,
    } = data;

    const news = [
        {
            image: testImage,
            title: 'Title of the thing',
            description: 'Nam convallis arcu a quam tristique placerat.',
        },
        {
            image: testImage,
            title: 'Title of the thing',
            description:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt.',
        },
        {
            image: testImage,
            title: 'Title of the thing',
            description:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt. am convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt',
        },
        {
            image: testImage,
            title: 'Title of the thing',
            description:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt. am convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt',
        },
        {
            image: testImage,
            title: 'Title of the thing',
            description:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt. am convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt',
        },
        {
            image: testImage,
            title: 'Title of the thing',
            description:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt. am convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt',
        },
        {
            image: testImage,
            title: 'Title of the thing',
            description:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt. am convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt',
        },
        {
            image: testImage,
            title: 'Title of the thing',
            description:
                'Nam convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt. am convallis arcu a quam tristique placerat. Maecenas egestas, nibh et ultricies tristique, purus magna sodales nisi, sit amet efficitur justo massa accumsan augue. Proin condimentum dolor elementum augue fermentum pretium. Phasellus consequat diam vel ante placerat fermentum sit amet vitae velit. Quisque vel ante ac erat accumsan tincidunt',
        },
    ];

    return (
        <Layout>
            <Seo title={seo.pageTitle} description={seo.pageDescription} />
            <Hero image={heroImage} title={heroHeading} />
            <BgImagewithCard
                data={subHero}
                image={subHero.backgroundImage}
                isPrimaryDark
            />
            <BgImagewithCard
                data={visionSection}
                image={visionSection.backgroundImage}
                isDark
                isRight
                isPrimaryDark
            />
            <BgImagewithCard
                data={whatWeDoSection}
                image={whatWeDoSection.backgroundImage}
                hasButton
                isSecondaryDark
                isTransparent
            />
            <NewsList news={news} />
        </Layout>
    );
}

export const query = graphql`
    query IndexQuery {
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
            heroHeading
            visionSection {
                heading
                info
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
            subHero {
                heading
                info
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
            whatWeDoSection {
                heading
                info
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
            seo {
                pageDescription
                pageTitle
            }
        }

        testImage: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        subHero: PropTypes.object.isRequired,
        vision: PropTypes.object.isRequired,
        whatWeDoSection: PropTypes.object.isRequired,
        sanityIndexPage: PropTypes.object.isRequired,
        testImage: PropTypes.object.isRequired,
    }).isRequired,
};
