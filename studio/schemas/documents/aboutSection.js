export default {
    name: 'aboutSection',
    title: 'About Section',
    type: 'document',
    fields: [
        {
            name: 'leftAboutText',
            title: 'Left About Text',
            type: 'aboutPortableText',
        },
        {
            name: 'aboutIconText',
            title: 'About Icon Text',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'aboutIcon' } }],
        },
        {
            name: 'rightAboutText',
            title: 'Right About Text',
            type: 'aboutPortableText',
        },
    ],
};
