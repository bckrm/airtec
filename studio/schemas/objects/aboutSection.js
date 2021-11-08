export default {
    name: 'aboutSection',
    title: 'About Section',
    type: 'object',
    fields: [
        {
            name: 'leftColumn',
            title: 'Left Column',
            type: 'aboutPortableText',
        },
        {
            name: 'iconTextList',
            title: 'Icon Text List',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'iconText' } }],
        },
        {
            name: 'rightColumn',
            title: 'Right Column',
            type: 'aboutPortableText',
        },
    ],
};
