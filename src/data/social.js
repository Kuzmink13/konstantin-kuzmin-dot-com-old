/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import MailIcon from '../svg/envelope.svg';
import LinkedinIcon from '../svg/linkedin.svg';
import GithubIcon from '../svg/github.svg';
import TwitterIcon from '../svg/twitter.svg';

export const social = [
  {
    name: 'email',
    svg: <MailIcon />,
    link: 'mailto:contact@konstantinkuzmin.com',
    target: '',
  },
  {
    name: 'linkedin',
    svg: <LinkedinIcon />,
    link: 'https://www.linkedin.com/in/kuzmink13',
    target: '_',
  },
  {
    name: 'github',
    svg: <GithubIcon />,
    link: 'https://www.github.com/Kuzmink13',
    target: '_',
  },
  {
    name: 'twitter',
    svg: <TwitterIcon />,
    link: 'https://www.twitter.com/kuzmink13',
    target: '_',
  },
  // { name: 'instagram', svg: svg.instagram, link: '' },
  // { name: 'medium', svg: svg.medium, link: '' },
  // { name: 'youtube', svg: svg.youtube, link: '' },
  // { name: 'stackoverflow', svg: svg.stackoverflow, link: '' },
];
