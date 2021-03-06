/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import useDelayUnmount from '../hooks/useDelayUnmount';

const animationDelay = 150;

export default function Layout({ children }) {
  const [sidebar, setSidebarState] = useState(false);
  const shouldRender = useDelayUnmount(sidebar, animationDelay);

  return (
    <div
      className="flex flex-col justify-between
      h-screen w-screen overflow-y-scroll"
    >
      <Header toggle={() => setSidebarState(!sidebar)} />
      {shouldRender && (
        <Sidebar isOpen={sidebar} close={() => setSidebarState(false)} />
      )}
      <div className="flex flex-col flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
