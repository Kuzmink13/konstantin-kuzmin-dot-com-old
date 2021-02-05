/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import * as svg from '../assets/svg.json';

import Links from './Links';
import Social from './Social';

export default function Header({ toggleSidebar }) {
  return (
    <header className="flex flex-col py-3 my-3 justify-items-center px-6 sm:px-8 md:px-4 w-full max-w-screen-lg mx-auto border-b">
      <div className="flex flex-row justify-between md:justify-center">
        <div className="flex flex-col justify-center md:hidden">
          <button className="icon-button" onClick={toggleSidebar}>
            <svg viewBox={svg.menu.viewbox}>
              <title>menu</title>
              <path d={svg.menu.path} />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex flex-col-reverse justify-center w-56">
          <ul className="flex flex-row justify-around">
            <Links {...{ toggleSidebar }} />
          </ul>
        </div>

        <Link className="mx-6 lg:mx-16" to="/">
          <hgroup>
            <h1 className="text-right">KONSTANTIN</h1>
            <h1 className="text-right">KUZMIN</h1>
            <h4 className="hidden sm:block mt-1">
              Software Developer, Composer, Minnesotan
            </h4>
          </hgroup>
        </Link>

        <div className="hidden md:flex flex-col-reverse justify-center w-56">
          <ul className="flex flex-row justify-around">
            <Social />
          </ul>
        </div>

        <div className="flex flex-col justify-center md:hidden">
          <button className="icon-button">
            <svg viewBox={svg.send.viewbox}>
              <title>contact</title>
              <path d={svg.send.path} />
            </svg>
          </button>
        </div>
      </div>
      <h4 className="block sm:hidden mt-1 mx-auto text-sm">
        Software Developer, Composer, Minnesotan
      </h4>
    </header>
  );
}
