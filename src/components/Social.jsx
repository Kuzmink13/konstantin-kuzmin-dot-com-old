/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import * as svg from '../assets/svg.json';

const social = [
  { name: 'twitter', svg: svg.twitter, link: '' },
  { name: 'linkedin', svg: svg.linkedin, link: '' },
  { name: 'github', svg: svg.github, link: 'https://github.com/Kuzmink13' },
  // { name: 'instagram', svg: svg.instagram, link: '' },
  { name: 'youtube', svg: svg.youtube, link: '' },
  { name: 'stackoverflow', svg: svg.stackoverflow, link: '' },
];

export default function Social() {
  return (
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
  );
}
