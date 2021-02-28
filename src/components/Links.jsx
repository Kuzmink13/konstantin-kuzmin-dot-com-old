/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'gatsby';

const links = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
  { name: 'Resume', link: '/resume' },
  { name: 'Contact', link: '/contact' },
];

export default function Links({ setSidebarState, showHome = false }) {
  return (
    <>
      {links
        .filter((el) => el.name !== 'Home' || showHome)
        .map((el) => (
          <li key={el.name}>
            <Link to={el.link} onClick={() => setSidebarState(false)}>
              <h4 className="hover:underline hover:text-gray-900">{el.name}</h4>
            </Link>
          </li>
        ))}
    </>
  );
}
