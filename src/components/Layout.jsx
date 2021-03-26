/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { useCallback, useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [sidebar, setSidebarState] = useState(false);
  const close = useCallback(() => setSidebarState(false), [setSidebarState]);

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header toggle={() => setSidebarState(!sidebar)} close={close} />
      <Sidebar isOpen={sidebar} close={close} />
      <main
        className="flex-grow w-full flex-shrink-0
        px-6 md:px-10 lg:px-16 mx-auto
        py-6 md:py-8 lg:py-10"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
