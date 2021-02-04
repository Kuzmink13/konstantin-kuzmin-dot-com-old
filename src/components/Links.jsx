/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Projects', link: '/Projects' },
  { name: 'Resume', link: '/Resume' },
  { name: 'Contact', link: '/Contact' },
];

export default function Links() {
  return (
    <ul className="flex flex-row justify-around">
      {links.map((el) => (
        <li key={el.name} className="">
          <Link to={el.link}>
            <h4 className="hover:underline hover:text-gray-900">{el.name}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
}
