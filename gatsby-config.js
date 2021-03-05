module.exports = {
  siteMetadata: {
    title: 'Konstantin Kuzmin',
    author: 'Konstantin Kuzmin',
    copyright: '2021',
  },
  plugins: [
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
