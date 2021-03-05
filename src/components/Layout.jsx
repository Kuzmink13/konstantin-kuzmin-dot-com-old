/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div
      className="flex flex-col justify-between
      h-screen w-screen overflow-y-scroll"
    >
      <Header />
      <div className="flex flex-col flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
