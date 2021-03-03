/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { social } from '../data/social';

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
    <footer className="relative bg-gray-100 w-full pt-8 pb-8">
      <ul className="flex justify-center space-x-6 mb-4">
        {social.map((el) => (
          <li key={el.name} className="text-gray-500 hover:text-gray-700">
            <a
              href={el.link}
              className="block focus-ring h-9 w-9 p-2 rounded-lg"
              target={el.target === undefined ? '_' : el.target}
            >
              <svg viewBox={el.svg.viewbox}>
                <title>{el.name}</title>
                <path d={el.svg.path} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
      <p className="text-gray-600 text-center font-kanit tracking-wide text-xs font-medium uppercase ">
        &copy; {site.siteMetadata.copyright} &middot; {site.siteMetadata.author}{' '}
        &middot; all rights reserved
      </p>
    </footer>
  );
}
