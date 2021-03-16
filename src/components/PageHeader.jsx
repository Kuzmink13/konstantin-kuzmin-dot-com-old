/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';

export default function PageHeader({ title, description }) {
  return (
    <div
      className="text-center mx-auto
      w-64 md:w-72 lg:w-80"
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl
        text-gray-700 font-semibold tracking-wider"
      >
        {title}
      </h2>
      <p
        className="text-md md:text-lg lg:text-xl text-gray-800
        leading-tight md:leading-snug lg:leading-snug
        pt-1 md:pt-2 lg:pt-3
        pb-6 md:pb-7 lg:pb-8"
      >
        {description}
      </p>
    </div>
  );
}
