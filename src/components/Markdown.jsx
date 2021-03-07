import React from 'react';

export const Bold = ({ children }) => (
  <strong className="font-bold text-red-500">{children}</strong>
);

export const Text = ({ children }) => <p>{children}</p>;

export const Heading1 = ({ children }) => (
  <h1 className="font-kanit">{children}</h1>
);
