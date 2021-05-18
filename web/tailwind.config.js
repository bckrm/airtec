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
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
