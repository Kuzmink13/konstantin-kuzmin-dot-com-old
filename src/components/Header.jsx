/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Dropdown from './Dropdown';

import { Content, Navigation } from '../data/links';
import * as svg from '../data/svg.json';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default function Header({ setSidebarState }) {
  const { site } = useStaticQuery(query);

  return (
    <header
      className="flex flex-row justify-between items-center
      w-full max-w-screen-xl 
      px-6 md:px-10 lg:px-16 py-6
      mx-auto
      border-b"
    >
      <h1
        className="text-3xl md:text-4xl lg:text-5xl 
        w-40 md:w-48 lg:w-64
        font-semibold 
        leading-6 md:leading-8 lg:leading-10
        tracking-wider"
      >
        <Link to="/">{site.siteMetadata.title}</Link>
      </h1>

      <button
        type="button"
        className="icon-button sm:hidden"
        onClick={() => setSidebarState(true)}
      >
        <svg viewBox={svg.menu.viewbox}>
          <title>menu</title>
          <path d={svg.menu.path} />
        </svg>
      </button>

      <nav
        className="hidden sm:block flex-grow
        max-w-sm md:max-w-md lg:max-w-lg
        ml-12"
      >
        <ul
          className="flex flex-row justify-between items-center
          font-kanit md:text-lg lg:text-xl"
        >
          {Navigation.filter((el) => el.name !== 'Home').map((el) => (
            <li key={el.name}>
              <Link className="new-focus" to={el.ref}>
                {el.name}
              </Link>
            </li>
          ))}
          <li>
            <Dropdown title="Content" items={Content} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
