/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="h-screen w-screen overflow-y-scroll flex flex-col justify-between text-gray-800">
      <Header />
      <div className="flex flex-col flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
