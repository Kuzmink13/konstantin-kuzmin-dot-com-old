/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { Fragment, useEffect } from 'react';
import { createFocusTrap } from 'focus-trap';

import PopOver from './PopOver';
import Links from './Links';
import Social from './Social';

export default function Sidebar({ toggleSidebar }) {
  // FOCUS-TRAP
  useEffect(() => {
    const container = document.getElementById('sidebar');

    const focusTrap = createFocusTrap('#sidebar', {
      allowOutsideClick: true,
      onActivate: function () {
        container.classList.add('trap', 'is-active');
      },
      onDeactivate: function () {
        container.classList.remove('is-active');
      },
    });

    focusTrap.activate();

    return () => {
      focusTrap.deactivate();
    };
  }, []);

  // ANIMATE COMPONENT
  useEffect(() => {
    const clickableBG = document.getElementById('sidebar');
    clickableBG.classList.remove('w-0');
    clickableBG.classList.add('w-56');
  }, []);

  const closeFn = () => {
    const clickableBG = document.getElementById('sidebar');
    clickableBG.classList.remove('w-56');
    clickableBG.classList.add('w-0');
    setTimeout(toggleSidebar, 150);
  };

  return (
    <Fragment>
      <PopOver closeFn={closeFn} />
      <div
        id="sidebar"
        className="md:hidden absolute w-0 h-screen bg-white transition-all duration-250"
      >
        <Links />
        <Social />
      </div>
    </Fragment>
  );
}
