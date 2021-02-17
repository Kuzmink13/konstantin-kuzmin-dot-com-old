/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import Head from 'next/head';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import useToggle from '../hooks/useToggle';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const [isSidebarOpen, toggleSidebar] = useToggle();
  return (
    <div className="h-screen w-screen overflow-y-scroll flex flex-col justify-between">
      <Head>
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
      </Head>

      <Header {...{ isSidebarOpen, toggleSidebar }} />
      <div className="flex flex-col flex-grow">
        <Component {...pageProps} />
      </div>
      {isSidebarOpen && <Sidebar {...{ toggleSidebar }} />}
      <Footer />
    </div>
  );
}
