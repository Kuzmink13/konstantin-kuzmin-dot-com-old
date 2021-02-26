/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { useState } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout({ children }) {
  const [sidebarState, setSidebarState] = useState(false);
  return (
    <div className="h-screen w-screen overflow-y-scroll flex flex-col justify-between">
      {/* <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Software Developer, Composer, Minnesotan"
        />
        <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
        <link rel="manifest" href="./manifest.json" />
        <title>Konstantin Kuzmin</title>
      </Head> */}

      <Header {...{ sidebarState, setSidebarState }} />
      <div className="flex flex-col flex-grow">{children}</div>
      {sidebarState && <Sidebar {...{ setSidebarState }} />}
      <Footer />
    </div>
  );
}
