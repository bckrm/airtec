export default {
    name: 'certificationsSection',
    title: 'Certifications Section',
    type: 'document',
    fields: [
        {
            name: 'certifications',
            title: 'Certifications',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'certification' } }],
        },
    ],
};
