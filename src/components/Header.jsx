/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Navbar from './Navbar';

import { onKeyboardSelection, onWrongDestination } from '../logic/utilities';

import MenuIcon from '../svg/menu.svg';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default function Header({ toggle }) {
  const { site } = useStaticQuery(query);

  return (
    <header
      className="flex flex-row justify-between items-center
      w-full max-w-screen-xl 
      px-6 md:px-10 lg:px-16 py-4
      mx-auto space-x-12
      border-b"
    >
      <TitleBlock title={site.siteMetadata.title} />
      <SidebarButton toggle={toggle} />
      <Navbar />
    </header>
  );
}

export function TitleBlock({ title }) {
  return (
    <Link className="focus-ring rounded-lg w-48 md:w-60 lg:w-72 p-2" to="/">
      <h1
        className="text-3xl md:text-4xl lg:text-5xl 
      text-gray-700 font-semibold tracking-wider
        leading-6 md:leading-8 lg:leading-10"
      >
        {title}
      </h1>
    </Link>
  );
}

export function SidebarButton({ toggle }) {
  return (
    <MenuIcon
      tabIndex="0"
      className="sm:hidden hover-shadow focus-ring
      text-gray-600 hover:text-gray-800
      h-9 w-9 p-2"
      onClick={toggle}
      onKeyDown={(e) => onKeyboardSelection(e, toggle)}
      onBlur={(e) =>
        onWrongDestination(e, document.getElementById('sidebar'), toggle)
      }
    />
  );
}
