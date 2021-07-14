export default {
    name: 'leadershipSection',
    title: 'Leadership Section',
    type: 'document',
    fields: [
        {
            name: 'leadership',
            title: 'Leadership',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'leaderCard' } }],
        },
    ],
};
