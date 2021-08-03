export default {
    name: 'backgroundImgwithCard',
    title: 'Background Image With Card',
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
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
        },
        {
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            description:
                'Selection will give the card a dark blue or transparent background color. The default color is white',
            options: {
                list: [
                    { title: 'Dark', value: 'dark' },
                    { title: 'Transparent', value: 'transparent' },
                ],
            },
        },
        {
            name: 'cardOrientation',
            title: 'Card Orientation',
            type: 'string',
            description:
                'Selection will align the card on the right. Default is left oriented',
            options: {
                list: [{ title: 'Right', value: 'right' }],
            },
        },
        {
            name: 'button',
            title: 'Button',
            type: 'string',
            description: 'Selection will give card a button',
            options: {
                list: [{ title: 'Button', value: 'button' }],
            },
        },
        {
            name: 'linkType',
            title: 'Link Type',
            type: 'string',
            description: 'Selection will render internal or external link',
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
        },

        {
            name: 'cardType',
            title: 'Card Type',
            type: 'string',
            description:
                'Selection will give button a primary or secondary color theme. If the card is light, choose a primary button. If card is dark, choose secondary button',
            options: {
                list: [
                    { title: 'Primary', value: 'primary' },
                    { title: 'Secondary', value: 'secondary' },
                    { title: 'Transparent', value: 'transparent' },
                ],
            },
        },
    ],
};
