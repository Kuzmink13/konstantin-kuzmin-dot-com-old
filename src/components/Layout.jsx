/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="flex flex-col justify-between
      h-screen w-screen overflow-y-scroll"
    >
      <Header toggle={() => setSidebarOpen(!sidebarOpen)} />
      {sidebarOpen && <Sidebar close={() => setSidebarOpen(false)} />}
      <div className="flex flex-col flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
