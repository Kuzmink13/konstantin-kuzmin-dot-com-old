/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    site {
      siteMetadata {
        author
        copyright
      }
    }
  }
`;

export default function Footer() {
  const { site } = useStaticQuery(query);

  return (
    <footer className="bg-gray-900 w-full py-1">
      <p className="text-gray-100 text-center font-kanit tracking-wide text-xs font-medium uppercase">
        &copy; {site.siteMetadata.copyright} &middot; {site.siteMetadata.author}{' '}
        &middot; all rights reserved
      </p>
    </footer>
  );
}
