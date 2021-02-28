/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'gatsby';

import links from '../data/links';
import * as svg from '../data/svg.json';

export default function Header({ setSidebarState }) {
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
        font-semibold 
        leading-6 md:leading-8 lg:leading-10
        tracking-wider"
      >
        <Link to="/">
          KONSTANTIN
          <br />
          KUZMIN
        </Link>
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
        <ul className="flex flex-row justify-between">
          {links
            .filter((el) => el.name !== 'Home')
            .map((el) => (
              <li key={el.name}>
                <Link
                  className="font-kanit md:text-lg lg:text-xl"
                  to={el.link}
                  onClick={() => setSidebarState(false)}
                >
                  {el.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
