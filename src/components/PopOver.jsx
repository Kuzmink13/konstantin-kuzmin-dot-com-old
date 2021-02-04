/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';

export default function PopOver({ closeFn }) {
  return (
    <div
      className="md:hidden absolute h-screen w-screen bg-gray-700 opacity-30"
      onClick={() => closeFn()}
    ></div>
  );
}
