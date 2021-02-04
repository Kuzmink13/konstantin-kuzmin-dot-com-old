/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { Fragment } from 'react';

import PopOver from './PopOver';

export default function Sidebar({ toggleSidebar }) {
  return (
    <Fragment>
      <PopOver closeFn={toggleSidebar} />
      <div className="md:hidden absolute w-64 h-screen bg-white">
        hello sidebar
      </div>
    </Fragment>
  );
}
