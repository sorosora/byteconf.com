require('dotenv').config()

const fs = require('fs')
const { buildClientSchema } = require('graphql')

module.exports = {
  siteMetadata: {
    title: 'Byteconf',
    author: 'Bytesized',
    description: 'A developer community for everyone',
    siteUrl: 'https://www.byteconf.com',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://blog.byteconf.com`,
        clientId: `ghost-frontend`,
        clientSecret: `a9581dc692c6`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'SANITY',
        fieldName: 'sanity',
        refetchInterval: 15,
        url: 'https://82qqyrei.api.sanity.io/v1/graphql/byteconf/default',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-107917910-6`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Byteconf`,
        short_name: `Byteconf`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/byteconf-full.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
