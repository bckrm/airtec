export default {
    name: 'careerPage',
    title: 'Career Page',
    type: 'document',
    __experimental_actions: [
        'create',
        'update',
        // 'delete',
        'publish',
    ],
    fields: [
        {
            name: 'pageTitle',
            title: 'Page Title',
            type: 'string',
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'generalSellingPoints',
            title: 'General Selling Points',
            type: 'imageWithText',
        },
        {
            name: 'jobsAtAirtec',
            title: 'Jobs at Airtec',
            type: 'imageWithText',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        },
    ],
};
