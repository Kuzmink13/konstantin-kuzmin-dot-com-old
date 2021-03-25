/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { useCallback, useEffect } from 'react';
import { Link } from 'gatsby';

import { TitleBlock } from './Header';

import { links as items } from '../data/links';
import { SIDEBAR_ANIMATION_DURATION } from '../data/constants';

import { onArrows, onEscape, onLeaveTree } from '../logic/utilities';

export default function Sidebar({ isOpen, close }) {
  // SET GLOBAL KEYBOARD LISTENERS
  const keyfns = useCallback(
    (e) => {
      onEscape(e, close);
      onArrows(e);
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', keyfns);
    } else {
      document.removeEventListener('keydown', keyfns);
    }
  }, [keyfns, isOpen]);

  // SET OPEN/CLOSE ANIMATION & LOCK SCROLLING
  useEffect(() => {
    const group = document.getElementById('group');
    const sidebar = document.getElementById('sidebar');
    const background = document.getElementById('dimmed-background');
    const wrapper = document.getElementById('gatsby-focus-wrapper');
    if (isOpen) {
      group.classList.replace('invisible', 'visible');
      sidebar.classList.replace('w-0', 'w-60');
      background.classList.replace('ease-in', 'ease-out');
      background.classList.replace('opacity-0', 'opacity-20');
      wrapper.classList.add('overflow-hidden');
    } else {
      sidebar.classList.replace('w-60', 'w-0');
      background.classList.replace('ease-out', 'ease-in');
      background.classList.replace('opacity-20', 'opacity-0');
      wrapper.classList.remove('overflow-hidden');
      setTimeout(
        () => group.classList.replace('visible', 'invisible'),
        SIDEBAR_ANIMATION_DURATION
      );
    }
  }, [isOpen]);

  // RENDER
  return (
    <div id="group" className="absolute invisible">
      <DimmedBackground close={close} />
      <div
        id="sidebar"
        className="fixed flex sm:hidden flex-col items-center
        bg-white overflow-hidden shadow-lg z-10
        w-0 h-full py-16 space-y-8
        transition-all"
        onBlur={(e) => onLeaveTree(e, close)}
      >
        <TitleBlock title="Konstantin Kuzmin" />
        <SidebarList />
      </div>
    </div>
  );
}

export function DimmedBackground({ close }) {
  return (
    <div
      id="dimmed-background"
      role="none"
      onClick={close}
      className="fixed sm:hidden inset-0
      bg-gray-900 opacity-0 z-10
      transition ease-out"
    />
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
      className="hover-shadow focus-ring whitespace-nowrap
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
