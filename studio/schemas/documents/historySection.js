export default {
    name: 'historySection',
    title: 'History Section',
    type: 'document',
    fields: [
        {
            name: 'history',
            title: 'History',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'historyYear' } }],
        },
    ],
};
