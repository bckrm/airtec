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
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'mainImage',
        },
        {
            name: 'id',
            title: 'Id',
            type: 'string',
        },
    ],
};
