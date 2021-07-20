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

exports.createPages = async ({ graphql, actions }) => {
    await createFleetPages(graphql, actions);
};
