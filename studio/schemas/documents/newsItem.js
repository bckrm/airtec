export default {
    name: 'individualFleetItemPage',
    title: 'Individual Fleet Item Page',
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
            name: 'publishDate',
            type: 'date',
            title: 'Publish Date',
            description: 'This can be used to schedule post for publishing',
        },
        {
            name: 'newsImage',
            title: 'News Image',
            type: 'mainImage',
            description: 'This image will be used on the News Card',
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
