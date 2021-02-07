/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import * as svg from '../assets/svg.json';

const myProjects = [
  {
    title: "Composer's Reference",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: { src: './pryes_grayscale.jpg', alt: 'alt text' },
    links: [
      {
        title: "composer's reference link",
        text: 'Visit Project',
        icon: svg.link,
        url: 'https://www.google.com',
      },
      {
        title: "composer's reference github link",
        text: 'Visit on Github',
        icon: svg.github,
        url: 'https://www.google.com',
      },
    ],
  },
  {
    title: 'KonstantinKuzmin.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: { src: './pryes_grayscale.jpg', alt: 'alt text' },
    links: [
      {
        title: 'konstantinkuzmin.com github link',
        text: 'Visit on Github',
        icon: svg.github,
        url: 'https://www.google.com',
      },
    ],
  },
];

function Project({ project, flip = false }) {
  return (
    <div
      className={`flex flex-col ${
        flip ? 'md:flex-row-reverse' : 'md:flex-row'
      } justify-between pb-8 md:pb-0`}
    >
      <div className="flex flex-col justify-center w-80 mx-auto md:w-full p-2 md:p-4">
        <h3>{project.title}</h3>
        <p className="leading-snug">{project.description}</p>
        <ul className="flex flex-row justify-center space-x-8 mt-3">
          {project.links.map((link) => (
            <li key={link.title}>
              <a
                href={link.url}
                target="_"
                className="flex flex-row space-x-2 items-center"
              >
                <svg viewBox={link.icon.viewbox} className="w-4 h-4">
                  <title>{link.title}</title>
                  <path d={link.icon.path} />
                </svg>
                <div className="font-kanit align-middle">{link.text}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <img
        className="w-80 p-2 md:p-4 mx-auto"
        alt={project.img.alt}
        src={project.img.src}
      ></img>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="w-full max-w-screen-md mx-auto">
      {/* <h2 className="px-2 md:px-4 mx-auto w-80 md:w-full">Projects</h2> */}
      {myProjects.map((project, i) => (
        <Project key={project.title} {...{ project }} flip={i % 2} />
      ))}
    </div>
  );
}
