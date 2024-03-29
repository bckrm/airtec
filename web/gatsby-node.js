async function createFleetPages(graphql, actions) {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allSanityFleet {
                edges {
                    node {
                        id
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) throw result.errors;

    const fleetEdges = (result.data.allSanityFleet || {}).edges || [];

    fleetEdges.forEach((edge) => {
        const { id, slug = {} } = edge.node;
        const path = `/fleet/${slug.current}/`;

        createPage({
            path,
            component: require.resolve('./src/templates/fleetTemplate.js'),
            context: { id },
        });
    });
}

async function createNewsPages(graphql, actions) {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allSanityNewsItem {
                edges {
                    node {
                        id
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) throw result.errors;

    const newsEdges = (result.data.allSanityNewsItem || {}).edges || [];

    newsEdges.forEach((edge) => {
        const { id, slug = {} } = edge.node;
        const path = `/news/${slug.current}/`;

        createPage({
            path,
            component: require.resolve('./src/templates/newsTemplate.js'),
            context: { id },
        });
    });
}

async function createServicePages(graphql, actions) {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allSanityService {
                edges {
                    node {
                        id
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) throw result.errors;

    const serviceEdges = (result.data.allSanityService || {}).edges || [];

    serviceEdges.forEach((edge) => {
        const { id, slug = {} } = edge.node;
        const path = `/services/${slug.current}/`;

        console.log(path);
        createPage({
            path,
            component: require.resolve('./src/templates/serviceTemplate.js'),
            context: { id },
        });
    });
}

exports.createPages = async ({ graphql, actions }) => {
    await createFleetPages(graphql, actions);
    await createServicePages(graphql, actions);
    await createNewsPages(graphql, actions);
};
