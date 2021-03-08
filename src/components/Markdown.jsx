/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';

export const Text = ({ children }) => (
  <p
    className="md:text-lg lg:text-xl
    text-gray-800 leading-relaxed
    pb-4 md:pb-5 lg:pb-6"
  >
    {children}
  </p>
);

export const Heading3 = ({ children }) => (
  <h3
    className="text-xl md:text-2xl lg:text-3xl 
    text-gray-700 font-semibold tracking-wider
    py-1 md:py-2 lg:py-3"
  >
    {children}
  </h3>
);

export const Heading4 = ({ children }) => (
  <h4
    className="text-lg md:text-xl lg:text-2xl 
    text-gray-700 font-semibold tracking-wider
    md:py-1 lg:py-2"
  >
    {children}
  </h4>
);

export const HyperLInk = ({ children, data }) => (
  <a
    className="hover-shadow focus-ring px-1
    text-gray-700 font-medium underline"
    href={data.uri}
    target="_"
  >
    {children}
  </a>
);

export const Break = () => <hr className="pb-4 md:pb-5 lg:pb-6" />;
