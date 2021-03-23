/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default function Head({ title, desc }) {
  const { site } = useStaticQuery(query);
  return (
    <Helmet
      title={`${site.siteMetadata.title}${title ? ` - ${title}` : ''}`}
      htmlAttributes={{ lang: 'en' }}
    >
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content={desc || site.siteMetadata.description}
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
        rel="preload"
      />
    </Helmet>
  );
}
