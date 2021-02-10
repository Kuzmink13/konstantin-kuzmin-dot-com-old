/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { Fragment } from 'react';
import * as svg from '../assets/svg.json';

const social = [
  {
    name: 'email',
    svg: svg.send,
    link: 'mailto:contact@konstantinkuzmin.com',
    target: '',
  },
  {
    name: 'linkedin',
    svg: svg.linkedin,
    link: 'https://www.linkedin.com/in/konstantin-k-8b1a82b0/',
  },
  { name: 'github', svg: svg.github, link: 'https://www.github.com/Kuzmink13' },
  {
    name: 'twitter',
    svg: svg.twitter,
    link: 'https://www.twitter.com/kuzmink13',
  },
  // { name: 'instagram', svg: svg.instagram, link: '' },
  // { name: 'medium', svg: svg.medium, link: '' },
  // { name: 'youtube', svg: svg.youtube, link: '' },
  // { name: 'stackoverflow', svg: svg.stackoverflow, link: '' },
];

export default function Social() {
  return (
    <Fragment>
      {social.map((el) => (
        <li key={el.name} className="icon-button">
          <a href={el.link} target={el.target === undefined ? '_' : el.target}>
            <svg viewBox={el.svg.viewbox}>
              <title>{el.name}</title>
              <path d={el.svg.path} />
            </svg>
          </a>
        </li>
      ))}
    </Fragment>
  );
}
