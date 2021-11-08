export default {
    name: 'leaderCard',
    title: 'Team Members',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'mainImage',
        },
        {
            name: 'linkedinURL',
            title: 'LinkedIn URL',
            type: 'url',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image', // Use the userPortait image field as thumbnail
        },
    },
};
