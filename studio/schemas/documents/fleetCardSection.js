export default {
    name: 'fleetCardSection',
    title: 'Fleet Card Section',
    type: 'document',
    fields: [
        {
            name: 'fleet',
            title: 'Fleet',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'fleetCard' } }],
        },
    ],
};
