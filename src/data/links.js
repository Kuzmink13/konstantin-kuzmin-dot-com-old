/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';

import AboutIcon from '../svg/user.svg';
import ContactIcon from '../svg/envelope.svg';
import ProjectsIcon from '../svg/computer-laptop.svg';
import ResumeIcon from '../svg/document.svg';
import BlogIcon from '../svg/news-paper.svg';
import ReviewIcon from '../svg/thumbs-up.svg';
import MusicIcon from '../svg/headphones.svg';

export const TYPES = {
  LINK: 'LINK',
  LIST: 'LIST',
};

export const links = [
  {
    name: 'About',
    svg: <AboutIcon />,
    type: TYPES.LINK,
    payload: '/about',
  },
  {
    name: 'Contact',
    svg: <ContactIcon />,
    type: TYPES.LINK,
    payload: '/contact',
  },
  {
    name: 'Projects',
    svg: <ProjectsIcon />,
    type: TYPES.LINK,
    payload: '/projects',
  },
  {
    name: 'Resume',
    svg: <ResumeIcon />,
    type: TYPES.LINK,
    payload: '/resume',
  },
  {
    name: 'Content',
    type: TYPES.LIST,
    payload: [
      {
        name: 'Blog',
        svg: <BlogIcon />,
        type: TYPES.LINK,
        payload: '/blog',
      },
      {
        name: 'Reviews',
        svg: <ReviewIcon />,
        type: TYPES.LINK,
        payload: '/reviews',
      },
      {
        name: 'Music',
        svg: <MusicIcon />,
        type: TYPES.LINK,
        payload: '/music',
      },
    ],
  },
];

export const linksFlat = [...links.slice(0, 4), ...links[4].payload];
