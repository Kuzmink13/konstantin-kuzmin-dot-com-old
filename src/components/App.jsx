/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
// import Contact from './Contact';
import Footer from './Footer';

import useToggle from '../hooks/useToggle';

export default function App() {
  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
    <BrowserRouter>
      <Header {...{ isSidebarOpen, toggleSidebar }} />
      {isSidebarOpen && <Sidebar {...{ toggleSidebar }} />}
      <div className="flex flex-col flex-grow">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
