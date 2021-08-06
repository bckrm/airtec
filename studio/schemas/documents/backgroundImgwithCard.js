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
    ],
};
