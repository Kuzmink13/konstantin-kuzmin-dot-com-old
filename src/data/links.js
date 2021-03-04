/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

export const TYPES = {
  LINK: 'LINK',
  LIST: 'LIST',
};

export const links = [
  { name: 'About', type: TYPES.LINK, payload: '/about' },
  { name: 'Contact', type: TYPES.LINK, payload: '/contact' },
  { name: 'Projects', type: TYPES.LINK, payload: '/projects' },
  { name: 'Resume', type: TYPES.LINK, payload: '/resume' },
  {
    name: 'Content',
    type: TYPES.LIST,
    payload: [
      { name: 'Blog', type: TYPES.LINK, payload: '/blog' },
      { name: 'Reviews', type: TYPES.LINK, payload: '/reviews' },
      { name: 'Music', type: TYPES.LINK, payload: '/music' },
    ],
  },
];
