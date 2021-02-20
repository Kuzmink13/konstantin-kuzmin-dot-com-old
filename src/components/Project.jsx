/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';

export default function Project({ project, flip = false }) {
  return (
    <div
      className={`flex flex-col ${
        flip ? 'md:flex-row-reverse' : 'md:flex-row'
      } justify-between pb-8 md:pb-0`}
    >
      <div className="flex flex-col justify-center w-80 mx-auto md:w-full p-2 md:p-4">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
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
        className="w-80 flex-shrink-0 m-2 md:m-4 mx-auto border"
        alt={project.img.alt}
        src={project.img.src}
      ></img>
    </div>
  );
}
