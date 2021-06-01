module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'brand-1': '#12163B',
                // darkest-blue
                'brand-2': '#282768',
                // dark-blue
                'brand-3': '#E81E25',
                // red
                'brand-4': '#6BABE5',
                // light-blue
                'brand-5': '#ACC9E8',
                // lightest-blue
                'brand-6': '#3F2B56',
                // purple
                'brand-7': '#D4C0CD',
                // light-purple
            },
            container: (theme) => ({
                center: true,
                padding: theme('spacing.5'),
            }),
            fontFamily: {
                display: 'Montserrat',
                body: 'Montserrat',
            },
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
