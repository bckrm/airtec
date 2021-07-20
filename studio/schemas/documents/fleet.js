export default {
    name: 'fleet',
    title: 'Fleet',
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
                source: 'name',
                maxLength: 96,
            },
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
                'Brief description of this item. This text will appear on Fleet Card.',
            validation: (Rule) => Rule.required().min(10).max(160),
        },
        {
            name: 'bodyLeftColumn',
            title: 'Body Left Column',
            type: 'bodyPortableText',
        },
        {
            name: 'bodyRightColumn',
            title: 'Body Right Column',
            type: 'bodyPortableText',
        },
    ],
};
