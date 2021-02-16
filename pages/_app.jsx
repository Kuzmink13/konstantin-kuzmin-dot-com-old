/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import useToggle from '../hooks/useToggle';
// import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const [isSidebarOpen, toggleSidebar] = useToggle();
  return (
    <div className="h-full w-full overflow-y-scroll flex flex-col justify-between">
      <Header {...{ isSidebarOpen, toggleSidebar }} />
      {isSidebarOpen && <Sidebar {...{ toggleSidebar }} />}
      <div className="flex flex-col flex-none">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
