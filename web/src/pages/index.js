import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Hero from '../components/hero';
import BgImagewithCard from '../components/bgImagewithCard';
import NewsList from '../components/newsList';

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
            pageTitle
        }

        testImage: file(relativePath: { regex: "/hero/" }) {
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

export default function IndexPage({ data }) {
    const {
        heroImage,
        plane,
        subHero,
        vision: { edges },
        whatWeDoSection,
        plane,
        sanityIndexPage: { heroImage, pageTitle },
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
    const content = {
        hero: {
            image: heroImage,
            text: 'Donec eleifend faucibus finibus maximus',
        info: {
            heading: 'this is a heading',
            description:
                'Etiam felis mauris, dapibus commodo ex a, vestibulum consequat neque. Vestibulum id auctor sapien. Vestibulum tempor tortor eget purus lobortis pretium.',
        },
        button: {
            text: 'Learn More',
        },
    };
    return (
        <Layout>
            <Hero image={heroImage} title={pageTitle} />
            <BgImagewithCard
                data={subHero.edges[0].node.subHero}
                image={plane}
                isPrimaryDark
            />
            <BgImagewithCard
                data={edges[0].node.visionSection}
                image={plane}
                isDark
                isRight
                isPrimaryDark
            />
            <BgImagewithCard
                data={whatWeDoSection.edges[0].node.whatWeDoSection}
                image={plane}
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
        subHero: allSanityIndexPage {
            edges {
                node {
                    subHero {
                        heading
                        info
                    }
                }
            }
        }
        vision: allSanityIndexPage {
            edges {
                node {
                    visionSection {
                        heading
                        info
                    }
                }
            }
        }
        whatWeDoSection: allSanityIndexPage {
            edges {
                node {
                    whatWeDoSection {
                        heading
                        info
                    }
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        plane: PropTypes.object.isRequired,
        heroImage: PropTypes.object.isRequired,
        subHero: PropTypes.object.isRequired,
        vision: PropTypes.object.isRequired,
        whatWeDoSection: PropTypes.object.isRequired,
        sanityIndexPage: PropTypes.object.isRequired,
        testImage: PropTypes.object.isRequired,
        sanityIndexPage: PropTypes.object.isRequired,
        testImage: PropTypes.object.isRequired,
    }).isRequired,
};
