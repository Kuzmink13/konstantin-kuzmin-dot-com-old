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
      <div className="group relative">
        <button
          type="button"
          className="hover-shadow focus-ring px-2 py-1 whitespace-nowrap"
          tabIndex="0"
          onKeyDown={handleKeyPress}
          onBlur={() => setTimeout(() => setOpen(false))}
        >
          {title}{' '}
          <svg className="inline h-5 w-5 pb-1" viewBox={svg.arrowDown.viewbox}>
            <title>arrowDown</title>
            <path d={svg.arrowDown.path} />
          </svg>
        </button>
        <ul
          id="menu"
          className={`${
            !open && 'invisible group-hover:visible focus-within:visible'
          } absolute flex flex-col items-start space-y-2 md:space-y-4
          bg-white shadow-lg border rounded-lg
          pl-4 pr-10 py-3 md:pl-6 md:pr-16 md:py-4 right-0
          text-gray-700 text-base md:text-lg`}
        >
          {items.map((el) => (
            <li key={el.name}>
              <Link className="hover-shadow focus-ring px-2 py-1 " to={el.ref}>
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
