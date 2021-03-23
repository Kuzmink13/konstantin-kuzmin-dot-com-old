/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

module.exports = {
  siteMetadata: {
    title: 'Konstantin Kuzmin',
    author: 'Konstantin Kuzmin',
    description:
      'The personal website / portfolio of Konstantin Kuzmin, a software engineer from Minneapolis, Minnesota',
    copyright: '2021',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Konstantin Kuzmin`,
        short_name: `Konstantin Kuzmin`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f3f4f6`,
        display: `standalone`,
        icon: 'src/assets/site-icon-512x512.png',
      },
    },
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
