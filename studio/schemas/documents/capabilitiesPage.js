export default {
    name: 'capabilitiesPage',
    title: 'Capabilities Page',
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
            name: 'capabilitiesAndServices',
            title: 'Capabilities and Services',
            type: 'imageWithText',
        },
    ],
};
