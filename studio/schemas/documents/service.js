export default {
    name: 'service',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'This will be the url path for this post',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'mainImage',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description:
                'Brief description of this item. This text will appear on Service Card.',
            validation: (Rule) => Rule.required().min(10).max(200),
        },
        {
            name: 'bodyLeftColumn',
            title: 'Body Column Left',
            type: 'bodyPortableText',
        },
        {
            name: 'bodyRightColumn',
            title: 'Body Column Right',
            type: 'bodyPortableText',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'heroImage',
        },
    },
};
