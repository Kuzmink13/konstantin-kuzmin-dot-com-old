/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import * as svg from '../assets/svg.json';

const links = [
  { name: 'Projects', link: '/Projects' },
  { name: 'Resume', link: '/Resume' },
  { name: 'Contact', link: '/Contact' },
];

const social = [
  { name: 'twitter', svg: svg.twitter, link: '' },
  { name: 'linkedin', svg: svg.linkedin, link: '' },
  { name: 'github', svg: svg.github, link: 'https://github.com/Kuzmink13' },
  // { name: 'instagram', svg: svg.instagram, link: '' },
  { name: 'youtube', svg: svg.youtube, link: '' },
  { name: 'stackoverflow', svg: svg.stackoverflow, link: '' },
];

export default function Header() {
  return (
    <div className="flex flex-col py-3 my-3 justify-items-center px-6 sm:px-8 md:px-4 w-full max-w-screen-lg mx-auto border-b">
      <div className="flex flex-row justify-between md:justify-center">
        <div className="flex flex-col justify-center md:hidden">
          <button className="icon-button">
            <svg viewBox={svg.menu.viewbox}>
              <title>menu</title>
              <path d={svg.menu.path} />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex flex-col-reverse justify-center w-56">
          <ul className="flex flex-row justify-around">
            {links.map((el) => (
              <li key={el.name} className="">
                <Link to={el.link}>
                  <h4 className="hover:underline hover:text-gray-900">
                    {el.name}
                  </h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <hgroup className="mx-6 lg:mx-10">
          <h1 className="text-right">KONSTANTIN</h1>
          <h1 className="text-right">KUZMIN</h1>
          <h4 className="hidden sm:block mt-1">
            Software Developer, Composer, Minnesotan
          </h4>
        </hgroup>

        <div className="hidden md:flex flex-col-reverse justify-center w-56">
          <ul className="flex flex-row justify-around">
            {social.map((el) => (
              <li key={el.name} className="icon-button">
                <a href={el.link} target="_">
                  <svg viewBox={el.svg.viewbox}>
                    <title>{el.name}</title>
                    <path d={el.svg.path} />
                  </svg>
                </a>
              </li>
            ))}
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
    </div>
  );
}
