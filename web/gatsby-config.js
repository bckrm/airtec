require('dotenv').config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: 'AIRtec',
        titleTemplate: '%s',
        siteUrl: 'https://www.flyairtec.com',
        description: `AIRtec specializes in modifying aircraft to meet unique operational requirements, then operating & maintaining them to deliver outstanding mission results & data.`,
        image:
            'https://cdn.sanity.io/images/wqj2xpad/production/234735b1b8a645eeeaff61265a642fe6c42668f6-4608x2592.jpg',
        twitter: ' ',
    },
    plugins: [
        {
            resolve: 'gatsby-background-image',
            options: {
                // add your own characters to escape, replacing the default ':/'
                specialChars: '/:',
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ['develop'],
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    'G-1GDG9QV1K9', // Google Analytics / GA
                    'AW-CONVERSION_ID', // Google Ads / Adwords / AW
                    'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
            },
        },
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-postcss',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: process.env.SANITY_PROJECT_ID,
                dataset: process.env.SANITY_DATASET,
                token: process.env.SANITY_TOKEN,
            },
        },
        'gatsby-transformer-sharp',
    ],
};
