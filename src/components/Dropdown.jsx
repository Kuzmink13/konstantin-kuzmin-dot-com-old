/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { useState } from 'react';
import { Link } from 'gatsby';

import * as svg from '../data/svg.json';

export default function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      setOpen(!open);
    }
  };

  return (
    <>
      <div className="group relative text-gray-900">
        <button
          type="button"
          className="new-focus"
          tabIndex="0"
          onKeyDown={handleKeyPress}
        >
          {title}{' '}
          <svg
            className="inline h-5 w-5 pb-1 transform transition"
            viewBox={svg.arrowDown.viewbox}
          >
            <title>arrowDown</title>
            <path d={svg.arrowDown.path} />
          </svg>
        </button>
        <ul
          id="menu"
          className={`${
            !open && 'invisible group-hover:visible focus-within:visible'
          } flex flex-col items-start absolute bg-white shadow-lg space-y-6 p-4 pr-12 right-0 rounded-lg`}
          onFocus={() => setOpen(false)}
        >
          {items.map((el) => (
            <li key={el.name}>
              <Link className="new-focus" to={el.ref}>
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
