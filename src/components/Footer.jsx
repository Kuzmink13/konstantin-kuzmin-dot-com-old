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
    <footer className="bg-gray-100 w-full py-8 md:py-10 flex-shrink-0">
      <SocialBar />
      <p
        className="font-kanit text-gray-700 text-center 
        text-xs md:text-sm md:pt-1
        font-medium tracking-wide uppercase"
      >
        &copy; {site.siteMetadata.copyright} &middot; {site.siteMetadata.author}{' '}
        &middot; all rights reserved
      </p>
    </footer>
  );
}

export function SocialBar() {
  return (
    <ul className="flex justify-center space-x-6 mb-4">
      {social.map((el) => (
        <li key={el.name}>
          <SocialIcon
            name={el.name}
            svg={el.svg}
            link={el.link}
            target={el.target}
          />
        </li>
      ))}
    </ul>
  );
}

export function SocialIcon({ name, svg, link, target }) {
  return (
    <a
      href={link}
      title={name}
      className="block focus-ring rounded-lg
      text-gray-500 hover:text-gray-700
      h-9 w-9 md:h-10 md:w-10 p-2"
      target={target}
    >
      {svg}
    </a>
  );
}
