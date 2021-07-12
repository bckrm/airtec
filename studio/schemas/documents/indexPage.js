export default {
    name: 'indexPage',
    title: 'Index Page',
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
            name: 'heroHeading',
            title: 'Hero Heading',
            type: 'string',
        },
        {
            name: 'subHero',
            title: 'Sub Hero',
            type: 'backgroundImgwithCard',
        },
        {
            name: 'visionSection',
            title: 'Vision Section',
            type: 'backgroundImgwithCard',
        },
        {
            name: 'whatWeDoSection',
            title: 'What We Do Section',
            type: 'backgroundImgwithCard',
        },
        {
            name: 'newsSection',
            title: 'News Section',
            type: 'newsSection',
        },
    ],
};
