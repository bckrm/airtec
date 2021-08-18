export default {
    name: 'newsItem',
    title: 'News Item',
    type: 'document',
    __experimental_actions: [
        'create',
        'update',
        // 'delete',
        'publish',
    ],
    fields: [
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'newsTitle',
            title: 'News Title',
            type: 'string',
        },
        {
            name: 'newsSubTitle',
            title: 'News Sub Title',
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
            name: 'publishDate',
            type: 'date',
            title: 'Publish Date',
            description: 'This can be used to schedule post for publishing',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description:
                'Brief description of this news item. This text will appear on News Card.',
            validation: (Rule) => Rule.required().min(10).max(160),
        },
        {
            name: 'newsBody',
            title: 'News Body',
            type: 'bodyPortableText',
        },
    ],
    orderings: [
        {
            name: 'publishingDateAsc',
            title: 'Publishing date new–>old',
            by: [
                {
                    field: 'publishDate',
                    direction: 'desc',
                },
                {
                    field: 'title',
                    direction: 'asc',
                },
            ],
        },
        {
            name: 'publishingDateDesc',
            title: 'Publishing date old->new',
            by: [
                {
                    field: 'publishedAt',
                    direction: 'asc',
                },
                {
                    field: 'title',
                    direction: 'asc',
                },
            ],
        },
    ],
};
