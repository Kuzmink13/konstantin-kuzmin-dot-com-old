/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'gatsby';

import { TitleBlock } from './Header';

import { linksFlat as items } from '../data/links';

import { onLeaveTree } from '../logic/utilities';

export default function Sidebar({ close }) {
  return (
    <>
      <DimmedBackground close={close} />
      <div
        id="sidebar"
        className="fixed flex sm:hidden flex-col items-center
        w-60 h-full bg-white py-16 space-y-8 z-10"
        onBlur={(e) => onLeaveTree(e, close)}
      >
        <TitleBlock title="Konstantin Kuzmin" />
        <SidebarList />
      </div>
    </>
  );
}

export function SidebarList() {
  return (
    <ul
      className="flex flex-col 
      space-y-5 pr-12"
    >
      {items.map((el) => (
        <li key={el.name}>
          <SidebarItem name={el.name} svg={el.svg} payload={el.payload} />
        </li>
      ))}
    </ul>
  );
}

export function SidebarItem({ name, svg, payload }) {
  return (
    <Link
      className="hover-shadow focus-ring 
      font-kanit text-gray-700 md:text-lg
      px-2 py-1"
      to={payload}
    >
      <SidebarIcon svg={svg} />
      {name}
    </Link>
  );
}

export function SidebarIcon({ svg }) {
  return <span className="inline-block w-3 h-3 mr-5">{svg}</span>;
}

export function DimmedBackground({ close }) {
  return (
    <div
      role="none"
      onClick={close}
      className="fixed sm:hidden inset-0 bg-gray-900 opacity-10"
    />
  );
}
