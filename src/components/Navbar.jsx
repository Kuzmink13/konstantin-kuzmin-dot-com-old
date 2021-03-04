/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'gatsby';

import Dropdown from './Dropdown';

import * as svg from '../data/svg.json';
import { links, TYPES } from '../data/links';

export default function Navbar() {
  return (
    <nav
      className="hidden sm:block flex-grow
      max-w-sm md:max-w-md lg:max-w-lg
      ml-12"
    >
      <ul
        className="flex flex-row justify-between items-center
        font-kanit md:text-lg lg:text-xl"
      >
        {links.map((el) => (
          <li key={el.name}>
            <NavItem name={el.name} type={el.type} payload={el.payload} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function NavItem({ name, type, payload }) {
  return type === TYPES.LINK ? (
    <Link className="hover-shadow focus-ring px-2 py-1 " to={payload}>
      {name}
    </Link>
  ) : (
    <Dropdown items={payload}>
      <div className="px-2 py-1">
        {name}{' '}
        <svg className="inline h-5 w-5 pb-1" viewBox={svg.arrowDown.viewbox}>
          <title>arrowDown</title>
          <path d={svg.arrowDown.path} />
        </svg>
      </div>
    </Dropdown>
  );
}
