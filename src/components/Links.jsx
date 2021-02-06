/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/Projects' },
  { name: 'Resume', link: '/Resume' },
  // { name: 'Contact', link: '/Contact' },
];

export default function Links({ toggleSidebar, showHome = false }) {
  return (
    <Fragment>
      {links
        .filter((el) => el.name !== 'Home' || showHome)
        .map((el) => (
          <li key={el.name}>
            <Link onClick={() => toggleSidebar(false)} to={el.link}>
              <h4 className="hover:underline hover:text-gray-900">{el.name}</h4>
            </Link>
          </li>
        ))}
      <li key="Contact">
        <a href="mailto:contact@konstantinkuzmin.com">
          <h4 className="hover:underline hover:text-gray-900">Contact</h4>
        </a>
      </li>
    </Fragment>
  );
}
