/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import { Fragment } from 'react';
import Link from 'next/link';

const links = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  // { name: 'Resume', link: '/resume' },
  // { name: 'Contact', link: '/contact' },
];

export default function Links({ toggleSidebar, showHome = false }) {
  return (
    <Fragment>
      {links
        .filter((el) => el.name !== 'Home' || showHome)
        .map((el) => (
          <li key={el.name}>
            <Link href={el.link}>
              <a onClick={() => toggleSidebar(false)}>
                <h4 className="hover:underline hover:text-gray-900">
                  {el.name}
                </h4>
              </a>
            </Link>
          </li>
        ))}

      <li key="Resume">
        <a href="./konstantinkuzmin_resume.pdf" download>
          <h4 className="hover:underline hover:text-gray-900">Resume</h4>
        </a>
      </li>

      <li key="Contact">
        <a href="mailto:contact@konstantinkuzmin.com">
          <h4 className="hover:underline hover:text-gray-900">Contact</h4>
        </a>
      </li>
    </Fragment>
  );
}
