export default {
    name: 'aboutSection',
    title: 'About Section',
    type: 'document',
    fields: [
        {
            name: 'aboutText',
            title: 'About Text',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'aboutIconText',
            title: 'About Icon Text',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'aboutIcon' } }],
        },
    ],
};
