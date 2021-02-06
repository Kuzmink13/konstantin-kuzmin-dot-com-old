/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { useEffect } from 'react';

export default function PopOver({ closeFn }) {
  // ANIMATE COMPONENT
  useEffect(() => {
    const clickableBG = document.getElementById('pop');
    clickableBG.classList.remove('opacity-0');
    clickableBG.classList.add('opacity-30');
  }, []);

  const close = () => {
    closeFn();
    const clickableBG = document.getElementById('pop');
    clickableBG.classList.remove('opacity-30');
    clickableBG.classList.add('opacity-0');
  };

  return (
    <div
      id="pop"
      className="md:hidden fixed h-screen w-full bg-gray-700 opacity-0 transition-all duration-250"
      onClick={() => close()}
    ></div>
  );
}
