/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import { Fragment, useEffect } from 'react';
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
        className="md:hidden fixed w-0 h-full bg-white transition-all duration-250 py-12 overflow-hidden"
      >
        <h3 className="text-center py-3">Navigation</h3>
        <ul className="border-t border-b flex flex-col justify-around mx-8 py-3 space-y-3 text-center">
          <Links {...{ toggleSidebar }} showHome={true} />
        </ul>
        <ul className="flex flex-row justify-around px-5 py-4">
          <Social />
        </ul>
      </div>
    </Fragment>
  );
}
