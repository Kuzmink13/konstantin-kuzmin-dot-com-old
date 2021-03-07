module.exports = {
  siteMetadata: {
    title: 'Konstantin Kuzmin',
    author: 'Konstantin Kuzmin',
    copyright: '2021',
  },
  plugins: [
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
          include: /svg/, // See below to configure properly
        },
      },
    },
    'gatsby-plugin-postcss',
  ],
};
