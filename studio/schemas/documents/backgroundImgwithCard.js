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
            name: 'cardBackgroundColor',
            title: 'Card Background Color',
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
            name: 'buttonType',
            title: 'Button Type',
            type: 'string',
            description:
                'Selection will give button a primary or secondary color scheme. If the card is light, choose a dark button',
            options: {
                list: [
                    { title: 'Primary Light', value: 'primaryLight' },
                    { title: 'Primary Dark', value: 'primaryDark' },
                    { title: 'Secondary Light', value: 'secondaryLight' },
                    { title: 'Secondary Dark', value: 'secondaryDark' },
                ],
            },
        },
    ],
};
