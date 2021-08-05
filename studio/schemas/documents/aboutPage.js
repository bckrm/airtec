export default {
    name: 'aboutPage',
    title: 'About Page',
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
            name: 'aboutSection',
            title: 'About Section',
            type: 'aboutSection',
        },
        {
            name: 'historySection',
            title: 'History Section',
            type: 'historySection',
        },
        {
            name: 'leadershipSection',
            title: 'Leadership Section',
            type: 'leadershipSection',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        },
    ],
};
