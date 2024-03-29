export default {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'pageTitle',
            title: 'Page Title',
            type: 'text',
        },
        {
            name: 'pageDescription',
            title: 'Page Description',
            type: 'text',
            description: 'Should not be longer than 297 characters',
        },
    ],
};
