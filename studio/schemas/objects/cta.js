export default {
    name: 'cta',
    type: 'object',
    title: 'CTA',
    fields: [
        {
            name: 'linkType',
            title: 'Link Type',
            type: 'string',
            description:
                'Selection will render internal or external link for your button',
            options: {
                list: [
                    { title: 'Internal', value: 'internal' },
                    { title: 'External', value: 'external' },
                ],
            },
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string',
            description: 'Add a link if card needs a button',
        },
    ],
};
