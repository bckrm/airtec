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
            name: 'cardType',
            title: 'Card Type',
            type: 'string',
            description:
                'Selection will give card and/or button a primary or secondary color scheme.',
            options: {
                list: [
                    { title: 'Primary', value: 'primary' },
                    { title: 'Secondary', value: 'secondary' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            description:
                'Selection will give card and/or button a white, blue or transparent background color.',
            options: {
                list: [
                    { title: 'Light', value: 'light' },
                    { title: 'Dark', value: 'dark' },
                    { title: 'Transparent', value: 'transparent' },
                ],
            },
        },

        {
            name: 'cardOrientation',
            title: 'Card Orientation',
            type: 'boolean',
            description: 'Selection will align the card on the right.',
            options: {
                list: [{ title: 'Right', value: 'right' }],
                layout: 'radio',
            },
        },
        {
            name: 'button',
            title: 'Button',
            type: 'boolean',
            description: 'Selection will give card a button',
            options: {
                list: [{ title: 'hasButton', value: 'hasButton' }],
                layout: 'radio',
            },
        },
    ],
};
