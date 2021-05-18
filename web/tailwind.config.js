module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                'ts-h1': ['3.052rem'],
                'ts-h2': ['2.441rem'],
                'ts-h3': ['1.953rem'],
                'ts-h4': ['1.563rem'],
                'ts-h5': ['1.25rem'],
                'ts-lg-body': ['1.25rem'],
                'ts-body': ['1rem'],
                'ts-caption': ['0.8rem'],
                'ts-attribution': ['0.512rem'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
