/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';

import UpIcon from '../svg/thumbs-up-emoji.svg';
import DownIcon from '../svg/thumbs-down-emoji.svg';
import HornsIcon from '../svg/horns-emoji.svg';
import CallMeIcon from '../svg/call-me-emoji.svg';

export const reviewIcons = [
  {
    svg: <DownIcon />,
    color: 'text-red-500',
  },
  {
    svg: <UpIcon />,
    color: 'text-yellow-400',
  },
  {
    svg: <HornsIcon />,
    color: 'text-green-500',
  },
  {
    svg: <CallMeIcon />,
    color: 'text-blue-600',
  },
];
