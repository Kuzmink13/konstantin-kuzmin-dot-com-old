/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import CompRef from '../assets/compref_grayscale.png';
import KK from '../assets/kkdotcom.png';

import * as svg from './svg.json';

export default [
  {
    title: "Composer's Reference",
    description:
      'An interactive music theory resource designed as a companion to the songwriting process. Built with React and TailwindCSS. Music engraving by VexFlow.js.',
    img: {
      src: CompRef,
      alt: "composer's reference landing page",
    },
    links: [
      {
        title: "composer's reference link",
        text: 'Visit Project',
        icon: svg.link,
        url: 'https://www.composersreference.com',
      },
      {
        title: "composer's reference github link",
        text: 'Visit on Github',
        icon: svg.github,
        url: 'https://www.github.com/Kuzmink13/Composers-Reference',
      },
    ],
  },
  {
    title: 'KonstantinKuzmin.com',
    description:
      'A simple, responsive website that serves as my home on the internet. Built with React, Next.js and TailwindCSS.',
    img: {
      src: KK,
      alt: 'konstantinkuzmin.com landing page',
    },
    links: [
      {
        title: 'konstantinkuzmin.com github link',
        text: 'Visit on Github',
        icon: svg.github,
        url: 'https://www.github.com/Kuzmink13/konstantin-kuzmin-dot-com',
      },
    ],
  },
];
