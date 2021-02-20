/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';

import Layout from '../components/Layout';
import Project from '../components/Project';

import myProjects from '../data/myProjects';

export default function projects() {
  return (
    <Layout>
      <div className="w-full max-w-screen-md mx-auto">
        {myProjects.map((project, i) => (
          <Project key={project.title} {...{ project }} flip={i % 2} />
        ))}
      </div>
    </Layout>
  );
}
