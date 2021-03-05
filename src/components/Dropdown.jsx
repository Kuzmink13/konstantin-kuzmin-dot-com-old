/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { useState } from 'react';
import { Link } from 'gatsby';

import { onKeyboardSelection } from '../logic/utilities';

export default function Dropdown({ children, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group relative">
      <div
        role="menuitem"
        className="flex hover-shadow focus-ring whitespace-nowrap cursor-pointer"
        tabIndex="0"
        onKeyDown={(event) => onKeyboardSelection(event, () => setOpen(!open))}
        onBlur={() => setTimeout(() => setOpen(false))}
      >
        {children}
      </div>
      <DropdownWrapper open={open}>
        <DropdownList items={items} />
      </DropdownWrapper>
    </div>
  );
}

export function DropdownWrapper({ open, children }) {
  return (
    <div
      className={`absolute right-0 z-10 ${
        !open && 'invisible group-hover:visible focus-within:visible'
      } bg-white border rounded-lg shadow-lg
      p-3 md:p-4`}
    >
      {children}
    </div>
  );
}

export function DropdownList({ items }) {
  return (
    <ul
      className="flex flex-col items-start 
      space-y-2 md:space-y-3 pr-8"
    >
      {items.map((el) => (
        <li key={el.name}>
          <DropDownItem name={el.name} payload={el.payload} />
        </li>
      ))}
    </ul>
  );
}

export function DropDownItem({ name, payload }) {
  return (
    <Link
      className="hover-shadow focus-ring 
      font-kanit text-gray-700 md:text-lg
      px-2 py-1 "
      to={payload}
    >
      {name}
    </Link>
  );
}
