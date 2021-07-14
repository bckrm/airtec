export default {
    name: 'imageWithText',
    title: 'Image With text',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'info',
            title: 'Info',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'mainImage',
        },
    ],
};
