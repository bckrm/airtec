module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'brand-darkest-blue': '#12163B',
                'brand-dark-blue': '#282768',
                'brand-red': '#E81E25',
                'brand-light-blue': '#6BABE5',
                'brand-lightest-blue': '#ACC9E8',
                'brand-purple': '#3F2B56',
                'brand-light-purple': '#D4C0CD',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
