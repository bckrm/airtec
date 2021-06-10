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
            name: 'heroHeading',
            title: 'Hero Heading',
            type: 'string',
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
        },
    ],
};
