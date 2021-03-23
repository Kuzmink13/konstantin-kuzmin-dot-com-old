/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

module.exports = {
  siteMetadata: {
    title: 'Konstantin Kuzmin',
    author: 'Konstantin Kuzmin',
    copyright: '2021',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
  ],
};
