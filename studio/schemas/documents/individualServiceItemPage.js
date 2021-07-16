export default {
    name: 'individualServiceItemPage',
    title: 'Indivudal Service Item Page',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            description:
                'Brief description of this item. This text will appear on Service Card.',
            validation: (Rule) => Rule.required().min(10).max(160),
        },
        {
            name: 'serviceInfoBody',
            title: 'Service Info Body',
            type: 'bodyPortableText',
        },
    ],
};
