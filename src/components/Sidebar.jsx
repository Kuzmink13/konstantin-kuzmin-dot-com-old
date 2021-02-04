/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { Fragment } from 'react';

import PopOver from './PopOver';
import Links from './Links';
import Social from './Social';

export default function Sidebar({ toggleSidebar }) {
  return (
    <Fragment>
      <PopOver closeFn={toggleSidebar} />
      <div className="md:hidden absolute w-64 h-screen bg-white">
        <Links />
        <Social />
      </div>
    </Fragment>
  );
}
