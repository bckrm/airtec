export default {
    name: 'imageWithText',
    title: 'Image With text',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'info',
            title: 'Info',
            type: 'bodyPortableText',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'mainImage',
        },
        {
            name: 'buttonURL',
            title: 'Button URL',
            type: 'url',
            description: 'Add URL if component needs a button',
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        },
    ],
};
