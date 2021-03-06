/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [sidebar, setSidebarState] = useState(false);

  return (
    <div
      className="flex flex-col justify-between
      h-screen w-screen overflow-y-scroll"
    >
      <Header
        toggle={() => setSidebarState(!sidebar)}
        close={() => setSidebarState(false)}
      />
      <Sidebar isOpen={sidebar} close={() => setSidebarState(false)} />
      <div className="flex flex-col flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
