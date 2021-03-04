/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import * as svg from '../data/svg.json';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import { links } from '../data/links';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default function Header() {
  const { site } = useStaticQuery(query);

  return (
    <header
      className="flex flex-row justify-between items-center
      w-full max-w-screen-xl 
      px-6 md:px-10 lg:px-16 py-6
      mx-auto
      border-b
      text-gray-700"
    >
      <Link className="w-44 md:w-52 lg:w-72 focus-ring" to="/">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl 
          font-semibold tracking-wider
          leading-6 md:leading-8 lg:leading-10"
        >
          {site.siteMetadata.title}
        </h1>
      </Link>

      <div className="sm:hidden font-kanit md:text-lg lg:text-xl">
        <svg
          className="hover-shadow focus-ring text-gray-600 hover:text-gray-800 h-9 w-9 p-2"
          viewBox={svg.menu.viewbox}
        >
          <title>menu</title>
          <path d={svg.menu.path} />
        </svg>
      </div>

      <Navbar />
    </header>
  );
}
