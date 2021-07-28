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
                'Selection will give card a white, blue or transparent background color.',
            options: {
                list: [
                    { title: 'Primary Light', value: 'primaryLight' },
                    { title: 'Primary Dark', value: 'primaryDark' },
                    { title: 'Secondary Light', value: 'secondaryLight' },
                    { title: 'Secondary Dark', value: 'secondaryDark' },
                    { title: 'Transparent', value: 'transparent' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'cardOrientation',
            title: 'Card Orientation',
            type: 'string',
            description:
                'Selection will align the card on the right or left side of the screen.',
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                ],
                layout: 'radio',
            },
        },
    ],
};
