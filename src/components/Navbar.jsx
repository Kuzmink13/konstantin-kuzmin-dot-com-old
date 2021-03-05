/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'gatsby';

import Dropdown from './Dropdown';

import DownIcon from '../svg/cheveron-down.svg';
import { links, TYPES } from '../data/links';

export default function Navbar() {
  return (
    <nav
      className="hidden sm:block flex-grow
      max-w-sm md:max-w-md lg:max-w-lg"
    >
      <ul className="flex flex-row justify-between items-center">
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
  switch (type) {
    case TYPES.LINK:
      return <NavLink {...{ name, payload }} />;
    case TYPES.LIST:
      return <NavDropdown {...{ name, payload }} />;
    default:
      return <span>{name}</span>;
  }
}

export function NavLink({ name, payload }) {
  return (
    <Link
      className="hover-shadow focus-ring px-2 py-1 
      font-kanit text-gray-700 md:text-lg lg:text-xl"
      to={payload}
    >
      {name}
    </Link>
  );
}

export function NavDropdown({ name, payload }) {
  return (
    <Dropdown items={payload}>
      <span
        className="px-2 py-1
        font-kanit text-gray-700 md:text-lg lg:text-xl"
      >
        {name}
        {'  '}
        <DownIcon className="inline h-5 w-5" />
      </span>
    </Dropdown>
  );
}
