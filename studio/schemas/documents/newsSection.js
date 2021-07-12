export default {
    name: 'newsSection',
    title: 'News Section',
    type: 'document',
    fields: [
        {
            name: 'Heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'newsCarousel',
            title: 'News Carousel',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'newsCard' } }],
        },
    ],
};
