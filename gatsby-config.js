module.exports = {
  siteMetadata: {
    title: 'SSOON: Shorten URL',
    description: 'URL shortener with an airtable backend',
    author: '@khriztianmoreno',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ssoon.io',
        short_name: 'ssoon.io',
        description: 'URL shortener with an airtable backend || @khriztianmoreno',
        lang: 'en',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        crossOrigin: 'use-credentials',
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        env: {
          production: {
            plugins: ['emotion'],
          },
          development: {
            plugins: [['emotion', { sourceMap: true }]],
          },
        },
      },
    },
  ],
};
